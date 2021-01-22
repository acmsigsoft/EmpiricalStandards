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

function convert_checklists_to_checkboxes(standardName, checklistName, checklistText){
	var checkboxes = document.createElement("UL");
	checkboxes.style = "list-style-type:none;list-style-position: inside; text-indent: -1.5em;";
	lines = checklistText.split("<br/>");
	var i = 0;
	for(let line of lines){
		if (line.startsWith("-")){
			i++;
			line_text = line.trim().replace("- ", "").replace("-\t", " ").replace("---", "&mdash;").replaceAll("[[OR]]", "<br/>OR");//.replace(/\^[0-9]+\^/, "");
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
			checkboxText.innerHTML = line_text;
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
    for (let key of keys){
		empirical_standard = readSpecificEmpiricalStandards(key);
		var dom = document.createElement("div");
		dom.innerHTML = empirical_standard;
		var standardTag = dom.getElementsByTagName("standard")[0];
		let standardName = "\"" + standardTag.getAttribute('name') + "\"";
		var standardTitle = document.createElement("H2");
		standardTitle.innerHTML = standardName.replaceAll("\"", "");
		form.appendChild(standardTitle);
		var checklistTags = standardTag.getElementsByTagName("checklist");
		for (let checklistTag of checklistTags){
			var checklistTitleUL = document.createElement("UL");
			var checklistTitle = document.createElement("H3");
			checklistTitle.innerHTML = checklistTag.getAttribute('name')
			checklistTitleUL.appendChild(checklistTitle);
			
			// Reformat the checklists from MD to HTML
			checklistText = checklistTag.innerText.replaceAll(">", "").
												   replaceAll(/\\\n\s*OR/ig, "[[OR]]").
												   replaceAll("\n", "<br/>");
												   
			checkboxes = convert_checklists_to_checkboxes(standardTag.getAttribute('name'), checklistTag.getAttribute('name'), checklistText)
			checklistTitleUL.appendChild(checkboxes);
			form.appendChild(checklistTitleUL);
		}
	}
	var submit = document.createElement("input");
	submit.type = "submit";
	submit.id = "checklist_submit";
	submit.name = "checklist_submit";
	form.appendChild(submit);
	document.body.appendChild(form);
}