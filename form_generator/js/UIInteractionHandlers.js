// This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
function generate_decision_message_block() {

	var checklist_yes_not_checked_count;
	var checklist_no_checked_count;

	// Number of yes's that are not checked and nos checked
	if (role != "\"author\"") {
		checklist_yes_not_checked_count = $('input[class="checklistRadioYes"][type="radio"][value="yes"]').not(':checked').length;
		checklist_no_checked_count = $('input[class="checklistRadioNo"][type="radio"][value="no"]:checked').length;
	}

	// Second level yes
	deviation_yes_checked_count = $('input[class="deviationRadioYes"][type="radio"][value="yes"]:checked').length;

	// Second level no
	deviation_no_checked_count = $('input[class="deviationRadioNo"][type="radio"][value="no"]:checked').length;

	console.log("Test: " + checklist_yes_not_checked_count + " yeses not counted; " + checklist_no_checked_count + " nos counted; " + deviation_yes_checked_count + " deviation yeses counted; " + deviation_no_checked_count + " deviation nos counted");

	// Count the number of types (type1, type2, type3, type4)
	justification_type1_checked_count = $('input[class="justificationRadioType"][type="radio"][value="type1"]:checked').length;
	justification_type2_checked_count = $('input[class="justificationRadioType"][type="radio"][value="type2"]:checked').length;
	justification_type3_checked_count = $('input[class="justificationRadioType"][type="radio"][value="type3"]:checked').length;
	justification_type4_checked_count = $('input[class="justificationRadioType"][type="radio"][value="type4"]:checked').length;

	var msg = "";

	// FOR SAVING THE FILE
	// Making sure every attribute has an option selected.
	if (role == "\"one-phase-reviewer\"") {

		document.getElementById("deviation_reasonable").style.display = "none";
		document.getElementById("deviation_unreasonable").style.display = "none";
		document.getElementById("Desirable").style.display = "none";
		document.getElementById("Extraordinary").style.display = "none";
		$('.checkbox_attributes').prop('checked', false);

		console.log("checklist_yes_not_checked_count: ", checklist_yes_not_checked_count);
		console.log("checklist_no_checked_count: ", checklist_no_checked_count);
		console.log("deviation_yes_checked_count: ", deviation_yes_checked_count);
		if (checklist_yes_not_checked_count == checklist_no_checked_count & checklist_no_checked_count == (deviation_yes_checked_count + justification_type1_checked_count + justification_type2_checked_count + justification_type3_checked_count + justification_type4_checked_count)) {

			// if number of type 3 + type 4 is greater than 0
			if (justification_type3_checked_count + justification_type4_checked_count + justification_type2_checked_count > 0) {
				msg = "REJECT";
				document.getElementById("deviation_unreasonable").style.display = "block";

				// if number of type 1 is greater than 0
			} else if (justification_type1_checked_count > 0) {
				msg = "ACCEPT";
				document.getElementById("deviation_reasonable").style.display = "block";
				document.getElementById("Desirable").style.display = "block";
				document.getElementById("Extraordinary").style.display = "block";
			} else {
				msg = "ACCEPT";
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

		if (checklist_yes_not_checked_count == checklist_no_checked_count & checklist_no_checked_count == (deviation_yes_checked_count + justification_type1_checked_count + justification_type2_checked_count + justification_type3_checked_count + justification_type4_checked_count)) {

			// if number of type 4 is greater than 0
			if (justification_type4_checked_count > 0) {

				msg = "REJECT";
				document.getElementById("deviation_unreasonable").style.display = "block";

				// if number of type 3 is greater than 0
			} else if (justification_type3_checked_count > 0) {
				msg = "REJECT BUT INVITE RESUBMISSION";
				document.getElementById("deviation_unreasonable").style.display = "block";

				// if number of type 2 is greater than 0
			} else if (justification_type2_checked_count > 0) {
				msg = "MAJOR REVISION";
				document.getElementById("deviation_reasonable").style.display = "block";
				document.getElementById("Desirable").style.display = "block";
				document.getElementById("Extraordinary").style.display = "block";

				// if number of type 1 is greater than 0
			} else if (justification_type1_checked_count > 0) {
				msg = "MINOR REVISION";
				document.getElementById("deviation_reasonable").style.display = "block";
				document.getElementById("Desirable").style.display = "block";
				document.getElementById("Extraordinary").style.display = "block";

				// ELSE: ACCEPT
			} else {
				msg = "ACCEPT";
				document.getElementById("Desirable").style.display = "block";
				document.getElementById("Extraordinary").style.display = "block";
			}

			document.getElementById("decision_msg").innerHTML = msg;
			document.getElementById("decision_msg").style.display = "block";
		} else {
			document.getElementById("decision_msg").style.display = "none";
		}

	}
}

// Determine whether to show or hide the primary location textbox
function show_hide_location_textbox() {
	id = this.id;
	console.log(id);

	var missing_checkbox = document.getElementById(id);
	console.log(missing_checkbox);

	if (missing_checkbox.checked) {
		console.log("Missing checked");
		show_deviation_block_and_hide_location_textbox();
	} else {
		console.log("Missing unchecked");
		hide_deviation_block_and_show_location_textbox();
	}
}

//this function manages the display of the deviation block, which is dependent upon user input
function show_deviation_block_and_hide_location_textbox() {

	// Replace ID from Yes to an empty string
	if (role == "\"author\"") {
		id = this.id.replace("missing_checkbox:", "");

		var item_location_textbox = document.getElementById("item_location_textbox:" + id);
		item_location_textbox.style.visibility = "hidden";
		item_location_textbox.value = "";

	} else {
		id = this.id.replace("checklist-radio:No:", "")
	}

	var deviation_block = document.getElementById("deviation_block:" + id);
	if (deviation_block) {
		deviation_block.style.display = (role == "\"author\"") ? "flex" : "block";
		deviation_block.style.flexFlow = "wrap";
	}

	let deviationRadioYes = document.getElementById("deviation_block-radio:Yes:" + id);
	if (deviationRadioYes && deviationRadioYes.disabled) {
		let deviationRadioNo = document.getElementById("deviation_block-radio:No:" + id);
		deviationRadioNo.click();
		create_deviation_justification_block_and_show_hide_justification_location_textbox.call(deviationRadioNo);
	}
	//This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
	generate_decision_message_block();
}

//this function  manages the display of the deviation block, which is dependent upon user input
function hide_deviation_block_and_show_location_textbox() {

	// Replace ID from Yes to an empty string
	if (role == "\"author\"") {
		id = this.id.replace("missing_checkbox:", "");
		id = this.id.replace("item_location_textbox:", "");
		console.log(id);

		var item_location_textbox = document.getElementById("item_location_textbox:" + id);
		item_location_textbox.style.visibility = "visible";

	} else {
		id = this.id.replace("checklist-radio:Yes:", "");
	}
	hide_other_messages(id);

	// Hide all Deviation Blocks
	var block = document.getElementById("deviation_block:" + id);
	block.style.display = "none";
	var block = document.getElementById("deviation_justified:" + id);
	block.style.display = "none";
	var block = document.getElementById("deviation_not_justified:" + id);
	block.style.display = "none";

	if (role != "\"author\"") {
		var msg_block = document.getElementById("free_text_question:" + id);
		msg_block.style.display = "none";
		var no_radio = document.getElementById("checklist-radio:No:" + id);
		no_radio.checked = false;
	} else {
		var missing_checkbox = document.getElementById("missing_checkbox:" + id);
		missing_checkbox.checked = false;

		var justification_box = document.getElementById("justification_location_textbox:" + id);
		justification_box.value = "";
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
	generate_decision_message_block();
}


//this function creates a deviation block for all Essential items in the standards
function create_deviation_justification_block_and_show_hide_justification_location_textbox() {
	// (No-Yes) deviation is justified
	console.log(this);
	if (this.id.includes("deviation_block-radio:Yes:")) {
		id = this.id.replace("deviation_block-radio:Yes:", "")
		hide_other_messages(id);
		var block = document.getElementById("deviation_not_justified:" + id);
		block.style.display = "none";
		var block = document.getElementById("deviation_justified:" + id);
		block.style.display = "block";

		if (role != "\"author\"") {
			var msg_block = document.getElementById("free_text_question:" + id);
			msg_block.style.display = "none";
		}

		deviation_radio_name = this.name.replace("deviation_block-radio", "deviation_not_justified-radio");

		for (let i = 0; i < document.getElementsByName(deviation_radio_name).length; i++) {
			document.getElementsByName(deviation_radio_name)[i].checked = false;
		}

	}
	// (No-No) deviation is unjustified (reviewer)
	else if (this.id.includes("deviation_block-radio:No:")) {
		id = this.id.replace("deviation_block-radio:No:", "")
		hide_other_messages(id);
		var empty_message = document.getElementById("deviation_justified:" + id);
		empty_message.style.display = "none";
		var message = document.getElementById("deviation_not_justified:" + id);
		message.style.display = "block";
		var msg_block = document.getElementById("free_text_question:" + id);
		msg_block.style.display = "block";

		deviation_radio_name = this.name.replace("deviation_block-radio", "deviation_justified-radio");

		for (let i = 0; i < document.getElementsByName(deviation_radio_name).length; i++) {
			document.getElementsByName(deviation_radio_name)[i].checked = false;
		}

		// (No-No) deviation is unjustified (author)
	} else if (this.id.includes("unjustified_checkbox:")) {
		id = this.id.replace("unjustified_checkbox:", "")
		hide_other_messages(id);
		var empty_message = document.getElementById("deviation_justified:" + id);
		empty_message.style.display = "none";
		var message = document.getElementById("deviation_not_justified:" + id);

		var justification_box = document.getElementById("justification_location_textbox:" + id);
		var unjustified_checkbox = document.getElementById("unjustified_checkbox:" + id);

		if (unjustified_checkbox.checked) {
			message.style.display = "inline";
			justification_box.style.visibility = "hidden";
			justification_box.value = "";
		} else {
			message.style.display = "none";
			justification_box.style.visibility = "visible";
		}

	} else {
		// (No-Yes-Yes) => deviation is justified and justification is reasonable
		if (this.id.includes("deviation_justified-radio:Yes:")) {
			id = this.id.replace("deviation_justified-radio:Yes:", "")
			hide_other_messages(id);
			var message = document.getElementById("justification_reasonable:" + id);
			message.style.display = "block";
		}
		// (No-Yes-No) => deviation is justified but justification is unreasonable
		else if (this.id.includes("deviation_justified-radio:No:")) {
			id = this.id.replace("deviation_justified-radio:No:", "")
			hide_other_messages(id);
			var message = document.getElementById("justification_unreasonable:" + id);
			message.style.display = "block";
		}
		// (No-No-Yes) => deviation is unjustified but reasonable
		else if (this.id.includes("deviation_not_justified-radio:Yes:")) {
			id = this.id.replace("deviation_not_justified-radio:Yes:", "")
			hide_other_messages(id);
			var message = document.getElementById("deviation_reasonable:" + id);
			message.style.display = "block";
		}
		// (No-No-No) => deviation is unjustified and unreasonable
		else if (this.id.includes("deviation_not_justified-radio:No:")) {
			id = this.id.replace("deviation_not_justified-radio:No:", "")
			hide_other_messages(id);
			document.getElementById("deviation_unreasonable:" + id).style.display = "block";
		}
	}

	//This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
	generate_decision_message_block();
}

//this function is responsible for hiding all messages displayed as a result of selecting 'No'
function hide_other_messages(id) {
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
function createTooltip(checklistItemText, line_text, footnotes) {
	footnote_sups = line_text.match(/(.*?)\{sup\}(.+?)\{\/sup\}(.*?)/g);
	if (footnote_sups) {
		footnote_rest = line_text.match(/(?!.*\})(.*?)$/g);
		footnote_rest = footnote_rest.filter(function (el) {
			return el.trim() != "";
		});
		checklistItemText.innerHTML = checklistItemText.innerHTML.replace("<br>", "");
		var allTooltipsText = checklistItemText;
		var i = 0;
		for (let footnote_sup of footnote_sups) {
			i++;
			ftnt = footnote_sup.match(/(.*?)\{sup\}(.*?)\{\/sup\}(.*?)/);
			var tooltip = document.createElement("span");
			tooltip.className = "tooltip";
			tooltip.innerHTML = ftnt[1].trim();

			var tooltipText = document.createElement("span");
			tooltipText.className = "tooltiptext";
			tooltipText.innerHTML = convert_MD_tags_to_HTML_tags(footnotes[ftnt[2]]);
			tooltip.appendChild(tooltipText);
			allTooltipsText.appendChild(tooltip);
		}
		if (footnote_rest.length > 0) {
			var tooltip = document.createElement("span");
			tooltip.innerHTML = footnote_rest[0].trim();
			allTooltipsText.appendChild(tooltip);
		}
		return allTooltipsText;
	}
	return checklistItemText;
}