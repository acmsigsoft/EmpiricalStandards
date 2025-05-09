// This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
function generateDecisionMessageBlock() {

	var checklistYesNotCheckedCount;
	var checklistNoCheckedCount;

	// Number of yes's that are not checked and nos checked
	if (role != "\"author\"") {
		checklistYesNotCheckedCount = $('input[class="checklist_radio_yes"][type="radio"][value="yes"]').not(':checked').length;
		checklistNoCheckedCount = $('input[class="checklist_radio_no"][type="radio"][value="no"]:checked').length;
	}

	// Second level yes
	deviationYesCheckedCount = $('input[class="deviationRadioYes"][type="radio"][value="yes"]:checked').length;

	console.log("Test: " + checklistYesNotCheckedCount + " yeses not counted; " + checklistNoCheckedCount + " nos counted; " + deviationYesCheckedCount + " deviation yeses counted; ");

	// Count the number of types (type1, type2, type3, type4)
	justificationType1CheckedCount = $('input[class="justification_radio_type"][type="radio"][value="type1"]:checked').length;
	justificationType2CheckedCount = $('input[class="justification_radio_type"][type="radio"][value="type2"]:checked').length;
	justificationType3CheckedCount = $('input[class="justification_radio_type"][type="radio"][value="type3"]:checked').length;
	justificationType4CheckedCount = $('input[class="justification_radio_type"][type="radio"][value="type4"]:checked').length;

	var message = "";

	// FOR SAVING THE FILE
	// Making sure every attribute has an option selected.
	if (role == "\"one-phase-reviewer\"") {

		document.getElementById("deviation_reasonable").style.display = "none";
		document.getElementById("deviation_unreasonable").style.display = "none";
		document.getElementById("Desirable").style.display = "none";
		document.getElementById("Extraordinary").style.display = "none";
		$('.checkbox_attributes').prop('checked', false);

		console.log("checklistYesNotCheckedCount: ", checklistYesNotCheckedCount);
		console.log("checklistNoCheckedCount: ", checklistNoCheckedCount);
		console.log("deviationYesCheckedCount: ", deviationYesCheckedCount);
		if (checklistYesNotCheckedCount == checklistNoCheckedCount & checklistNoCheckedCount == (deviationYesCheckedCount + justificationType1CheckedCount + justificationType2CheckedCount + justificationType3CheckedCount + justificationType4CheckedCount)) {

			// if number of type 3 + type 4 is greater than 0
			if (justificationType3CheckedCount + justificationType4CheckedCount + justificationType2CheckedCount > 0) {
				message = "REJECT";
				document.getElementById("deviation_unreasonable").style.display = "block";

				// if number of type 1 is greater than 0
			} else if (justificationType1CheckedCount > 0) {
				message = "ACCEPT";
				document.getElementById("deviation_reasonable").style.display = "block";
				document.getElementById("Desirable").style.display = "block";
				document.getElementById("Extraordinary").style.display = "block";
			} else {
				message = "ACCEPT";
				document.getElementById("Desirable").style.display = "block";
				document.getElementById("Extraordinary").style.display = "block";
			}

		} else {
			document.getElementById("decision_msg").style.display = "none";
		}
	} else if (role == "\"two-phase-reviewer\"") {
		document.getElementById("deviation_reasonable").style.display = "none";
		document.getElementById("deviation_unreasonable").style.display = "none";
		document.getElementById("Desirable").style.display = "none";
		document.getElementById("Extraordinary").style.display = "none";
		$('.checkbox_attributes').prop('checked', false);

		if (checklistYesNotCheckedCount == checklistNoCheckedCount & checklistNoCheckedCount == (deviationYesCheckedCount + justificationType1CheckedCount + justificationType2CheckedCount + justificationType3CheckedCount + justificationType4CheckedCount)) {

			// if number of type 4 is greater than 0
			if (justificationType4CheckedCount > 0) {

				message = "REJECT";
				document.getElementById("deviation_unreasonable").style.display = "block";

				// if number of type 3 is greater than 0
			} else if (justificationType3CheckedCount > 0) {
				message = "REJECT BUT INVITE RESUBMISSION";
				document.getElementById("deviation_unreasonable").style.display = "block";

				// if number of type 2 is greater than 0
			} else if (justificationType2CheckedCount > 0) {
				message = "MAJOR REVISION";
				document.getElementById("deviation_reasonable").style.display = "block";
				document.getElementById("Desirable").style.display = "block";
				document.getElementById("Extraordinary").style.display = "block";

				// if number of type 1 is greater than 0
			} else if (justificationType1CheckedCount > 0) {
				message = "MINOR REVISION";
				document.getElementById("deviation_reasonable").style.display = "block";
				document.getElementById("Desirable").style.display = "block";
				document.getElementById("Extraordinary").style.display = "block";

				// ELSE: ACCEPT
			} else {
				message = "ACCEPT";
				document.getElementById("Desirable").style.display = "block";
				document.getElementById("Extraordinary").style.display = "block";
			}

			document.getElementById("decision_msg").innerHTML = message;
			document.getElementById("decision_msg").style.display = "block";
		} else {
			document.getElementById("decision_msg").style.display = "none";
		}

	}
}

// Determine whether to show or hide the primary location textbox
function showHideLocationTextbox() {
	id = this.id;
	console.log(id);

	var missingCheckbox = document.getElementById(id);
	console.log(missingCheckbox);

	if (missingCheckbox.checked) {
		console.log("Missing checked");
		showDeviationBlockHideLocationTextbox();
	} else {
		console.log("Missing unchecked");
		hideDeviationBlockShowLocationTextbox();
	}
}

//this function manages the display of the deviation block, which is dependent upon user input
function showDeviationBlockHideLocationTextbox() {

	// Replace ID from Yes to an empty string
	if (role == "\"author\"") {
		id = this.id.replace("missing_checkbox:", "");

		var locationTextbox = document.getElementById("item_location_textbox:" + id);
		locationTextbox.style.visibility = "hidden";
		locationTextbox.value = "";

	} else {
		id = this.id.replace("checklist-radio:No:", "")
	}

	var deviationBlock = document.getElementById("deviation_block:" + id);
	if (deviationBlock) {
		deviationBlock.style.display = (role == "\"author\"") ? "flex" : "block";
		deviationBlock.style.flexFlow = "wrap";
	}

	let deviationRadioYes = document.getElementById("deviation_block-radio:Yes:" + id);
	if (deviationRadioYes && deviationRadioYes.disabled) {
		let deviationRadioNo = document.getElementById("deviation_block-radio:No:" + id);
		deviationRadioNo.click();
		createDeviationJustificationBlockShowHideJustificationLocationTextbox.call(deviationRadioNo);
	}
	//This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
	generateDecisionMessageBlock();
}

//this function  manages the display of the deviation block, which is dependent upon user input
function hideDeviationBlockShowLocationTextbox() {

	// Replace ID from Yes to an empty string
	if (role == "\"author\"") {
		id = this.id.replace("missing_checkbox:", "");
		id = this.id.replace("item_location_textbox:", "");
		console.log(id);

		var locationTextbox = document.getElementById("item_location_textbox:" + id);
		locationTextbox.style.visibility = "visible";

	} else {
		id = this.id.replace("checklist-radio:Yes:", "");
	}
	hideOtherMessages(id);

	// Hide all Deviation Blocks
	var block = document.getElementById("deviation_block:" + id);
	block.style.display = "none";
	var block = document.getElementById("deviation_justified:" + id);
	block.style.display = "none";
	var block = document.getElementById("deviation_not_justified:" + id);
	block.style.display = "none";

	if (role != "\"author\"") {
		var messageBlock = document.getElementById("free_text_question:" + id);
		messageBlock.style.display = "none";
		var noRadio = document.getElementById("checklist-radio:No:" + id);
		noRadio.checked = false;
	} else {
		var missingCheckbox = document.getElementById("missing_checkbox:" + id);
		missingCheckbox.checked = false;

		var justificationBox = document.getElementById("justification_location_textbox:" + id);
		justificationBox.value = "";
	}

	// Uncheck all deviation-block-radio
	for (let i = 0; i < document.getElementsByName("deviation_block-radio:" + id).length; i++) {
		document.getElementsByName("deviation_block-radio:" + id)[i].checked = false;
	}

	// Uncheck all deviation-justified-radio
	for (let i = 0; i < document.getElementsByName("deviation_block-radio:" + id).length; i++) {
		document.getElementsByName("deviation_block-radio:" + id)[i].checked = false;
	}

	// Uncheck all deviation-not-justified-radio
	for (let i = 0; i < document.getElementsByName("deviation_block-radio:" + id).length; i++) {
		document.getElementsByName("deviation_block-radio:" + id)[i].checked = false;
	}

	//This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
	generateDecisionMessageBlock();
}


//this function creates a deviation block for all Essential items in the standards
function createDeviationJustificationBlockShowHideJustificationLocationTextbox() {
	// (No-Yes) deviation is justified
	console.log(this);
	if (this.id.includes("deviation_block-radio:Yes:")) {
		id = this.id.replace("deviation_block-radio:Yes:", "")
		hideOtherMessages(id);
		var block = document.getElementById("deviation_not_justified:" + id);
		block.style.display = "none";
		var block = document.getElementById("deviation_justified:" + id);
		block.style.display = "block";

		if (role != "\"author\"") {
			var messageBlock = document.getElementById("free_text_question:" + id);
			messageBlock.style.display = "none";
		}

		deviationRadioName = this.name.replace("deviation_block-radio", "deviation_not_justified-radio");

		for (let i = 0; i < document.getElementsByName(deviationRadioName).length; i++) {
			document.getElementsByName(deviationRadioName)[i].checked = false;
		}

	}
	// (No-No) deviation is unjustified (reviewer)
	else if (this.id.includes("deviation_block-radio:No:")) {
		id = this.id.replace("deviation_block-radio:No:", "")
		hideOtherMessages(id);
		var emptyMessage = document.getElementById("deviation_justified:" + id);
		emptyMessage.style.display = "none";
		var message = document.getElementById("deviation_not_justified:" + id);
		message.style.display = "block";
		var messageBlock = document.getElementById("free_text_question:" + id);
		messageBlock.style.display = "block";

		deviationRadioName = this.name.replace("deviation_block-radio", "deviation_justified-radio");

		for (let i = 0; i < document.getElementsByName(deviationRadioName).length; i++) {
			document.getElementsByName(deviationRadioName)[i].checked = false;
		}

		// (No-No) deviation is unjustified (author)
	} else if (this.id.includes("unjustified_checkbox:")) {
		id = this.id.replace("unjustified_checkbox:", "")
		hideOtherMessages(id);
		var emptyMessage = document.getElementById("deviation_justified:" + id);
		emptyMessage.style.display = "none";
		var message = document.getElementById("deviation_not_justified:" + id);

		var justificationBox = document.getElementById("justification_location_textbox:" + id);
		var unjustifiedCheckbox = document.getElementById("unjustified_checkbox:" + id);

		if (unjustifiedCheckbox.checked) {
			message.style.display = "inline";
			justificationBox.style.visibility = "hidden";
			justificationBox.value = "";
		} else {
			message.style.display = "none";
			justificationBox.style.visibility = "visible";
		}

	} else {
		// (No-Yes-Yes) => deviation is justified and justification is reasonable
		if (this.id.includes("deviation_justified-radio:Yes:")) {
			id = this.id.replace("deviation_justified-radio:Yes:", "")
			hideOtherMessages(id);
			var message = document.getElementById("justification_reasonable:" + id);
			message.style.display = "block";
		}
		// (No-Yes-No) => deviation is justified but justification is unreasonable
		else if (this.id.includes("deviation_justified-radio:No:")) {
			id = this.id.replace("deviation_justified-radio:No:", "")
			hideOtherMessages(id);
			var message = document.getElementById("justification_unreasonable:" + id);
			message.style.display = "block";
		}
		// (No-No-Yes) => deviation is unjustified but reasonable
		else if (this.id.includes("deviation_not_justified-radio:Yes:")) {
			id = this.id.replace("deviation_not_justified-radio:Yes:", "")
			hideOtherMessages(id);
			var message = document.getElementById("deviation_reasonable:" + id);
			message.style.display = "block";
		}
		// (No-No-No) => deviation is unjustified and unreasonable
		else if (this.id.includes("deviation_not_justified-radio:No:")) {
			id = this.id.replace("deviation_not_justified-radio:No:", "")
			hideOtherMessages(id);
			document.getElementById("deviation_unreasonable:" + id).style.display = "block";
		}
	}

	//This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
	generateDecisionMessageBlock();
}

//this function is responsible for hiding all messages displayed as a result of selecting 'No'
function hideOtherMessages(id) {
	try {
		document.getElementById("deviation_reasonable:" + id).style.display = "none";
		document.getElementById("deviation_unreasonable:" + id).style.display = "none";
		document.getElementById("justification_reasonable:" + id).style.display = "none";
		document.getElementById("justification_unreasonable:" + id).style.display = "none";
		document.getElementById("free_text_question:" + id).style.display = "none";
	}
	catch (err) { }
}

//This function creates tooltips for text
//Anything between / and / is known as regular expressions
function createTooltip(checklistItemText, lineText, footnotes) {
	footnoteSups = lineText.match(/(.*?)\{sup\}(.+?)\{\/sup\}(.*?)/g);
	if (footnoteSups) {
		footnoteRest = lineText.match(/(?!.*\})(.*?)$/g);
		footnoteRest = footnoteRest.filter(function (el) {
			return el.trim() != "";
		});
		checklistItemText.innerHTML = checklistItemText.innerHTML.replace("<br>", "");
		var allTooltipsText = checklistItemText;
		var i = 0;
		for (let sup of footnoteSups) {
			i++;
			ftnt = sup.match(/(.*?)\{sup\}(.*?)\{\/sup\}(.*?)/);
			var tooltip = document.createElement("span");
			tooltip.className = "tooltip";
			tooltip.innerHTML = ftnt[1].trim();

			var tooltipText = document.createElement("span");
			tooltipText.className = "tooltip_text";
			tooltipText.innerHTML = convertMDTagsToHTMLTags(footnotes[ftnt[2]]);
			tooltip.appendChild(tooltipText);
			allTooltipsText.appendChild(tooltip);
		}
		if (footnoteRest.length > 0) {
			var tooltip = document.createElement("span");
			tooltip.innerHTML = footnoteRest[0].trim();
			allTooltipsText.appendChild(tooltip);
		}
		return allTooltipsText;
	}
	return checklistItemText;
}

// Uncheck the other radio button when performing the attention check
function toggleAttentionCheck() {
	if (this.id === "attention_yes") {
		document.getElementById("attention_no").checked = false;
	} else {
		document.getElementById("attention_yes").checked = false;
	}
}

// Switch between yes-no interface and location interface
function toggleChecklistDisplay(event) {
	let toggleOption = this.options[this.selectedIndex].value;
	
	let locationContainers = document.querySelectorAll(".author_list_item > .location_container");
	let missingContainers = document.getElementsByClassName("missing_container");
	let presentContainers = document.getElementsByClassName("present_container");
	let deviationBoxes = document.getElementsByClassName("question_block");
	
	if (toggleOption == "yes_no") {
		// Switch to yes-no interface
		let missingLabel = document.getElementById("missing_label");
		missingLabel.classList.add("hide_display");
		
		for (let i = 0; i < locationContainers.length; i++) {
			locationContainers[i].classList.add("hide_display");
			missingContainers[i].classList.add("hide_display");
			presentContainers[i].classList.remove("hide_display");
			
			if (i < deviationBoxes.length) {
				deviationBoxes[i].classList.add("hide_display");
			}
		}
		presentContainers[0].classList.remove("hide_display");
		
	} else {
		// Switch to location interface
		let missingLabel = document.getElementById("missing_label");
		missingLabel.classList.remove("hide_display");
		
		for (let i = 0; i < locationContainers.length; i++) {
			locationContainers[i].classList.remove("hide_display");
			missingContainers[i].classList.remove("hide_display");
			presentContainers[i].classList.add("hide_display");
			
			if (i < deviationBoxes.length) {
				deviationBoxes[i].classList.remove("hide_display");
			}
		}
		presentContainers[0].classList.add("hide_display");
	}
}