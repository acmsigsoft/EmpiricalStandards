function getParameterByName(name, url = window.location.href){
    var a = location.search&&location.search.substr(1).replace(/\+/gi," ").split("&");
    for (var i in a){
        var s = a[i].split("=");
        a[i]  = a[unescape(s[0])] = "\"" + unescape(s[1]) + "\"";
    }
    return a;
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
	var standard_file_path = "/EmpiricalStandards/Standards/" + standard_file_name + ".md";
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

function createTooltip(line_text, footnotes){
	footnote_id = line_text.match(/\{sup\}(.*)\{\/sup\}/)[1];
	footnote_text = footnotes[footnote_id];
	var tooltip = document.createElement("sup");
	tooltip.className = "tooltip";
	tooltip.innerHTML = "<b>" + footnote_id.match(/\[([0-9]+)\]/)[1] + "</b>";
	var tooltipText = document.createElement("span");
	tooltipText.className = "tooltiptext";
	tooltipText.innerHTML = footnote_text;
	tooltip.appendChild(tooltipText);
	return tooltip;
}

function fromMDtoHTMLformat(text){
	if (text.match(/\*\*(.*?)\*\*/g) != null)
		text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
	if (text.match(/\*(.*?)\*/g) != null)
		text = text.replace(/\*(.*?)\*/g, "<i>$1</i>");
	
	return text;
}

function convert_checklists_to_checkboxes(standardName, checklistName, checklistText, footnotes){
	var checkboxes = document.createElement("UL");
	var standard_H3 = document.createElement("B");
	standard_H3.style = "font-size:20px;";
	standard_H3.innerHTML = standardName + ":";
	checkboxes.style = "list-style-type:none; list-style-position: inside; text-indent: -1.5em;";
	//checkboxes.appendChild(standard_H3); //no subheadings
	lines = checklistText.includes("- [ ]") ? checklistText.split("- [ ]") : checklistText.includes("-	") ? checklistText.split("-	") : checklistText.split("");
	var i = 0;

	for(let line of lines){
		line_text = line.trim().replaceAll("<br/>", "").replaceAll("\t", "");
		if (line_text != ""){
			i++;
			line_text = line.trim().replace("---", "&mdash;");
			checkbox_id = standardName + "-" + checklistName + ":" + i;
			var checkboxLI = document.createElement("LI");
			var checkboxInput = document.createElement("input");
			var checkboxLabel = document.createElement("label");
			var checkboxText = document.createElement("span");
			checkboxInput.type = "checkbox";
			checkboxInput.id = checkbox_id;
			checkboxInput.name = checkbox_id;
			checkboxInput.style = "color:#FFF";
			checkboxInput.value = line_text;
			checkboxLabel.htmlFor = checkbox_id;

			//we dont need this part in the checklist
			if(line_text.includes("complies with all applicable empirical standards")){
				continue;
			}

			if(line_text.includes("footnote")){
				var tooltip = createTooltip(line_text, footnotes);
				checkboxText.innerHTML = "&nbsp;" + line_text.replace(/\{sup\}(.*)\{\/sup\}/, "");
				checkboxText.innerHTML = checkboxText.innerHTML.replace("<br>", "");
				checkboxText.appendChild(tooltip);
			}
			else{
				checkboxText.innerHTML = "&nbsp;" + line_text;
			}
			checkboxLabel.appendChild(checkboxText);
			checkboxLI.appendChild(checkboxInput);
			checkboxLI.appendChild(checkboxLabel);
			checkboxes.appendChild(checkboxLI);
		}
	}
	return checkboxes;
}

function generateStandardChecklist(){
	keys = getParameterByName('standard');
	var form = document.createElement("FORM");
	form.id = "checklists";
	form.name = "checklists";

	var EssentialUL = document.createElement("UL");
	var EssentialH2 = document.createElement("H2");
	EssentialH2.style = "padding: 0px; margin: 0px; text-indent: -0.3em;";
	EssentialH2.innerHTML = "Essential";
	EssentialUL.appendChild(EssentialH2);

	var DesirableUL = document.createElement("UL");
	var DesirableH2 = document.createElement("H2");
	DesirableH2.style = "padding: 0px; margin: 0px; text-indent: -0.3em;";
	DesirableH2.innerHTML = "Desirable";
	DesirableUL.appendChild(DesirableH2);

	var ExtraordinaryUL = document.createElement("UL");
	var ExtraordinaryH2 = document.createElement("H2");	
	ExtraordinaryH2.style = "padding: 0px; margin: 0px; text-indent: -0.3em;";
	ExtraordinaryH2.innerHTML = "Extraordinary";
	ExtraordinaryUL.appendChild(ExtraordinaryH2);
	
	if (!keys.includes("\"General Standard\""))
		keys.unshift("\"General Standard\"");
	
    for (let key of keys){
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
		/*var standardTitle = document.createElement("H2");
		standardTitle.innerHTML = standardName.replaceAll("\"", "");
		form.appendChild(standardTitle);*/
		var checklistTags = standardTag.getElementsByTagName("checklist");
		
		for (let checklistTag of checklistTags){
			// Reformat the checklists from MD to HTML
			checklistTag.innerHTML = checklistTag.innerHTML.replaceAll("<sup>", "{sup}").replaceAll("</sup>", "{/sup}");
			checklistText = checklistTag.innerText.replaceAll(">", "").replaceAll("\n", "<br/>");
			checklistText = fromMDtoHTMLformat(checklistText);
			checkboxes = convert_checklists_to_checkboxes(standardTag.getAttribute('name'), checklistTag.getAttribute('name'), checklistText, footnotes)
			
			if (checklistTag.getAttribute('name') == "Essential")
				EssentialUL.appendChild(checkboxes);
			else if (checklistTag.getAttribute('name') == "Desirable")
				DesirableUL.appendChild(checkboxes);
			else if (checklistTag.getAttribute('name') == "Extraordinary")
				ExtraordinaryUL.appendChild(checkboxes);
		}
	}
	form.appendChild(EssentialUL);
	form.appendChild(DesirableUL);
	form.appendChild(ExtraordinaryUL);

	var submit = document.createElement("input");
	submit.type = "submit";
	submit.id = "checklist_submit";
	submit.name = "checklist_submit";
	form.appendChild(submit);
	document.body.appendChild(form);
}