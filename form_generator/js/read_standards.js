class HashMap {
	constructor() {
	  this._buckets = [];
	}
  
	_hash(key) {
	  let hash = 0;
	  for (let i = 0; i < key.length; i++) {
		hash = (hash + key.charCodeAt(i)) % this._buckets.length;
	  }
	  return hash;
	}
  
	set(key, value) {
	  const index = this._hash(key);
	  if (!this._buckets[index]) {
		this._buckets[index] = [];
	  }
  
	  const bucket = this._buckets[index];
	  for (let i = 0; i < bucket.length; i++) {
		if (bucket[i][0] === key) {
		  bucket[i][1] = value;
		  return;
		}
	  }
  
	  bucket.push([key, value]);
	}
  
	get(key) {
	  const index = this._hash(key);
	  const bucket = this._buckets[index];
	  if (!bucket) {
		return undefined;
	  }
  
	  for (let i = 0; i < bucket.length; i++) {
		if (bucket[i][0] === key) {
		  return bucket[i][1];
		}
	  }
  
	  return undefined;
	}
  
	remove(key) {
	  const index = this._hash(key);
	  const bucket = this._buckets[index];
	  if (!bucket) {
		return;
	  }
  
	  for (let i = 0; i < bucket.length; i++) {
		if (bucket[i][0] === key) {
		  bucket.splice(i, 1);
		  return;
		}
	  }
	}
}

const dataStructure = new HashMap();

let role = getParameterByName('role');

//This function reads in the file name and passes it onto the next method
function getParameterByName(param_name, url = window.location.href) {
	var params = location.search&&location.search.substr(1).replace(/\+/gi," ").split("&");
	var param_values = [];
	var i = 0;
	for (var param_index in params) {
		var param = params[param_index].split("=");
		if (param[0] === param_name) {
			param_values[i] = param.length > 1 ? "\"" + unescape(param[1]) + "\"" : "noval";
			i++;
		}
	}
	return param_values;
}

//Generate relative path for each standard document
function readSpecificEmpiricalStandard(standard_name) {
	var mdFile = new XMLHttpRequest();
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	var dir = dir.substring(0, dir.lastIndexOf('/'));
	var standard_file_name = standard_name.replaceAll("\"", "").replace(" ", "");
	var standard_file_path = dir + "/docs/standards/" + standard_file_name + ".md";
	var empirical_standard = "";
	mdFile.open("GET", standard_file_path, false);
	mdFile.onreadystatechange = function(){
		if (mdFile.readyState === 4) {
			if (mdFile.status === 200  || mdFile.status == 0) {
				empirical_standard = mdFile.responseText;
			} else {
				alert("Can't read " + standard_file_path);
			}
		} else {
			alert("Can't read " + standard_file_path);
		}
	}
	mdFile.send(null);
	return empirical_standard;
}

// Load the table file for the customization of the checklist
function readSpecificEmpiricalStandard_table(standard_name) {
	//loadConfiguration();
	var mdFile = new XMLHttpRequest();
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	var dir = dir.substring(0, dir.lastIndexOf('/'));
	var standard_file_name = standard_name.replaceAll("\"", "").replace(" ", "");
	console.log(standard_file_name);
	var standard_file_path = dir + "/docs/attribute_customizations/" + standard_file_name + "_table.md";
	console.log(standard_file_path);
	var empirical_standard = "";
	mdFile.open("GET", standard_file_path, false);
	mdFile.onreadystatechange = function(){
		if (mdFile.readyState === 4){
			if (mdFile.status === 200  || mdFile.status == 0) {
				empirical_standard = mdFile.responseText;
			} else {
				alert("Can't read " + standard_file_path);
			}
		} else {
			alert("Can't read " + standard_file_path);
		}
	}
	mdFile.send(null);
	return empirical_standard;
}

//This function creates tooltips for text
//Anything between / and / is known as regular expressions
function createTooltip(checklistItemText, line_text, footnotes) {
	footnote_sups = line_text.match(/(.*?)\{sup\}(.+?)\{\/sup\}(.*?)/g);
	if(footnote_sups){
		footnote_rest = line_text.match(/(?!.*\})(.*?)$/g);
		footnote_rest = footnote_rest.filter(function (el) {
			return el.trim() != "";
		});
		checklistItemText.innerHTML = checklistItemText.innerHTML.replace("<br>", "");
		var allTooltipsText = checklistItemText;
		var i = 0;
		for (let footnote_sup of footnote_sups){
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
		if(footnote_rest.length > 0){
			var tooltip = document.createElement("span");
			tooltip.innerHTML = footnote_rest[0].trim();
			allTooltipsText.appendChild(tooltip);
		}
		return allTooltipsText;
	}
	return checklistItemText;
}

//The text from the MD file is converted to HTML using this method
function convert_MD_tags_to_HTML_tags(text) {
	// Bold text - Convert from MD to HTML tags
	if (text.match(/\*\*(.*?)\*\*/g) != null) {
		text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
	}

	// Italic text - Convert from MD to HTML tags
	if (text.match(/\*(.*?)\*/g) != null) {
		text = text.replace(/\*(.*?)\*/g, "<i>$1</i>");
	}

	// Supplements/Links? - Convert from MD to HTML tags
	if (text.match(/\[([\w\s\d\.\-#\*_\/]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)/g) != null) {
		text = text.replace(/\[([\w\s\d\.\-#\*_\/]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)/g, "<a target='_blank' href='$2'>$1</a>");
	}

	return text;
}

//This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
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
		if (checklist_yes_not_checked_count == checklist_no_checked_count & checklist_no_checked_count == (deviation_yes_checked_count+justification_type1_checked_count+justification_type2_checked_count+justification_type3_checked_count+justification_type4_checked_count)){

			// if number of type 3 + type 4 is greater than 0
			if (justification_type3_checked_count + justification_type4_checked_count + justification_type2_checked_count > 0 ){
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
	} else if (role == "\"two-phase-reviewer\""){
		document.getElementById("deviation_reasonable").style.display = "none";
		document.getElementById("deviation_unreasonable").style.display = "none";
		document.getElementById("Desirable").style.display = "none";
		document.getElementById("Extraordinary").style.display = "none";
		$('.checkbox_attributes').prop('checked', false);

		if (checklist_yes_not_checked_count == checklist_no_checked_count & checklist_no_checked_count == (deviation_yes_checked_count+justification_type1_checked_count+justification_type2_checked_count+justification_type3_checked_count+justification_type4_checked_count)){

			// if number of type 4 is greater than 0
			if (justification_type4_checked_count > 0 ){

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
	if(deviationRadioYes && deviationRadioYes.disabled){
		let deviationRadioNo = document.getElementById("deviation_block-radio:No:" + id);
		deviationRadioNo.click();
		create_deviation_justification_block_and_show_hide_justification_location_textbox.call(deviationRadioNo);
	}
	//This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
	generate_decision_message_block();
}

//this function manages the display of the deviation block, which is dependent upon user input
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
	for(let i = 0; i < document.getElementsByName("deviation_block-radio:" + id).length; i++){
		document.getElementsByName("deviation_block-radio:" + id)[i].checked = false;
	}

	// Uncheck all deviation-justified-radio
	for(let i = 0; i < document.getElementsByName("deviation_block-radio:" + id).length; i++){
		document.getElementsByName("deviation_block-radio:" + id)[i].checked = false;
	}

	// Uncheck all deviation-not-justified-radio
	for(let i = 0; i < document.getElementsByName("deviation_block-radio:" + id).length; i++){
		document.getElementsByName("deviation_block-radio:" + id)[i].checked = false;
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
	catch(err) {}
}

//this function creates a location textbox for all items in the standards
function generate_location_textbox(name, id) {
	var location_textbox;
	location_textbox = document.createElement('input');
	location_textbox.type = 'text';
	location_textbox.className = name;
	location_textbox.id = name + ":" + id;
	location_textbox.maxLength = "100";
	location_textbox.pattern = "^(?!.*[A-Za-z]).*$";
	location_textbox.title = "Numbers and symbols only."
	location_textbox.defaultValue = '';
	return location_textbox;
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

		for(let i = 0; i < document.getElementsByName(deviation_radio_name).length; i++) {
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
		else if(this.id.includes("deviation_not_justified-radio:No:")){
			id = this.id.replace("deviation_not_justified-radio:No:", "")
			hide_other_messages(id);
			document.getElementById("deviation_unreasonable:" + id).style.display = "block";
		}
	}
	
	//This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
	generate_decision_message_block();
}

function generate_question_block_without_yes_no_radio_answers(id, class_name, question, checklistItem_id, padding) {
	var question_block = document.createElement("div");
	
	question_block.id = id + ":" + checklistItem_id;
	question_block.className = "question_block";
	question_block.style = "padding-left:"+padding+"em; display:none";
	
	return question_block;
}


function generate_question_block_with_yes_no_radio_answers(id, class_name, question, checklistItem_id, padding, display) {
	var question_block = document.createElement("div");
	
	question_block.id = id + ":" + checklistItem_id;
	question_block.className = "question_block";
	
	var deviation_block = document.createElement("div");

	if (role == "\"author\"") {
		question_block.classList.add("author_yes_no_block");
		var questiontext_container = document.createElement("span");
		questiontext_container.innerHTML = "&rdsh;&nbsp; " + question;
		questiontext_container.className = "question_text_container";
	
		// For authors, create location indicator + N/A checkbox
		var justification_location_textbox = generate_location_textbox("justification_location_textbox", checklistItem_id);
		var location_container = document.createElement("span");
		location_container.className = "location_container";
		location_container.appendChild(justification_location_textbox);
		
		unjustified_checkbox = document.createElement("input");
		unjustified_checkbox.type = "checkbox";
		unjustified_checkbox.id = "unjustified_checkbox:" + checklistItem_id;
		unjustified_checkbox.className = "unjustified_checkbox";
		unjustified_checkbox.name = checklistItem_id;
		unjustified_checkbox.onclick = create_deviation_justification_block_and_show_hide_justification_location_textbox;
		
		var unjustified_container = document.createElement("span");
		unjustified_container.appendChild(unjustified_checkbox);
		
		question_block.appendChild(questiontext_container);
		question_block.appendChild(location_container);
		question_block.appendChild(unjustified_container);
		
		var deviation_not_justified = generate_message("deviation_not_justified:" + checklistItem_id, "&nbsp;Your manuscript should justify any deviations from essential attributes.", "unjustified_warning");
		
		question_block.appendChild(deviation_not_justified);
	} else {
		question_block.classList.add("reviewer_yes_no_block");
		deviation_block.className = "reviewer_reasonable_block";
		
		let question_text = document.createElement("span");
		question_text.innerHTML = "&rdsh;&nbsp; " + question;
		
		// For reviewers, create yes-no radio buttons
		var deviationRadioYes = document.createElement("input");
		var deviationLabelYes = document.createElement("label");
		deviationRadioYes.id = id + "-radio:Yes:" + checklistItem_id;
		deviationRadioYes.className = class_name + "Yes";
		deviationRadioYes.name = id + "-radio:" + checklistItem_id;
		deviationRadioYes.onclick = create_deviation_justification_block_and_show_hide_justification_location_textbox;
		deviationRadioYes.type = "radio";
		deviationRadioYes.value = "yes";
		deviationLabelYes.innerHTML = "yes&nbsp;&nbsp;";
		deviationLabelYes.htmlFor = deviationRadioYes.id;
		
		var deviationRadioNo = document.createElement("input");
		var deviationLabelNo = document.createElement("label");
		deviationRadioNo.id = id + "-radio:No:" + checklistItem_id;
		deviationRadioNo.className = class_name + "No";
		deviationRadioNo.name = id + "-radio:" + checklistItem_id;
		deviationRadioNo.onclick = create_deviation_justification_block_and_show_hide_justification_location_textbox;
		deviationRadioNo.type = "radio";
		deviationRadioNo.value = "no";
		deviationLabelNo.innerHTML = "no";
		deviationLabelNo.htmlFor = deviationRadioNo.id;
		
		deviation_block.appendChild(question_text);
		deviation_block.appendChild(deviationRadioYes);
		deviation_block.appendChild(deviationLabelYes);
		deviation_block.appendChild(deviationRadioNo);
		deviation_block.appendChild(deviationLabelNo);
		question_block.appendChild(deviation_block);
	}

	// if the deviation reasonable is fixed in the table
	if(display){
		deviationRadioYes.disabled = true; // Disable 'Yes' radio button

		// Cross out the label associated with the 'Yes' radio button
		deviationLabelYes.innerHTML = "<s>yes</s>&nbsp;&nbsp;";
	}
	
	return question_block;
}

// generate the question block with the type radio buttons (type 1, type 2, type 3, type 4)
function generate_question_block_with_type_radio_answers(id, class_name, question, checklistItem_id, padding, type) {
	var question_block = document.createElement("div");

	question_block.id = id + ":" + checklistItem_id;
	question_block.className = "question_block type_block";
	question_block.innerHTML = "&rdsh;&nbsp; " + question;

	var deviation_block_radios = document.createElement("div");
    deviation_block_radios.innerHTML = "&nbsp;&nbsp;&nbsp;";

	// dictionary of tooltips text for each type of unreasonable deviation
	var dict = {};
	
	// type 1
	dict[1] = "can be fixed by editing text only; e.g. clarifying text, adding references, changing a diagram, describing an additional limitation, copyediting.";
	
	// type 2
	dict[2] = "can be fixed by doing some new data analysis, redoing some existing data analysis, or collecting a small amount of additional data (e.g. going back to one interviewee, collecting some additional primary studies for a systematic review).";
	
	// type 3
	dict[3] = "can be fixed completely redoing data analysis, OR collecting additional data (e.g. conducting new or additional experiments or case studies; several new interviews, one or more additional rounds of questionnaire data collection).";
	
	// type 4
	dict[4] = "unacceptable conduct (e.g. plagiarism, p-hacking, HARKing, unethical data collection) OR problems the cannot be fixed without doing a brand new study (e.g. fundamentally invalid measures, data collection or analysis insufficient by an order of magnitude, no chain of evidence whatsoever from data to conclusions).";

    for (let i in type) {
        var deviationRadioType = document.createElement("input");
        var deviationLabelType = document.createElement("label");

        // Identify each radio button
        deviationRadioType.id = id + "-radio:Type"+type[i]+":" + checklistItem_id;

        // className - deal with all of them
        deviationRadioType.className = class_name + "Type";
    
        // These are the radio buttons of that element regardless of Type1 or Type2
        // For Hiding Buttons
        deviationRadioType.name = id + "-radio:" + checklistItem_id;
    
        // deviation justification is a function
        deviationRadioType.onclick = create_deviation_justification_block_and_show_hide_justification_location_textbox;
    
        deviationRadioType.type = "radio";
    
        // Value for comparisons
        deviationRadioType.value = "type"+type[i];
    
        // Actual Text of the Radio button
		// Adding tooltip to type Radio button
		deviationLabelType.innerHTML = "<div class=\"tooltip\">type "+type[i]+ "<span class=\"tooltiptext\"> "+dict[type[i]]+"</span></div>" + "&nbsp;&nbsp;";
    
        // For Labels
        // Click on the label, click that radio button
        deviationLabelType.htmlFor = deviationRadioType.id;
    
        deviation_block_radios.appendChild(deviationRadioType);
        deviation_block_radios.appendChild(deviationLabelType);
    }

    question_block.appendChild(deviation_block_radios);

	return question_block;
}

//generate a message with a specific style
function generate_message(id, text, style_class) {
	var message;
	
	if (role == "\"author\"") {
		message = document.createElement("span");
		message.innerHTML = text;
		message.className = "attention hide_display " + style_class;
	} else {
		message = document.createElement("div");
		message.className = "attention hide_display " + style_class;
	}
	
	message.id = id;
	
	return message;
}

// generate the deviation block for Author Role
function generate_author_deviation_block(checklistItem_id) {
	var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "deviationRadio", "where does the manuscript justify the deviation?", checklistItem_id);

	// Author-specific deviation justification message
	var deviation_justified = generate_message("deviation_justified:" + checklistItem_id, "", "message_style_1");

	deviation_block.appendChild(deviation_justified);

	return deviation_block;
}

function generate_free_text_question(id, class_name, question, checklistItem_id) {
    var question_block = document.createElement("div");
    question_block.id = id + ":" + checklistItem_id;
    question_block.className = "question_block_free_Text";

    var questionText = document.createElement("div"); // Create a div for the question
    questionText.innerHTML = "&rdsh;&nbsp;  " + question;

    var answerInput = document.createElement("div"); // Create a div for the input answer
    answerInput.className = "freeTextContainer";
	
	var answerInputField = document.createElement("textarea");
    answerInputField.id = id + "-answer:" + checklistItem_id;
    answerInputField.className = class_name + "Answer";
    answerInputField.type = "text";
	
    answerInput.appendChild(answerInputField);
    question_block.appendChild(questionText);
    question_block.appendChild(answerInput);

	question_block.getAnswer = function () {
        return answerInputField.value;
    };
	
	console.log(answerInputField.value);

    return question_block;
}

// generate the deviation block for One Phase Reviewer Role
function generate_one_phase_reviewer_deviation_block(checklistItem_id,data) {

	// Create a question block with Yes-No radio answers
	// 2nd Question
	if(data!=null){
		var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItem_id, 2.40, data.display1 == "False");

		// Reviewer-specific deviation justification block
		var deviation_justified = generate_message("deviation_justified:" + checklistItem_id, "", "message_style_2");
	
		// Create a question block with type radio answers
		// 3rd Question
		var numbersArray = data.errortype.split(",").map(function(item) {
			return parseInt(item, 10);
		});

		var deviation_not_justified = generate_question_block_with_type_radio_answers("deviation_not_justified", "justificationRadio", "Please indicate the type of unreasonable deviations. (Pick the largest number that applies.)", checklistItem_id, 2.06, numbersArray);

		// (No-No-Yes)
		var deviation_reasonable = generate_message("deviation_reasonable:" + checklistItem_id, "", "message_style_3");
	
		// (No-No-No)
		var deviation_unreasonable = generate_message("deviation_unreasonable:" + checklistItem_id, "", "message_style_3");
		
		deviation_block.appendChild(deviation_justified);
		deviation_block.appendChild(deviation_not_justified);
		deviation_block.appendChild(deviation_reasonable);
		deviation_block.appendChild(deviation_unreasonable);

		if(data.displayfree == "True"){
			var freeTextQuestion = generate_free_text_question("free_text_question", "freeText", data.freelabel, checklistItem_id);

			deviation_block.appendChild(freeTextQuestion);
		}
	}else{
		console.log("Data not fetched");
		var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItem_id, 2.40);

		// Reviewer-specific deviation justification block
		var deviation_justified = generate_message("deviation_justified:" + checklistItem_id, "", "message_style_2");
	
		// Create a question block with type radio answers
		// 3rd Question
		var deviation_not_justified = generate_question_block_with_type_radio_answers("deviation_not_justified", "justificationRadio", "Please indicate the type of unreasonable deviations. (Pick the largest number that applies.)", checklistItem_id, 2.06, type = [1,2,3,4]);
	
		// (No-No-Yes)
		var deviation_reasonable = generate_message("deviation_reasonable:" + checklistItem_id, "", "message_style_3");
	
		// (No-No-No)
		var deviation_unreasonable = generate_message("deviation_unreasonable:" + checklistItem_id, "", "message_style_3");
	
		deviation_block.appendChild(deviation_justified);
		deviation_block.appendChild(deviation_not_justified);
	
		deviation_block.appendChild(deviation_reasonable);
		deviation_block.appendChild(deviation_unreasonable);		
		var freeTextQuestion = generate_free_text_question("free_text_question", "freeText", 'How can this problem be addressed', checklistItem_id);

		deviation_block.appendChild(freeTextQuestion);
	}

	console.log(deviation_block);
	return deviation_block;
}

// generate the deviation block for Two Phase Reviewer Role
function generate_two_phase_reviewer_deviation_block(checklistItem_id,data) {

	// Create a question block with Yes-No radio answers
	// 2nd Question
	if(data!=null){
		var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItem_id, 2.40, data.display1 == "False");
		
		// Reviewer-specific deviation justification block
		var deviation_justified = generate_message("deviation_justified:" + checklistItem_id, "", "message_style_2");
	
		// Create a question block with type radio answers
		// 3rd Question
		var numbersArray = data.errortype.split(",").map(function(item) {
			return parseInt(item, 10);
		});

		var deviation_not_justified = generate_question_block_with_type_radio_answers("deviation_not_justified", "justificationRadio", "Please indicate the type of unreasonable deviations. (Pick the largest number that applies.)", checklistItem_id, 2.06, numbersArray);

		// (No-No-Yes)
		var deviation_reasonable = generate_message("deviation_reasonable:" + checklistItem_id, "", "message_style_3");
	
		// (No-No-No)
		var deviation_unreasonable = generate_message("deviation_unreasonable:" + checklistItem_id, "", "message_style_3");
		
		deviation_block.appendChild(deviation_justified);
		deviation_block.appendChild(deviation_not_justified);
		deviation_block.appendChild(deviation_reasonable);
		deviation_block.appendChild(deviation_unreasonable);

		if(data.displayfree == "True"){
			var freeTextQuestion = generate_free_text_question("free_text_question", "freeText", data.freelabel, checklistItem_id);
			console.log(data.freelabel);
			deviation_block.appendChild(freeTextQuestion);
		}
	}else{
		console.log("Data not fetched");	

		// new standard
		var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItem_id, 2.40);

		var deviation_justified = generate_message("deviation_justified:" + checklistItem_id, "", "message_style_2");
		var deviation_not_justified = generate_question_block_with_type_radio_answers("deviation_not_justified", "justificationRadio", "Please indicate the type of unreasonable deviations. (Pick the largest number that applies.)", checklistItem_id, 2.06, [1,2,3,4]);

		// (No-No-Yes)
		var deviation_reasonable = generate_message("deviation_reasonable:" + checklistItem_id, "", "message_style_3");
	
		// (No-No-No)
		var deviation_unreasonable = generate_message("deviation_unreasonable:" + checklistItem_id, "", "message_style_3");
		
		deviation_block.appendChild(deviation_justified);
		deviation_block.appendChild(deviation_not_justified);
		deviation_block.appendChild(deviation_reasonable);
		deviation_block.appendChild(deviation_unreasonable);

		var freeTextQuestion = generate_free_text_question("free_text_question", "freeText", "How can this problem be addressed", checklistItem_id);

		deviation_block.appendChild(freeTextQuestion);
	}

	return deviation_block;
}

// convert from Markdown to HTML checklists
function convert_MD_standard_checklists_to_html_standard_checklists(standardName, checklistName, checklistText, footnotes) {
	
	tester = getParameterByName('y')[0] == 'noval' ? true : false;

	// Create Unordered List
	var checklists = document.createElement("UL");

	// Positioning Essential, Desirable, Extraordinary lines on page
	// Essential needs more room for radio buttons
	if (role == "\"author\"") {
		checklists.className = "author_items item_list";
	} else if (checklistName == "Essential") {
		checklists.className = "reviewer_essential_items item_list";
	} else {
		checklists.className = "reviewer_nonessential_items item_list";
	}

	// splitting lines on bullet points from markdown file
	lines = checklistText.includes("- [ ]") ? checklistText.split("- [ ]") : checklistText.includes("-	") ? checklistText.split("-	") : checklistText.split("");
	console.log("Lines: " + lines);

	var i = 0;
	
	var imrad_count_index = 0;
	var attribute_numbers = Array(standardName.length).fill(0);
	console.log(attribute_numbers);

	// IMRaD line break flag is set to equal false
	var IMRaD_line_break = false;

	for(let line of lines){

		// removes whitespace, replace all line breaks (<br> </br>) and tab character(\t)
		line_text = line.trim().replaceAll(" ", "").replaceAll("<br>", "").replaceAll("<br/>", "").replaceAll("\t", "");
		
		if (line_text != ""){
			i++;

			line_text = line.trim().replace("---", "&mdash;");

			// Trim and remove line breaks in markdown text
			while (line_text.match(/<br(\/)?>$/)) {
				line_text = line_text.replace(/<br(\/)?>$/, "");
				line_text = line_text.trim();
			}
			
			var checklistItemLI = document.createElement("LI");
			var checklistItemText = document.createElement("span");
			
			if (role == "\"author\"") {
				checklistItemLI.classList.add("author_list_item");
				checklistItemText.classList.add("item_text");
			}
			
			if(IMRaD_line_break) {
				checklists.appendChild(document.createElement("br"));
			}

			// !!!!!!!!!!!!!!!! we dont need this part in the checklist
			if(line_text.includes("complies with all applicable empirical standards")) {
				continue;
			}
			
			// if line_text includes a specific regex set to true ( line break with horizontal rule)
			IMRaD_line_break = line_text.includes('<br\/>_hr_') ? true : false;

			// Replace line break and horizontal rule with empty string
			line_text = line_text.replace(/(<br\/>_hr_)+/g, '');
			
			let checklistItem_class = "";
			var checklistItem_id = "";
			
			// Determine which standard to use for the current essential item
			if (checklistName == "Essential") {									
				let imrad_counts = imrad_order[imrad_count_index];
				let tag_count = imrad_counts[0];
				
				let found = false;
				let num = attribute_numbers[imrad_count_index];
				
				// Find the current count
				while (found == false) {
					if (tag_count == 0) {
						imrad_counts.shift();
						imrad_order[imrad_count_index] = imrad_counts;

						// If this isn't the last array of counts, move to the next one
						if (imrad_count_index + 1 < standardName.length) {
							imrad_count_index++;
							
							imrad_counts = imrad_order[imrad_count_index];
							tag_count = imrad_counts[0];
							num = attribute_numbers[imrad_count_index];
							
						// If this is the last array of counts, reset to the first
						} else {
							imrad_count_index = 0;
							
							imrad_counts = imrad_order[imrad_count_index];
							tag_count = imrad_counts[0];
							num = attribute_numbers[imrad_count_index];
						}
					} else {
						found = true;
						num++;
						attribute_numbers[imrad_count_index] = num;
					}
				}

				checklistItem_class = standardName[imrad_count_index] + "-" + checklistName + ":" + num;
				tag_count--;
				imrad_counts[0] = tag_count;
				imrad_order[imrad_count_index] = imrad_counts;

				checklistItem_id = "-" + checklistName + ":" + i;
			} else {
				checklistItem_class = standardName.replaceAll(/\s/g, "") + "-" + checklistName + ":" + i;
				checklistItem_id = standardName + "-" + checklistName + ":" + i;
			}
			
			checklistItemLI.classList.add(checklistItem_class);

			// Change the text to the string held in line_text
			checklistItemLI.setAttribute("text", line_text);
			
			console.log("Line text: " + line_text);

			if(line_text.replaceAll("<br/><br>", "") == "") {
				continue;
			}
			
			if(line_text.includes("footnote")) {
				checklistItemText = createTooltip(checklistItemText, line_text, footnotes);
			} else {
				checklistItemText.innerHTML = "&nbsp;" + line_text;
			}

			//locate the current checklist into the table
			data = dataStructure.get(Encode_key(line_text));

			if (checklistName == "Essential"){
				// create Input Elements
				
				var userInputYes;
				var userInputNo;
				var location_container;
				var missing_container;
				
				if (role == "\"author\"") {
					
					location_container = document.createElement("span");
					location_container.className = "location_container";
					
					userInputYes = generate_location_textbox("item_location_textbox", checklistItem_id);
					userInputYes.onfocus = hide_deviation_block_and_show_location_textbox;
					
					missing_container = document.createElement("span");
					
					userInputNo = document.createElement("input");
					userInputNo.type = "checkbox";
					userInputNo.id = "missing_checkbox:" + checklistItem_id;
					userInputNo.className = "missing_checkbox";
					userInputNo.name = checklistItem_id;
					userInputNo.onclick = show_hide_location_textbox;
					
				} else {
					userInputYes = document.createElement("input");
					userInputYes.id = "checklist-radio:Yes:" + checklistItem_id;
					userInputYes.className = "checklistRadioYes";
					userInputYes.name = "checklist-radio:" + checklistItem_id;
					
					// in the case of YES, hide the deviation block
					userInputYes.onclick = hide_deviation_block_and_show_location_textbox;
					
					userInputYes.type = "radio";
					userInputYes.value = "yes";
					userInputYes.checked = tester;
					
					userInputNo = document.createElement("input");
					userInputNo.id = "checklist-radio:No:" + checklistItem_id;
					userInputNo.className = "checklistRadioNo";
					userInputNo.name = "checklist-radio:" + checklistItem_id;
					userInputNo.onclick = show_deviation_block_and_hide_location_textbox;
					userInputNo.type = "radio";
					userInputNo.value = "no";
				}

				// Generate a deviation block
				var deviation_block;
				if(role == "\"author\"") {
					deviation_block = generate_author_deviation_block(checklistItem_id);
					
					checklistItemLI.appendChild(checklistItemText);
					
					location_container.appendChild(userInputYes);
					missing_container.appendChild(userInputNo);
					
					checklistItemLI.appendChild(location_container);
					checklistItemLI.appendChild(missing_container);
					
					checklistItemLI.appendChild(deviation_block);
					
				} else if(role == "\"one-phase-reviewer\""){
					// deviation_block = generate_reviewer_deviation_block(checklistItem_id);
					if(data){
						deviation_block = generate_one_phase_reviewer_deviation_block(checklistItem_id,data);
					}else{
						deviation_block = generate_one_phase_reviewer_deviation_block(checklistItem_id,null);
					}
					
					checklistItemLI.appendChild(userInputYes);
					checklistItemLI.appendChild(userInputNo);
					
					checklistItemText.appendChild(deviation_block);
					checklistItemLI.appendChild(checklistItemText);
					
				}
				else if(role == "\"two-phase-reviewer\""){
					if(data){
						deviation_block = generate_two_phase_reviewer_deviation_block(checklistItem_id,data);
					}else{
						deviation_block = generate_two_phase_reviewer_deviation_block(checklistItem_id,null);
					}
					
					checklistItemLI.appendChild(userInputYes);
					checklistItemLI.appendChild(userInputNo);
					
					checklistItemText.appendChild(deviation_block);
					checklistItemLI.appendChild(checklistItemText);
				}

			} else {
				if (role == "\"author\"") {
					var userInputYes;
					location_container = document.createElement("span");
					location_container.className = "location_container";

					userInputYes = generate_location_textbox("item_location_textbox", checklistItem_id);
					
					var userInputNo;
					missing_container = document.createElement("span");
					
					userInputNo = document.createElement("input");
					userInputNo.type = "checkbox";
					userInputNo.id = "missing_checkbox:" + checklistItem_id;
					userInputNo.className = "missing_checkbox";
					userInputNo.name = checklistItem_id;
					userInputNo.onclick = show_hide_location_textbox;
					userInputNo.value = line_text;
				
					checklistItemLI.appendChild(checklistItemText);
					
					location_container.appendChild(userInputYes);
					checklistItemLI.appendChild(location_container);
					
					missing_container.appendChild(userInputNo);
					checklistItemLI.appendChild(missing_container);
				} else {
					var checkboxInput = document.createElement("input");
					checkboxInput.type = "checkbox";
					checkboxInput.id = checklistItem_id;
					checkboxInput.className = "checkbox_attributes";
					checkboxInput.name = checklistItem_id;
					checkboxInput.value = line_text;
					checklistItemLI.appendChild(checkboxInput);
					checklistItemLI.appendChild(checklistItemText);
				}
			}

			checklists.appendChild(checklistItemLI);
		}
	}
	return checklists;
}

//sorting all the standards, engineering research and mixed methods always displayed before any other standards regardless of any input
function sortStandards(keys) {
	var sorted_keys = [];
	if (keys.includes("\"Engineering Research\"")){
		sorted_keys.push("\"Engineering Research\"")
		keys.splice(keys.indexOf("\"Engineering Research\""), 1);
	}
	if (keys.includes("\"Mixed Methods\"")){
		sorted_keys.push("\"Mixed Methods\"")
		keys.splice(keys.indexOf("\"Mixed Methods\""), 1);
	}
	sorted_keys = sorted_keys.concat(keys.sort());
	return sorted_keys;
}

var footnotes = {};

var imrad_order = [];
all_intro_items = "";
all_method_items = "";
all_results_items = "";
all_discussion_items = "";
all_other_items = "";
unrecognized_tags = "";
standards_with_no_tags = "";
standards_with_untagged_attributes = "";


function separate_essential_attributes_based_on_IMRaD_tags(standardName, checklistHTML){
	const IMRaD_tags = ["<intro>", "<method>", "<results>", "<discussion>", "<other>"]; // Known IMRaD tags
	let imrad_counts = [];

	// Attributes of each IMRaD tag
	var intro = checklistHTML.includes("<intro>") ? checklistHTML.match(/<intro>([\s\S]*?)\n\s*<\/?\w+>/i)[1] : "";
	var method = checklistHTML.includes("<method>") ? checklistHTML.match(/<method>([\s\S]*?)\n\s*<\/?\w+>/i)[1] : "";
	var results = checklistHTML.includes("<results>") ? checklistHTML.match(/<results>([\s\S]*?)\n\s*<\/?\w+>/i)[1] : "";
	var discussion = checklistHTML.includes("<discussion>") ? checklistHTML.match(/<discussion>([\s\S]*?)\n\s*<\/?\w+>/i)[1] : "";
	var other = checklistHTML.includes("<other>") ? checklistHTML.match(/<other>([\s\S]*?)\n\s*<\/?\w+>/i)[1] : "";

	tags = checklistHTML.match(/\n\s*<\w+>/g);
	// No tags at all => treat as '<other>'
	if (tags === null){
		other = checklistHTML;
		standards_with_no_tags += "[" + standardName + "]\n";
	}
	// Unrecognized tags => treat as '<other>'
	else for (const tag of tags){
		if (!IMRaD_tags.includes(tag.trim())){
			unrecognized_tags += "[" + tag.trim() + " @ " + standardName + "]\n";
			var unrecognized = checklistHTML.match(new RegExp(tag.trim()+"([\\s\\S]*?)<\\/?\\w+>", "i"))[1];
			other = unrecognized + other;
		}
	}

	// Attributes that do not belong under any tag => treat as '<other>'
	untaged = checklistHTML.match(/^[\s\r\n]+-([\s\S]*?)\n(<\w+>)/i);
	if(untaged != null){
		other = "-" + untaged[1] + other;
		standards_with_untagged_attributes += "[" + standardName + "]\n";
	}
	
	// Count IMRaD items
	let intro_items = intro.match(/(\[\s\])/img);
	let intro_count = intro_items != null ? imrad_counts.push(intro_items.length) : imrad_counts.push(0);
	
	let method_items = method.match(/(\[\s\])/img);
	let method_count = method_items != null ? imrad_counts.push(method_items.length) : imrad_counts.push(0);
	
	let results_items = results.match(/(\[\s\])/img);
	let results_count = results_items != null ? imrad_counts.push(results_items.length) : imrad_counts.push(0);
	
	let discussion_items = discussion.match(/(\[\s\])/img);
	let discussion_count = discussion_items != null ? imrad_counts.push(discussion_items.length) : imrad_counts.push(0);
	
	let other_items = other.match(/(\[\s\])/img);
	let other_count = other_items != null ? imrad_counts.push(other_items.length) : imrad_counts.push(0);
	
	imrad_order.push(imrad_counts);

	// Combine IMRaD tags of all standards
	all_intro_items = all_intro_items + intro;
	all_method_items = all_method_items + method;
	all_results_items = all_results_items + results;
	all_discussion_items = all_discussion_items + discussion;
	all_other_items = all_other_items + other;
}

// Create Role Heading (Pre-Submission Checklist, Reviewer Checklist)
function create_role_heading() {
	var heading_div = document.createElement("div");
	var heading = document.createElement("H1");
	
	if(role == "\"author\"") {
		heading.innerHTML = "Pre-Submission Checklist";
		heading_div.appendChild(heading);
		
		var instructions = document.createElement("h3");
		instructions.innerHTML = "Use this form to ensure your manuscript meets the appropriate standards. You can download the results to share with reviewers so they can see where you have addressed each item.";
		
		heading_div.appendChild(instructions);
		
	} else if(role == "\"one-phase-reviewer\"") {
		heading.innerHTML = "Reviewer Checklist";
		heading_div.appendChild(heading);
		
	} else if(role == "\"two-phase-reviewer\"") {
		heading.innerHTML = "Reviewer Checklist";
		heading_div.appendChild(heading);
	}

	return heading_div;
}	

// Create a message showing the loaded configuration
function create_load_config_msg() {
	var config = document.createElement("p");
	config.innerHTML = "Customized Configuration Loaded";
	config.className = "hide_display";
	return config;
}

// Prepare unordered lists
function preparation_to_convert_MD_to_HTML(standardTagName, checklistTagName, checklistInnerHTML, footnotes) {

	// superscript tags
	checklistInnerHTML = checklistInnerHTML.replaceAll("<sup>", "{sup}").replaceAll("</sup>", "{/sup}");

    var tempDivElement = document.createElement("div");
    tempDivElement.innerHTML = checklistInnerHTML;
	checklistInnerText = tempDivElement.innerText;

	checklistText = checklistInnerText.replaceAll(">", "").replaceAll(/\n\s*\n/g, '\n').replaceAll("\n", "<br/>");

	// Transform Markdown tags to HTMLtags
	checklistText = convert_MD_tags_to_HTML_tags(checklistText);
	
	// Standard Files - Change from docs to link, change from .md file to nothing
	checklistText = checklistText.replaceAll('https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=').replaceAll('.md', '');

	// Supplement Files - Change from docs to link, change from .md file to nothing
	checklistText = checklistText.replaceAll('https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=').replaceAll('.md', '');

	// Convert Markdown Checklists to HTML checklists
	checklists = convert_MD_standard_checklists_to_html_standard_checklists(standardTagName, checklistTagName, checklistText, footnotes)

	return checklists;
}

// Notify testers in the case of unrecognized tags, no tags at all, or untagged attributes
function notify_testers() {
	tester = getParameterByName('y')[0] == 'noval' ? true : false;
	if(tester){
		alert_msg = "";
		if(unrecognized_tags != "") {
			alert_msg += "Warning — unrecognized tag(s):\n" + unrecognized_tags;
		}
		if(standards_with_no_tags != "") {
			alert_msg += "\nWarning — there are no tags at:\n" + standards_with_no_tags;
		}
		if(standards_with_untagged_attributes != "") {
			alert_msg += "\nWarning — there are untagged attributes at:\n" + standards_with_untagged_attributes;
		}
		if(alert_msg != "") {
		    alert(alert_msg);
		}
	}
}

// Create download button to download text file
function create_download_button() {
	var download = document.createElement("button");
	download.innerHTML = "Download";
	download.id = "checklist_download";
	download.name = "checklist_download";
	
	if (role == "\"author\"") {
		download.onclick = saveFile;
	} else {
		download.addEventListener("click", check_form_validity, false);
	}
	return download;
}

function create_download_configuration_button() {
	var download = document.createElement("button");
	download.innerHTML = "Download_Configuration";
	download.id = "checklist_download_config";
	download.name = "checklist_download_config";
	download.disabled = false;
	download.onclick = saveConfig;
	return download;
}

// Create a button for clearing the current checklist
function create_clear_checklist_button() {
	let clear_button = document.createElement("input");
	clear_button.type = "reset";
	clear_button.value = "Clear checklist";
	clear_button.id = "clear_checklist";
	
	clear_button.addEventListener("click", clear_checklist, false);
	
	return clear_button;
}

// Clear the current checklist
function clear_checklist(event) {
	let clear_check = confirm("This will erase all progress on the current checklist. Are you sure?");
	
	if (!clear_check) {
		event.preventDefault();
	} else {
		console.log("Clearing " + role + " checklist");
		localStorage.setItem(role, "");
		
		// Clear all stored items for this checklist
		let keys = Object.keys(localStorage);
		for (let key of keys) {
			if (key != role && key.includes(role)) {
				localStorage.removeItem(key, "");
			}
		}
		
		// If author, hide deviation blocks and display primary location boxes
		if (role == "\"author\"") {
			primary_locations = document.getElementsByClassName("item_location_textbox");
			deviation_boxes = document.getElementsByClassName("question_block");
			
			for (let location_box of primary_locations) {
				location_box.style.visibility = "visible";
			}
			
			for (let deviation_box of deviation_boxes) {
				deviation_box.style.display = "none";
			}
		}
	}
}


// Check if the key is nonessential
function check_nonessential_keys(key) {
	return key.includes("Desirable") || key.includes("Extraordinary");
}

// Populate a checklist with saved input data
function populate_checklist() {
	console.log("Populating " + role + " checklist");
	
	// Clear all stored items for this checklist
	let keys = Object.keys(localStorage);
	
	// Move nonessential keys to last
	let nonessential = keys.filter(check_nonessential_keys);
	for (let key of nonessential) {
		let index = keys.indexOf(key);
		keys.push(keys.splice(index, 1)[0]);
	}
	
	for (let key of keys) {
		
		if (key != role && key.includes(role)) {
			let listClass = key.replace(role + "-", "");
			let item = document.getElementsByClassName(listClass)[0];
			let state = JSON.parse(localStorage.getItem(key));
			
			if (item != null) {
				if (role != "\"author\"") {
					if (state.checked) {
						item.children[0].click();
						
					} else if (!state.checked) {
						item.children[1].click();
						
						let question_blocks = item.getElementsByClassName('question_block');
						let reasonable_yes = question_blocks[0].getElementsByClassName('deviationRadioYes')[0];
						let reasonable_no = question_blocks[0].getElementsByClassName('deviationRadioNo')[0];
				
						if (state.reasonable) {
							reasonable_yes.click();
							
						} else if (!state.reasonable) {
							reasonable_no.click();
						
							let types = question_blocks[1].getElementsByClassName('justificationRadioType');
							
							if (state.deviationType == 1) {
								types[0].click();
							} else if (state.deviationType == 2) {
								types[1].click();
							} else if (state.deviationType == 3) {
								types[2].click();
							} else if (state.deviationType == 4) {
								types[3].click();
							}
						
							let free_text_box = item.getElementsByClassName('question_block_free_Text')[0];
							let free_text_content = free_text_box.getElementsByClassName('freeTextAnswer')[0];
						
							if (Object.hasOwn(state, "freeText") && state.freeText != "") {
								free_text_content.value = state.freeText;
							}
						}
					}
				} else {
					let location_box = item.getElementsByClassName('item_location_textbox')[0];
					let missing_button = item.getElementsByClassName('missing_checkbox')[0];
					
					if (state.location != "") {
						location_box.value = state.location;
	
					} else if (!state.location) {
						missing_button.click();
						
						let justification_box = item.getElementsByClassName('justification_location_textbox')[0];
						let justification_button = item.getElementsByClassName('unjustified_checkbox')[0];
						
						if (Object.hasOwn(state, "justified") && state.justified != "") {
							justification_box.value = state.justified;
							
						} else if (!state.justified) {
							justification_button.click();
						}
					}
				}
			}
		}	
	}
}

// Save checklist state on visibility change
document.addEventListener("visibilitychange", () => {
	console.log("Storing checklist items.");
	let items = document.querySelectorAll(".item_list li");
	
	for (let item of items) {
		let storage = {};
		let key = role + "-" + item.className;
		
		if (role != "\"author\"") {
			if (item.children[0].checked) {
				storage.checked = true;
				localStorage.setItem(key, JSON.stringify(storage));
			} else if (item.children[1].checked) {
				storage.checked = false;
				
				let question_blocks = item.getElementsByClassName('question_block');
				let reasonable_yes = question_blocks[0].getElementsByClassName('deviationRadioYes')[0];
				let reasonable_no = question_blocks[0].getElementsByClassName('deviationRadioNo')[0];
		
				if (reasonable_yes.checked) {
					storage.reasonable = true;
					
				} else if (reasonable_no.checked) {
					storage.reasonable = false;
					
					let types = question_blocks[1].getElementsByClassName('justificationRadioType');
					if (types[0].checked) {
						storage.deviationType = 1;
					} else if (types[1] && types[1].checked) {
						storage.deviationType = 2;
					} else if (types[2] && types[2].checked) {
						storage.deviationType = 3;
					} else if (types[3] && types[3].checked) {
						storage.deviationType = 4;
					}
					
					let free_text = item.getElementsByClassName('question_block_free_Text')[0];
					let free_text_content = free_text.getElementsByClassName('freeTextAnswer')[0];
					
					if (free_text_content.value != "") {
						storage.freeText = free_text_content.value;
					}
				}
				localStorage.setItem(key, JSON.stringify(storage));
			} else if (item.className.includes("Desirable") || item.className.includes("Extraordinary")) {
				if (!item.children[0].checked) {
					localStorage.removeItem(key, "");
				}
			}
		} else {
			let location_box = item.getElementsByClassName('item_location_textbox')[0];
			let missing_button = item.getElementsByClassName('missing_checkbox')[0];
			
			if (location_box.value != "") {
				storage.location = location_box.value;
				localStorage.setItem(key, JSON.stringify(storage));
				
			} else if (missing_button.checked) {
				storage.location = false;
				
				let justification_box = item.getElementsByClassName('justification_location_textbox')[0];
				let justification_button = item.getElementsByClassName('unjustified_checkbox')[0];
				
				if (justification_box.value != "") {
					storage.justified = justification_box.value;
					
				} else if (justification_button.checked) {
					storage.justified = false;
				}
				localStorage.setItem(key, JSON.stringify(storage));
			}
		}
	}
});

// create Header with Unordered List (Essential, Desirable, Extraordinary)
function create_requirements_heading_with_UL(title) {
	
	if (title == "Essential") {
		var heading = document.createElement("h3");
		var checklist = document.createElement("ul");
	} else {
		var heading = document.createElement("summary");
		var checklist = document.createElement("details");
		checklist.setAttribute("open", "");
	}
	
	heading.className = "checklist_heading";
	heading.innerHTML = title;
	checklist.id = title;
	checklist.appendChild(heading);
	
	return checklist;
}

// collect footnotes
function collect_footnotes(dom, standardTag) {
	var footnoteTags = dom.getElementsByTagName("footnote");

	for(let footnoteTag of footnoteTags){
		supTag = footnoteTag.getElementsByTagName("sup")[0];
		footnote_id = standardTag.getAttribute('name')+"--footnote--"+supTag.innerText.trim() // To make footnotes belong to their standards
		supTag.remove();
		footnotes[footnote_id] = footnoteTag.innerText.trim();
	}
}


// Function to convert Markdown tables to HTML tables
function convertMarkdownToHTML(markdown) {
    var lines = markdown.trim().split('\n');
    var resultHTML = '<div>';

    var currentType = null;

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        var isHeaderRow = i === 0;

        if (isHeaderRow) {
            var headers = line.split('|').map(function (header) {
                return header.trim();
            });

            currentType = headers[1];
            resultHTML += '<checklist name="' + currentType + '">';
        } else {
            var cells = line.split('|').map(function (cell) {
                return cell.trim();
            });

            if (currentType !== cells[1]) {
                resultHTML += '</checklist>';
                currentType = cells[1];
                resultHTML += '<checklist name="' + currentType + '">';
            }

            resultHTML += '<row>';
			resultHTML += '<type>' + cells[1] + '</type>';
            resultHTML += '<content>' + cells[2] + '</content>';
            resultHTML += '<Display1>' + cells[3] + '</Display1>';
            resultHTML += '<ErrorType>' + cells[4] + '</ErrorType>';
            resultHTML += '<DisplayFree>' + cells[5] + '</DisplayFree>';
            resultHTML += '<FreeLabel>' + cells[6] + '</FreeLabel>';
            resultHTML += '</row>';
        }
    }

    resultHTML += '</checklist></div>';
    return resultHTML;
}

// A function to process the Encoding method of the contents to create a unique key for every single checklist
function Encode_key(content) {
	console.log(content);
	// process the conentes within <a> and </a>
	content = content.replace(/<a[^>]*>|<\/a>/g, '');
	// process the footnote issue
	content = content.replace(/\{sup\}.*?\{\/sup\}/g, '');
	// now remove all the non-alphabetic and non-numeric characters
	content = content.replace(/[^a-zA-Z0-9]/g, '');
	return content;
}

function create_requirements_checklist_table(file) {
	// Create Element "FORM"
	var form = document.createElement("FORM");
	form.id = "checklists";
	form.name = "checklists";

	// unshift() method adds new items to the beginning of an array, and returns the new length
	if (!standard_keys.includes("\"General Standard\"")) {
		standard_keys.unshift("\"General Standard\"");
	}
	
	if(file == null){
		var i = 0;
		const Essentail_dataStructure = new HashMap();
		const Desirable_dataStructure = new HashMap();
		const Extraordinary_dataStructure = new HashMap();
		for (let key of standard_keys){
			i++;
			// Obtain all the information for a Standard
			empirical_standard1 = readSpecificEmpiricalStandard_table(key);
			// Convert Markdown to HTML
			var htmlTable = convertMarkdownToHTML(empirical_standard1);
	
			// Get a reference to the container element where you want to display the table
			var dom1 = document.createElement("div");
			// Append the HTML table to the container
			dom1.innerHTML = htmlTable;
	
			var checklists1 = dom1.getElementsByTagName('checklist')[2];
			for(let checks of checklists1.getElementsByTagName('row')){
				var content0 = checks.getElementsByTagName('Type')[0].innerHTML;
				var content1 = checks.getElementsByTagName('content')[0].innerHTML;
				var content2 = checks.getElementsByTagName('display1')[0].innerHTML;
				var content3 = checks.getElementsByTagName('errortype')[0].innerHTML;
				var content4 = checks.getElementsByTagName('displayfree')[0].innerHTML;
				var content5 = checks.getElementsByTagName('freelabel')[0].innerHTML;
				var rowData = {
					type: content0,
					content: content1,
					display1: content2,
					errortype: content3,
					displayfree: content4,
					freelabel: content5
				};
	
				// update the encoding method to get the key for the contents
				const key = Encode_key(content1);
				dataStructure.set(key,rowData)
			}
		}
	}else{
		console.log(file);

		// Parse the JSON string to an object
		const jsonObject = JSON.parse(file);

		// Loop through the keys in the parsed JSON object
		Object.keys(jsonObject).forEach(key => {
			dataStructure.set(jsonObject[key][0], jsonObject[key][1]);
		});
	}
	return;
}
  

function create_requirements_checklist(file) {

	// Create Element "FORM"
	var form = document.createElement("FORM");
	form.id = "checklists";
	form.name = "checklists";
	
	let clear_button = create_clear_checklist_button();
	form.appendChild(clear_button);

	// create Header for Essential Requirements with an unordered list
	var EssentialUL = create_requirements_heading_with_UL("Essential");

	// create Header for Desirable Requirements with an unordered list
	var DesirableUL = create_requirements_heading_with_UL("Desirable");

	// create Header for Extraordinary Requirements with an unordered list
	var ExtraordinaryUL = create_requirements_heading_with_UL("Extraordinary");
	
	if( role != "\"author\"" ) {
		DesirableUL.className = "hide_display";
		ExtraordinaryUL.className = "hide_display";
	}

	// unshift() method adds new items to the beginning of an array, and returns the new length
	if (!standard_keys.includes("\"General Standard\"")) {
		standard_keys.unshift("\"General Standard\"");
	}
	
	create_requirements_checklist_table(file);
	
	let standards_list = [];
	
	var i = 0;
	for (let key of standard_keys){
		i++;

		// Obtain all the information for a Standard
		empirical_standard = readSpecificEmpiricalStandard(key);

		var dom = document.createElement("div");
		dom.innerHTML = empirical_standard;
		var standardTag = dom.getElementsByTagName("standard")[0];

		// collect all the footnotes
		collect_footnotes(dom, standardTag);
		
		let standardName = "\"" + standardTag.getAttribute('name') + "\"";
		standardName = standardName.replaceAll("\"", "");
		standards_list.push(standardName.replaceAll(/\s/g, ""));
		
		var checklistTags = standardTag.getElementsByTagName("checklist");
		for (let checklistTag of checklistTags){
			
			let checklistType = checklistTag.getAttribute('name');

			// dealing with footnotes
			checklistHTML = checklistTag.innerHTML.replaceAll("<sup>", "<sup>"+standardName+"--footnote--") // To make footnotes belong to their standards 

			// Add all information for "all_intro_items", etc.
			if (checklistType == "Essential") {
				separate_essential_attributes_based_on_IMRaD_tags(standardTag.getAttribute('name'), checklistHTML);
			}

			// Reformat the checklists from MD to HTML
			var Yes_No = document.createElement("div");
			Yes_No.className = "checklist_labels"
			
			if (role == "\"author\"") {
				Yes_No.classList.add("author_labels");
				
				var attribute_label = document.createElement("span");
				attribute_label.innerHTML = "Attribute";
				attribute_label.className = "attribute_label";
				
				var location_label = document.createElement("span");
				var location_types_combobox = document.createElement("select");
				location_types_combobox.id = 'location_type';

				var location_types = [
					{ value: 'line_no', text: 'Line Number(s)' },
					{ value: 'page_no', text: 'Page #, Line #' },
					{ value: 'page_with_paragraph_no', text: 'Page #, Paragraph #' },
					{ value: 'section_no', text: 'Section #, Line #' },
					{ value: 'section_with_paragraph_no', text: 'Section #, Paragraph #' },
				];

				location_types.forEach(function(option) {
					var location = document.createElement('option');
					location.value = option.value;
					location.text = option.text;
					location_types_combobox.appendChild(location);
				});	

				location_types_combobox.selectedIndex = 0;
				location_label.className = "location_container";
				location_label.appendChild(location_types_combobox);
				
				var missing_label = document.createElement("span");
				missing_label.innerHTML = "N/A";
				
				Yes_No.appendChild(attribute_label);
				Yes_No.appendChild(location_label);
				Yes_No.appendChild(missing_label);
			} else {
				Yes_No.innerHTML = "&nbsp;Yes No";
			}

			if (checklistType == "Essential") {
				if (i == 1) {
					EssentialUL.appendChild(Yes_No);
				}
			}
			else if (checklistType == "Desirable") {
				
				// Change from Markdown to HTML elements
				checklists = preparation_to_convert_MD_to_HTML(standardTag.getAttribute('name'), checklistTag.getAttribute('name'), checklistHTML, footnotes);
				DesirableUL.appendChild(checklists);
			}
			else if (checklistType == "Extraordinary") {
				
				// Change from Markdown to HTML elements
				checklists = preparation_to_convert_MD_to_HTML(standardTag.getAttribute('name'), checklistTag.getAttribute('name'), checklistHTML, footnotes);
				ExtraordinaryUL.appendChild(checklists);
			}
		}
	}
	
	all_essential_IMRaD_items_innerHTML = "" + all_intro_items + "\n_hr_" + all_method_items + "\n_hr_" + all_results_items + "\n_hr_" + all_discussion_items + "\n_hr_" + all_other_items;
	
	all_essential_IMRaD_items_innerHTML = all_essential_IMRaD_items_innerHTML.replaceAll("\n_hr_", "").length > 0 ? all_essential_IMRaD_items_innerHTML : "";
	
	// Notify testers in the case of unrecognized tags, no tags at all, or untagged attributes
	notify_testers();
	
	// Change from Markdown to HTML elements
	checklists = preparation_to_convert_MD_to_HTML(standards_list, 'Essential', all_essential_IMRaD_items_innerHTML, footnotes);
	EssentialUL.appendChild(checklists);
	
	// Add Essential Attributes to the form
	form.appendChild(EssentialUL);

	// Create download button
	var download = create_download_button();
	
	var error_warning = document.createElement("div");
	error_warning.className = "error_warning attention hide_display";
	error_warning.innerHTML = "Some required items are missing.";

	var download_test = create_download_configuration_button();

	// (All 'Yes' -> accept manuscript)
	var decision_msg = generate_message("decision_msg", (role != "\"author\"" ? "The manuscript meets all essential criteria: ACCEPT." : ""), "message_style_4");
	form.appendChild(decision_msg);

	if(role == "\"author\""){
		// (At least one 'No-No-No' -> reject manuscript)
		var deviation_unreasonable = generate_message("deviation_unreasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable.", "message_style_4");
		form.appendChild(deviation_unreasonable);
		// (At least one 'No-No-Yes' -> explain fix)
		var deviation_reasonable = generate_message("deviation_reasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable. Please give specific suggestions for how each deviation can be addressed.", "message_style_4");
		form.appendChild(deviation_reasonable);

	} else if(role == "\"one-phase-reviewer\""){
		// (At least one 'No-No-No' -> reject manuscript)
		var deviation_unreasonable = generate_message("deviation_unreasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable.", "message_style_4");
		form.appendChild(deviation_unreasonable);
		// (At least one 'No-No-Yes' -> explain fix)
		var deviation_reasonable = generate_message("deviation_reasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable. Please give specific suggestions for how each deviation can be addressed.", "message_style_4");
		form.appendChild(deviation_reasonable);

	} else if(role == "\"two-phase-reviewer\""){
		// (At least one 'No-No-No' -> reject manuscript)
		var deviation_unreasonable = generate_message("deviation_unreasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable.", 2, 0);
		form.appendChild(deviation_unreasonable);

		// (At least one 'No-No-Yes' -> explain fix)
		var deviation_reasonable = generate_message("deviation_reasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable. Please give specific suggestions for how each deviation can be addressed.", "message_style_4");
		form.appendChild(deviation_reasonable);

	}

	// Add Desirable and Extraordinary Unordered List to Form
	form.appendChild(DesirableUL);
	form.appendChild(ExtraordinaryUL);
	form.appendChild(download);
	form.appendChild(error_warning);
	
	return form;
}

// Add the bottom of checklist "For more information, see: "
function create_for_more_info_part(standard_keys) {
	var more_info_DIV = document.createElement("DIV");
	var more_info_H2 = document.createElement("H2");
	more_info_H2.innerHTML = "For more information, see:";
	
	var standards_path = "../docs/standards?standard="
	var more_info_UL = document.createElement("UL");
	more_info_UL.className = "more-info-list";

	// Adding Standards as a list with a link to the correct page
	for (let key of standard_keys){
		key = key.replaceAll("\"", "");
		var LI = document.createElement("LI");
		var LINK = document.createElement("A");
		LINK.innerHTML = key;
		LINK.href = standards_path + key.replaceAll(" ", "");
		LINK.target = "_blank";
		LINK.className = "standard_links";
		LI.appendChild(LINK);
		more_info_UL.appendChild(LI);
	}
	more_info_DIV.appendChild(more_info_H2);
	more_info_DIV.appendChild(more_info_UL);
	return more_info_DIV;
}

function generateStandardChecklist(file) {
	console.log(file);
	
	// list of Standards
	standard_keys = getParameterByName('standard');

	// return sorted list of Standards
	standard_keys = sortStandards(standard_keys);
	
	var wrappers = document.getElementsByClassName('wrapper');
	var wrapper = null;
	if (wrappers.length > 0)
		wrapper = wrappers[1];

	// Create container that holds header, checklist, etc.
	var container = document.createElement("DIV");
	container.id = "container";

	// Create header (Pre-submission Checklist, Reviewer Checklist)
	var heading = create_role_heading();

	// Create a message showing the loaded configuration
	var config = create_load_config_msg();

	// Create Checklist
	var form = create_requirements_checklist(file);

	// Append header and form to container
	container.appendChild(heading);
	container.appendChild(config);
	container.appendChild(form);

	// Creates line separating from checklist and "for more information, see:"
	HR = document.createElement("HR");
	container.appendChild(HR);

	// Create "For more information, see:"
	var more_info_DIV = create_for_more_info_part(standard_keys);
	container.appendChild(more_info_DIV);

	if (wrapper == null) {
		document.body.appendChild(container);
	} else {
		wrapper.appendChild(container);
	}
	
	//This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
	generate_decision_message_block();
	
	// Check if the current checklist is being stored
	if (localStorage.getItem(role) !== null) {
		console.log(role + " checklist found in storage");
		populate_checklist();
	} else {
		console.log("Begin storing " + role + " checklist");
		localStorage.setItem(role, "");
	}
}

// Check if the completed checklist is valid (no missing items)
function check_form_validity(event) {
	event.preventDefault();
	let validity = true;
	let list = document.getElementById("Essential");
	
	for (let ul of list.children) {
		if (ul.tagName == 'UL') {
			for (let li of ul.children) {
				if (li.tagName != 'LI'){
					continue;
				}
				 
				// If yes-no is missing, the item is invalid
				if (li.children[0].checked || li.children[1].checked) {
					li.children[2].classList.remove("attention");
				} else {
					li.children[2].classList.add("attention");
					validity = false;
				}
				
				let question_blocks = li.getElementsByClassName('question_block');
				
				if (question_blocks[0].style.display != "none") {
					let reasonable_yes = question_blocks[0].getElementsByClassName('deviationRadioYes')[0];
					let reasonable_no = question_blocks[0].getElementsByClassName('deviationRadioNo')[0];
					
					// If deviation reasonability missing, the item is invalid
					if (reasonable_yes.checked || reasonable_no.checked) {
						question_blocks[0].classList.remove("attention");
					} else {
						question_blocks[0].classList.add("attention");
						validity = false;
					}
					
					if (question_blocks[1].style.display != "none") {
						let types = question_blocks[1].getElementsByClassName('justificationRadioType');
					
						// If deviation type missing, the item is invalid
						if (types[0].checked || types[1] && types[1].checked || types[2] && types[2].checked || types[3] && types[3].checked) {
							question_blocks[1].classList.remove("attention");
						} else {
							question_blocks[1].classList.add("attention");
							validity = false;
						}
					}
					
					let free_text = li.getElementsByClassName('question_block_free_Text')[0];
					
					if (free_text.style.display != "none") {
						let free_text_content = free_text.getElementsByClassName('freeTextAnswer')[0];
					
						// If free text missing, the item is invalid
						if (free_text_content.value == "") {
							free_text.classList.add("attention");
							validity = false;
						} else {
							free_text.classList.remove("attention");
						}
					}
				}
			}
		}
	}
	
	if (!validity) {
		document.getElementsByClassName("error_warning")[0].classList.remove("hide_display");
	} else {
		document.getElementsByClassName("error_warning")[0].classList.add("hide_display");
		saveFile();
	}
}


// Download the checklist with a specific format
function saveFile() {
	var checklists = document.getElementById('checklists');
	var generated_text = '=================\n' +
		'Review Checklist\n' +
		'=================\n';
		
	var decision = document.getElementById("decision_msg");
	var unreasonable = document.getElementById("deviation_unreasonable");
	var reasonable = document.getElementById("deviation_reasonable");

	if (decision.style.display == "block") {
		generated_text += "\nRecommended Decision: " + decision.innerText + "\n";
	}
	
	if (unreasonable.style.display == "block") {
		generated_text += "\nUnreasonable Deviations\n";
	}

	if (reasonable.style.display == "block") {
		generated_text += "\nUnreasonable Deviations Requiring Revision\n";
	} else {
		generated_text += "";
	}
	
	var essential_list = "\nEssential\r\n";
	
	if (role == "\"author\""){
		var location_type = document.getElementById('location_type');
		location_type = location_type.options[location_type.selectedIndex].text;
		generated_text += "\nNote: The numbers beside checklist items, if any, represent " + location_type.toLowerCase() + "\n";
		
		essential_list += "  Location" + "\t" + "Attribute\r\n\r\n";
	}
	
	var desirable_list = "\nDesirable\r\n";
	var extraordinary_list = "\nExtraordinary\r\n";
	var free_text_list = "\nFree Text Questions\r\n"
	
	var include_desirable = false;
	var include_extraordinary = false;
	
	var type1_list = "";
	var type2_list = "";
	var type3_list = "";
	var type4_list = "";
	
	let lists = document.querySelectorAll("#Essential, #Desirable, #Extraordinary");
	
	for (let list of lists) {
		for (let ul of list.children) {
			if(ul.tagName == 'UL'){
				var i = 0;
				for (let li of ul.children) {
					if (li.tagName != 'LI') {
					   continue;
					}
					i++;
					var li_text = li.getAttribute("text").trim();
					var regex = /<a+\n*.+<\/a>/g;
					if (li_text.match(regex) != null)
						li_text = li_text.replace(regex, "");

					var regex2 = /\{sup\}.+\{\/sup\}/g;
					var regex3 = /<br\/>/g;
					var regex4 = /<\/b>/g;
					var regex5 = /<b>/g;
					var regex6 = /[\r\n]+/g;
					var regex7 =/ \(.+?\)/g;
					var regex8 = /<i>/g;
					var regex9 = /<\/i>/g;

					if (li_text.match(regex2) != null)
						li_text = li_text.replace(regex2, "");
					if (li_text.match(regex3) != null)
						li_text = li_text.replace(regex3,"\n");
					if (li_text.match(regex4) != null)
						li_text = li_text.replace(regex4,"");
					if (li_text.match(regex5) != null)
						li_text = li_text.replace(regex5,"");
					if (li_text.match(regex6) != null)
						li_text = li_text.replace(regex6,"");
					if (li_text.match(regex7) != null)
						li_text = li_text.replace(regex7,"");
					if (li_text.match(regex8) != null)
						li_text = li_text.replace(regex8,"");
					if (li_text.match(regex9) != null)
						li_text = li_text.replace(regex9,"");
					
					var location_value = "";
					var location_textbox = li.getElementsByClassName('item_location_textbox');

					if (list.id == 'Essential'){
						if (role != "\"author\"" && li.children[0].checked) {
							essential_list +=  'Y' + '\t   ' + li_text + '\r\n';
						} else if (role == "\"author\"" && location_textbox[0].value != "") {
							if (location_textbox.length == 1) {
								location_value = location_textbox[0].value;
							}
															
							essential_list += "  " + (location_value != "" ? location_value : "");
							
							// Determine whether to push item text to new line based on location text length
							if (location_value.length < 6) {
								essential_list += '\t\t' + li_text + '\r\n';
							} else if (location_value.length < 14) {
								essential_list += '\t' + li_text + '\r\n';
							} else {
								essential_list += '\r\n\t\t' + li_text + '\r\n';
							}
							
						} else {
							var reasonable_deviation = li.getElementsByClassName('deviationRadioYes')[0];						
							location_textbox = li.getElementsByClassName('justification_location_textbox');
							
							// store for the free_text_question
							var questionDiv  = li.getElementsByClassName("question_block_free_Text");
							
							if (questionDiv[0]) {
								var question_text = questionDiv[0].querySelector('div:first-child').textContent.trim().replace(/^\W+/g, '');
								console.log(question_text)
								var inputCollection  = li.getElementsByClassName('freeTextAnswer');
								console.log(inputCollection);
								
								if (inputCollection[0]) {
									var input_text = inputCollection[0].value;
								}
							}

							if (location_textbox[0] && location_textbox[0].value != "" || reasonable_deviation && reasonable_deviation.checked) {
								if (location_textbox.length == 1) {
									location_value = location_textbox[0].value;
								}
								
								if (role == "\"author\"") {
									essential_list += "  " + (location_value != "" ? location_value : "");
									
									// Determine whether to push item text to new line based on location text length
									if (location_value.length < 6) {
										essential_list += '\t\t' + li_text + ' (justified deviation)\r\n';
									} else if (location_value.length < 14) {
										essential_list += '\t' + li_text + ' (justified deviation)\r\n';
									} else {
										essential_list += '\r\n\t\t' + li_text + ' (justified deviation)\r\n';
									}
									
								} else {
									essential_list += 'R' + '\t   ' + li_text + '\r\n';
								}
								
							} else {
								var fixable_deviation = li.getElementsByClassName('justificationRadioType');
								
								if (fixable_deviation.length != 0){
									if (fixable_deviation[0].checked) {
										type1_list += '1\t   ' + li_text + '\r\n';
										if(input_text !== ""){
											type1_list += ' \t   ' + question_text + '\r\n';
											type1_list += ' \t    \t   ' + input_text + '\r\n';
										}
									} else if (fixable_deviation[1].checked) {
										type2_list += '2\t   ' + li_text + '\r\n';
										if(input_text !== ""){
											type2_list += ' \t   ' + question_text + '\r\n';
											type2_list += ' \t    \t   ' + input_text + '\r\n';
										}
									}  else if (fixable_deviation[2].checked) {
										type3_list += '3\t   ' + li_text + '\r\n';
										if(input_text !== ""){
											type3_list += ' \t   ' + question_text + '\r\n';
											type3_list += ' \t    \t   ' + input_text + '\r\n';
										}
									}  else if (fixable_deviation[3].checked) {
										type4_list += '4\t   ' + li_text + '\r\n';
										if(input_text !== ""){
											type4_list += ' \t   ' + question_text + '\r\n';
											type4_list += ' \t    \t   ' + input_text + '\r\n';
										}
									}
								} else {
									essential_list += (role == "\"author\"" ? '  *' : ' ') + '\t\t' + li_text;
									essential_list += (role == "\"author\"" ? ' (unjustified deviation)\r\n' : '\r\n');
								}
							}
						}
					}
					else if (list.id == 'Desirable') {
						if (li.children[0].checked || role == "\"author\"" && location_textbox[0].value != "") {
							include_desirable = true;

							if (location_textbox.length == 1) {
								location_value = location_textbox[0].value;
								desirable_list += "  " + (location_value != "" ? location_value : "");
								
								// Determine whether to push item text to new line based on location text length
								if (location_value.length < 6) {
									desirable_list += '\t\t' + li_text + '\r\n';
								} else if (location_value.length < 14) {
									desirable_list += '\t' + li_text + '\r\n';
								} else {
									desirable_list += '\r\n\t\t' + li_text + '\r\n';
								}
							} else {
								desirable_list +=  'Y' + '\t   ' + li_text + '\r\n';
							}
						}
					} else if (li.children[0].checked || role == "\"author\"" && location_textbox[0].value != "") {
						include_extraordinary = true;

						if (location_textbox.length == 1) {
							location_value = location_textbox[0].value;
							extraordinary_list += "  " + (location_value != "" ? location_value : "");
							
							// Determine whether to push item text to new line based on location text length
							if (location_value.length < 6) {
								extraordinary_list += '\t\t' + li_text + '\r\n';
							} else if (location_value.length < 14) {
								extraordinary_list += '\t' + li_text + '\r\n';
							} else {
								extraordinary_list += '\r\n\t\t' + li_text + '\r\n';
							}
						} else {
							extraordinary_list +=  'Y' + '\t   ' + li_text + '\r\n';
						}
					}

				}

			}
		}
	}
	
	generated_text += type4_list + type3_list + type2_list + type1_list;
	
	generated_text += essential_list;
	
	if (include_desirable) {
		generated_text += desirable_list;
	}
	if (include_extraordinary) {
		generated_text += extraordinary_list;
	}
	
	generated_text += "\n";
	
	let date_generated = new Date();
	let date_string = date_generated.toLocaleDateString("en-CA", {timeZone: "-12:00"});
	let time_string = date_generated.toLocaleTimeString("en-US", {timeZone: "-12:00"});
	
	let date_formatted = new Date(date_string);
	generated_text += '\nGenerated: ' + date_generated.toDateString() + ', ';
	generated_text += time_string.slice(0, -6) + time_string.substr(8,3) + ' AoE\n\n';
	
	if (role != "\"author\"") {
		generated_text += "=======\n" +
		"Legend\n" +
		"=======\n" +
		"Y = yes, the paper has this attribute\n" +
		"R = a reasonable, acceptable deviation from the standards\n" +
		"1 = a deviation that can be fixed by editing text only\n" +
		"2 = a deviation that can be fixed by doing some new data analysis, redoing some existing data analysis, or collecting a small amount of additional data\n" +
		"3 = a deviation that can be fixed by completely redoing data analysis, or collecting additional data\n" +
		"4 = a deviation that cannot be fixed, or at least not without doing a brand new study\n\n\n";
	}

	generated_text+= "=================\n" +
		"Standards Used\n" +
		"=================\n";

	var elms = document.querySelectorAll(".standard_links");
	for (var i = 0; i < elms.length; i++) {
		generated_text += elms[i].innerHTML + '\n';
	}

	pageURL = window.location.href;	
	generated_text += "\nURL: " + pageURL;

	var newLink = document.createElement('a');
	newLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(generated_text);
	newLink.download = 'reviewChecklist.txt';

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        newLink.dispatchEvent(event);
    } else {
        newLink.click();
	}
	return false;
}


function saveConfig() {
	// Convert HashMap to JSON string
	console.log(dataStructure._buckets)
	// Loop through the _buckets array in yourHashMap
	const extractedData = {};

	// Loop through the _buckets array in dataStructure
	dataStructure._buckets.NaN.forEach((value, index) => {
		console.log(value);
		console.log(index);
		extractedData[index] = value;
	});
	console.log(extractedData)
	const jsonContent = JSON.stringify(extractedData);

	// Parse the JSON string to an object
	const jsonObject = JSON.parse(jsonContent);

	// Convert the object back to a formatted JSON string with indentation
	const formattedJsonContent = JSON.stringify(jsonObject, null, 2);

	// Create a Blob from the formatted JSON content
	const blob = new Blob([formattedJsonContent], { type: 'application/json' });

	// Create a temporary URL for the Blob
	const url = URL.createObjectURL(blob);

	// Create a download link
	const downloadLink = document.createElement('a');
	downloadLink.href = url;
	downloadLink.download = 'reviewConfig.json'; // Set the file name here

	// Append the download link to the body (or any other part of the DOM)
	document.body.appendChild(downloadLink);

	// Programmatically trigger the click event on the download link
	downloadLink.click();

	// Clean up by revoking the Blob URL
	URL.revokeObjectURL(url);
	return false;
}

function viewStandardDescription(standard_name) {
	// Obtain all the information for a Standard
	empirical_standard = readSpecificEmpiricalStandard(standard_name);
	var dom = document.createElement("div");
	dom.innerHTML = empirical_standard;
	var standardTag = dom.getElementsByTagName("standard")[0];
	var descTags = standardTag.getElementsByTagName("desc");
	for (let descTag of descTags) {
		descHTML = descTag.innerHTML.replaceAll(">", "").replaceAll(/\n\s*\n/g, '\n').replaceAll("\n", " ").replaceAll("*", "");
	}
	return descHTML;
}