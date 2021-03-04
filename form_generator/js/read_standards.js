function getParameterByName(param_name, url = window.location.href){
    var params = location.search&&location.search.substr(1).replace(/\+/gi," ").split("&");
    var param_values = [];
	var i = 0;
	for (var param_index in params){
        var param = params[param_index].split("=");
		if(param[0] === param_name){
			param_values[i] = "\"" + unescape(param[1]) + "\"";
			i++;
		}
    }
	return param_values;
}

function readAllEmpiricalStandards(){
    var mdFile = new XMLHttpRequest();
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
	var empirical_standards = "";
    //mdFile.open("GET", dir + "/md/empiricalStandards.md", false);
    mdFile.onreadystatechange = function(){
        if (mdFile.readyState === 4){
            if (mdFile.status === 200  || mdFile.status == 0)
                empirical_standards = mdFile.responseText;
			else
				alert("Can't read empiricalStandards.md.");
        }
		else
			alert("Can't read empiricalStandards.md");
	}
	mdFile.send(null);
	return empirical_standards;
}

function readSpecificEmpiricalStandards(standard_name){
    var mdFile = new XMLHttpRequest();
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
	var standard_file_name = standard_name.replaceAll("\"", "").replace(" ", "");
	var standard_file_path = "./Standards/" + standard_file_name + ".md";
	var empirical_standard = "";
    mdFile.open("GET", standard_file_path, false);
    mdFile.onreadystatechange = function(){
        if (mdFile.readyState === 4){
            if (mdFile.status === 200  || mdFile.status == 0)
                empirical_standard = mdFile.responseText;
			else
				alert("Can't read " + standard_file_name + ".md");
        }
		else
			alert("Can't read " + standard_file_name + ".md");
	}
	mdFile.send(null);
	return empirical_standard;
}

function createTooltip(checklistItemText, line_text, footnotes){
	footnote_id = line_text.match(/\{sup\}(.*)\{\/sup\}/)[1];
	footnote_text = footnotes[footnote_id];
	//var tooltip = document.createElement("sup");
	var tooltip = checklistItemText;
	tooltip.className = "tooltip";
	//tooltip.innerHTML = "<b>" + footnote_id.match(/\[([0-9]+)\]/)[1] + "</b>";
	tooltip.innerHTML = line_text.replace(/\{sup\}(.*)\{\/sup\}/, "").replace("<br>", "");
	var tooltipText = document.createElement("span");
	tooltipText.className = "tooltiptext";
	tooltipText.innerHTML = footnote_text;
	tooltip.appendChild(tooltipText);
	return tooltip;
}

function fromMDtoHTMLformat(text){
	// Bold text
	if (text.match(/\*\*(.*?)\*\*/g) != null)
		text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

	// Italic text
	if (text.match(/\*(.*?)\*/g) != null)
		text = text.replace(/\*(.*?)\*/g, "<i>$1</i>");

	// Supplements
	if (text.match(/\(see(\s|\sthe\s)?\[(.*?)\]\((.*?)\)\)/g) != null)
		text = text.replace(/\(see(\s|\sthe\s)?\[(.*?)\]\((.*?)\)\)/g, "(see $1<a href='$3'>$2</a>)");

	return text;
}

function show_deviation_block() {
	id = this.id.replace("checklist-radio:No:", "")
	var block = document.getElementById("deviation_block:" + id);
	block.style.display = "block";
}

function hide_deviation_block() {
	id = this.id.replace("checklist-radio:Yes:", "")
	var block = document.getElementById("deviation_block:" + id);
	block.style.display = "none";
	var block = document.getElementById("deviation_justified:" + id);
	block.style.display = "none";
	var block = document.getElementById("deviation_not_justified:" + id);
	block.style.display = "none";
	deviation_radio_name = this.name.replace("checklist-radio", "deviation_block-radio");
	document.getElementsByName(deviation_radio_name)[0].checked = false;
	document.getElementsByName(deviation_radio_name)[1].checked = false;
	deviation_radio_name = this.name.replace("checklist-radio", "deviation_justified-radio");
	document.getElementsByName(deviation_radio_name)[0].checked = false;
	document.getElementsByName(deviation_radio_name)[1].checked = false;
	deviation_radio_name = this.name.replace("checklist-radio", "deviation_not_justified-radio");
	document.getElementsByName(deviation_radio_name)[0].checked = false;
	document.getElementsByName(deviation_radio_name)[1].checked = false;
}

function hide_other_messages(id) {
	try {
		document.getElementById("deviation_reasonable:" + id).style.display = "none";
		document.getElementById("deviation_unreasonable:" + id).style.display = "none";
		document.getElementById("justification_reasonable:" + id).style.display = "none";
		document.getElementById("justification_unreasonable:" + id).style.display = "none";
	}
	catch(err) {}
}

function deviation_justification() {
	// (No-Yes) deviation is justified
	if(this.id.includes("deviation_block-radio:Yes:")){ 
		id = this.id.replace("deviation_block-radio:Yes:", "")
		hide_other_messages(id);
		var block = document.getElementById("deviation_not_justified:" + id);
		block.style.display = "none";
		var block = document.getElementById("deviation_justified:" + id);
		block.style.display = "block";
		deviation_radio_name = this.name.replace("deviation_block-radio", "deviation_not_justified-radio");
		document.getElementsByName(deviation_radio_name)[0].checked = false;
		document.getElementsByName(deviation_radio_name)[1].checked = false;
	}
	// (No-No) deviation is unjustified
	else if(this.id.includes("deviation_block-radio:No:")){ 
		id = this.id.replace("deviation_block-radio:No:", "")
		hide_other_messages(id);
		var empty_message = document.getElementById("deviation_justified:" + id);
		empty_message.style.display = "none";
		var message = document.getElementById("deviation_not_justified:" + id);
		message.style.display = "block";
		deviation_radio_name = this.name.replace("deviation_block-radio", "deviation_justified-radio");
		document.getElementsByName(deviation_radio_name)[0].checked = false;
		document.getElementsByName(deviation_radio_name)[1].checked = false;
	}
	else{
		// (No-Yes-Yes) => deviation is justified and justification is reasonable
		if(this.id.includes("deviation_justified-radio:Yes:")){	
			id = this.id.replace("deviation_justified-radio:Yes:", "")
			hide_other_messages(id);
			var message = document.getElementById("justification_reasonable:" + id);
			message.style.display = "block";
		}
		// (No-Yes-No) => deviation is justified but justification is unreasonable
		else if(this.id.includes("deviation_justified-radio:No:")){
			id = this.id.replace("deviation_justified-radio:No:", "")
			hide_other_messages(id);
			var message = document.getElementById("justification_unreasonable:" + id);
			message.style.display = "block";
		}
		// (No-No-Yes) => deviation is unjustified but reasonable
		else if(this.id.includes("deviation_not_justified-radio:Yes:")){
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
}

function generate_question_block_with_yes_no_radio_answers(id, question, checklistItem_id) {
	var block = document.createElement("div");
	block.id = id + ":" + checklistItem_id;
	block.style = "padding-left:1.6em; display:none";
	block.innerHTML = "&rdsh;&nbsp; " + question;
	var deviation_block_radios = document.createElement("div");
	var deviationRadioYes = document.createElement("input");
	var deviationRadioNo = document.createElement("input");
	var deviationLabelYes = document.createElement("label");
	var deviationLabelNo = document.createElement("label");
	deviationRadioYes.id = id + "-radio:Yes:" + checklistItem_id;
	deviationRadioNo.id = id + "-radio:No:" + checklistItem_id;
	deviationRadioYes.name = id + "-radio:" + checklistItem_id;
	deviationRadioNo.name = id + "-radio:" + checklistItem_id;
	deviationRadioYes.onclick = deviation_justification;
	deviationRadioNo.onclick = deviation_justification;
	deviationRadioYes.type = "radio";
	deviationRadioNo.type = "radio";
	deviationRadioYes.value = "Yes";
	deviationRadioNo.value = "No";
	deviation_block_radios.innerHTML = "&nbsp;&nbsp;&nbsp;";
	deviationLabelYes.innerHTML = "Yes&nbsp;&nbsp;";
	deviationLabelNo.innerHTML = "No";
	deviationLabelYes.htmlFor = deviationRadioYes.id;
	deviationLabelNo.htmlFor = deviationRadioNo.id;
	deviation_block_radios.appendChild(deviationRadioYes);
	deviation_block_radios.appendChild(deviationLabelYes);
	deviation_block_radios.appendChild(deviationRadioNo);
	deviation_block_radios.appendChild(deviationLabelNo);
	block.appendChild(deviation_block_radios);
	
	return block;
}

function generate_message(id, color, text) {
	var message = document.createElement("div");
	message.id = id;
	message.innerHTML = text;
	message.style = "color:" + color + "; padding-left:1.4em; text-indent:-1em; display:none";
	
	return message;
}

function generate_author_deviation_block(checklistItem_id) {
	var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "does the manuscript justify the deviation?", checklistItem_id);
	
	// Author-specific deviation justification block
	var deviation_justified = document.createElement("div");
	deviation_justified.id = "deviation_justified:" + checklistItem_id;
	deviation_justified.style = "padding-left:1.2em; display:none";

	// Author-specific message
	var deviation_not_justified = document.createElement("div");
	deviation_not_justified.id = "deviation_not_justified:" + checklistItem_id;
	deviation_not_justified.innerHTML = "&rdsh;&nbsp; the manuscript should either conform to the standard or clearly explain why it deviates from the standard";
	deviation_not_justified.style = "color:red; padding-left:0em; text-indent:-1em; display:none";
	
	deviation_block.appendChild(deviation_justified);
	deviation_block.appendChild(deviation_not_justified);
	
	return deviation_block;
}

function generate_reviewer_deviation_block(checklistItem_id) {
	var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "does the manuscript justify the deviation?", checklistItem_id);
	
	// Reviewer-specific deviation justification block
	var deviation_justified = generate_question_block_with_yes_no_radio_answers("deviation_justified", "is the <b>justification</b> reasonable?", checklistItem_id);
	var deviation_not_justified = generate_question_block_with_yes_no_radio_answers("deviation_not_justified", "is the <b>deviation</b> reasonable?", checklistItem_id);

	// Reviewer-specific messages
	// (No-Yes-Yes)
	var justification_reasonable = generate_message("justification_reasonable:" + checklistItem_id, "red", "&rdsh;&nbsp; Deviation is acceptable. <b>Not</b> grounds for rejection.");
	
	// (No-Yes-No)
	var justification_unreasonable = generate_message("justification_unreasonable:" + checklistItem_id, "red", "&rdsh;&nbsp; Please explain in your review why the justification is unreasonable and suggest possible fixes. This is grounds for rejection unless the fix is trivial.");
	
	// (No-No-Yes)
	var deviation_reasonable = generate_message("deviation_reasonable:" + checklistItem_id, "red", "&rdsh;&nbsp; Please explain in your review how the manuscript should justify the deviation. <b>Not</b> grounds for rejection.");

	// (No-No-No)
	var deviation_unreasonable = generate_message("deviation_unreasonable:" + checklistItem_id, "red", "&rdsh;&nbsp; Please explain in your review why the deviation is unreasonable and suggest possible fixes. This is grounds for rejection.");

	deviation_block.appendChild(deviation_justified);
	deviation_block.appendChild(deviation_not_justified);

	deviation_block.appendChild(justification_reasonable);
	deviation_block.appendChild(justification_unreasonable);
	deviation_block.appendChild(deviation_reasonable);
	deviation_block.appendChild(deviation_unreasonable);
	
	return deviation_block;
}

function convert_standard_checklists_to_html_checklists(standardName, checklistName, checklistText, footnotes){
	var checklists = document.createElement("UL");
	var standard_H3 = document.createElement("B");
	standard_H3.style = "font-size:20px;";
	standard_H3.innerHTML = standardName + ":";
	if (checklistName == "Essential")
		checklists.style = "list-style-type:none; list-style-position:inside; padding-left:3em; text-indent:-2.4em;";
	else
		checklists.style = "list-style-type:none; list-style-position:inside; padding-left:3em; text-indent:-1.3em;";
	
	//checklists.appendChild(standard_H3); //no subheadings
	lines = checklistText.includes("- [ ]") ? checklistText.split("- [ ]") : checklistText.includes("-	") ? checklistText.split("-	") : checklistText.split("");
	var i = 0;

	for(let line of lines){
		line_text = line.trim().replaceAll(" ", "").replaceAll("<br>", "").replaceAll("<br/>", "").replaceAll("\t", "");
		if (line_text != ""){
			i++;
			line_text = line.trim().replace("---", "&mdash;").replace(/<br(\/)?>$/, "");
			checklistItem_id = standardName + "-" + checklistName + ":" + i;
			var checklistItemLI = document.createElement("LI");
			var checklistItemText = document.createElement("span");

			//we dont need this part in the checklist
			if(line_text.includes("complies with all applicable empirical standards"))
				continue;

			if(line_text.includes("footnote"))
				checklistItemText = createTooltip(checklistItemText, line_text, footnotes);
			else
				checklistItemText.innerHTML = "&nbsp;" + line_text;

			if (checklistName == "Essential"){
				var checklistRadioYes = document.createElement("input");
				var checklistRadioNo = document.createElement("input");
				checklistRadioYes.id = "checklist-radio:Yes:" + checklistItem_id;
				checklistRadioNo.id = "checklist-radio:No:" + checklistItem_id;
				checklistRadioYes.name = "checklist-radio:" + checklistItem_id;
				checklistRadioNo.name = "checklist-radio:" + checklistItem_id;
				checklistRadioYes.onclick = hide_deviation_block;
				checklistRadioNo.onclick = show_deviation_block;
				checklistRadioYes.type = "radio";
				checklistRadioNo.type = "radio";
				checklistRadioYes.value = "Yes";
				checklistRadioNo.value = "No";
				
				
				// Generate a deviation block
				var deviation_block;
				if(role == "\"author\"")
					deviation_block = generate_author_deviation_block(checklistItem_id);
				else if(role == "\"reviewer\"")
					deviation_block = generate_reviewer_deviation_block(checklistItem_id);
					
				checklistItemText.appendChild(deviation_block);				
				
				checklistItemLI.appendChild(checklistRadioYes);
				checklistItemLI.appendChild(checklistRadioNo);
				checklistItemLI.appendChild(checklistItemText);
			}
			else{
				var checkboxInput = document.createElement("input");
				checkboxInput.type = "checkbox";
				checkboxInput.id = checklistItem_id;
				checkboxInput.name = checklistItem_id;
				checkboxInput.style = "color:#FFF";
				checkboxInput.value = line_text;
				checklistItemLI.appendChild(checkboxInput);
				checklistItemLI.appendChild(checklistItemText);
			}

			checklists.appendChild(checklistItemLI);
		}
	}
	return checklists;
}

function generateStandardChecklist(){
	standard_keys = getParameterByName('standard');
	role = getParameterByName('role');
	var container = document.createElement("DIV");
	container.id = "container";

	var heading = document.createElement("H1");
	if(role == "\"author\"")
		heading.innerHTML = "Pre-Submission Checklist";
	else if(role == "\"reviewer\"")
		heading.innerHTML = "Reviewer Checklist";
	

	var form = document.createElement("FORM");
	form.id = "checklists";
	form.name = "checklists";

	var EssentialUL = document.createElement("UL");
	var EssentialH2 = document.createElement("H3");
	EssentialH2.style = "padding: 0px; margin: 0px; text-indent: -0.3em;";
	EssentialH2.innerHTML = "Essential";
	EssentialUL.appendChild(EssentialH2);

	var DesirableUL = document.createElement("UL");
	var DesirableH2 = document.createElement("H3");
	DesirableH2.style = "padding: 0px; margin: 0px; text-indent: -0.3em;";
	DesirableH2.innerHTML = "Desirable";
	DesirableUL.appendChild(DesirableH2);

	var ExtraordinaryUL = document.createElement("UL");
	var ExtraordinaryH2 = document.createElement("H3");	
	ExtraordinaryH2.style = "padding: 0px; margin: 0px; text-indent: -0.3em;";
	ExtraordinaryH2.innerHTML = "Extraordinary";
	ExtraordinaryUL.appendChild(ExtraordinaryH2);
	
	if (!standard_keys.includes("\"General Standard\""))
		standard_keys.unshift("\"General Standard\"");
	var i = 0;
    for (let key of standard_keys){
		i++;
		empirical_standard = readSpecificEmpiricalStandards(key);
		var dom = document.createElement("div");
		dom.innerHTML = empirical_standard;
		var standardTag = dom.getElementsByTagName("standard")[0];
		var footnoteTags = dom.getElementsByTagName("footnote");
		var footnotes = {};

		for(let footnoteTag of footnoteTags){
				supTag = footnoteTag.getElementsByTagName("sup")[0];
				footnote_id = supTag.innerText.trim()
				supTag.remove();
				footnotes[footnote_id] = footnoteTag.innerText.trim();
		}

		let standardName = "\"" + standardTag.getAttribute('name') + "\"";
		standardName = standardName.replaceAll("\"", "");
		/*var standardTitle = document.createElement("H2");
		standardTitle.innerHTML = standardName;
		form.appendChild(standardTitle);*/
		var checklistTags = standardTag.getElementsByTagName("checklist");
		for (let checklistTag of checklistTags){
			// Reformat the checklists from MD to HTML
			checklistTag.innerHTML = checklistTag.innerHTML.replaceAll("<sup>", "{sup}").replaceAll("</sup>", "{/sup}");
			checklistText = checklistTag.innerText.replaceAll(">", "").replaceAll("\n", "<br/>");
			checklistText = fromMDtoHTMLformat(checklistText);
			checklists = convert_standard_checklists_to_html_checklists(standardTag.getAttribute('name'), checklistTag.getAttribute('name'), checklistText, footnotes)
			var Yes_No = document.createElement("div");
			var standard_header_rule = document.createElement("div");
			var standard_header_text = document.createElement("span");
			standard_header_rule.className = "standardHeaderRule";
			standard_header_text.className = "standardHeaderText";
			//standard_header_text.innerText = standardName;
			Yes_No.style = "align:center; font-size: 80%; font-weight: bold;";
			Yes_No.innerHTML = "&nbsp;&nbsp;&nbsp;Yes No";
			standard_header_rule.appendChild(standard_header_text);
			if (checklistTag.getAttribute('name') == "Essential") {
				//EssentialUL.appendChild(standard_header_rule);
				if (i == 1)
					EssentialUL.appendChild(Yes_No);
				EssentialUL.appendChild(checklists);
			}
			else if (checklistTag.getAttribute('name') == "Desirable") {
				//DesirableUL.appendChild(standard_header_rule);
				DesirableUL.appendChild(checklists);
			}
			else if (checklistTag.getAttribute('name') == "Extraordinary") {
				//ExtraordinaryUL.appendChild(standard_header_rule);
				ExtraordinaryUL.appendChild(checklists);
			}
		}
	}
	form.appendChild(EssentialUL);
	form.appendChild(DesirableUL);
	form.appendChild(ExtraordinaryUL);

	var submit = document.createElement("input");
	submit.type = "submit";
	submit.id = "checklist_submit";
	submit.name = "checklist_submit";
	//form.appendChild(submit);
	container.appendChild(heading);
	container.appendChild(form);
	
	BR = document.createElement("BR");
	HR = document.createElement("HR");
	container.appendChild(HR);

	var for_more_info = document.createElement("H2");
	for_more_info.innerHTML = "For more information, see:";
	container.appendChild(for_more_info);
	var standards_path = "https://github.com/acmsigsoft/EmpiricalStandards/tree/development/Standards/"
	var UL = document.createElement("UL");
	for (let key of standard_keys){
		key = key.replaceAll("\"", "");
		var LI = document.createElement("LI");
		var LINK = document.createElement("A");
		LINK.innerHTML = key;
		LINK.href = standards_path + key.replaceAll(" ", "") + ".md";
		LINK.target = "_blank";
		LINK.style = "font-size:23px;";
		LI.appendChild(LINK);
		UL.appendChild(LI);
	}
	container.appendChild(UL);

	document.body.appendChild(container);
}