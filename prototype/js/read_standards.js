function getParameterByName(name, url = window.location.href){
    var a = location.search&&location.search.substr(1).replace(/\+/gi," ").split("&");
    for (var i in a){
        var s = a[i].split("=");
        a[i]  = a[unescape(s[0])] = "\"" + unescape(s[1]) + "\"";
    }
    return a;
}

function readEmpiricalStandards(){
    var mdFile = new XMLHttpRequest();
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
	var empirical_standards = "";
    mdFile.open("GET", dir + "/md/empiricalStandards.md", false);
    keys = getParameterByName('standard');
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

function convert_checklists_to_checkboxes(checklistText){
	var checkboxes = document.createElement("UL");
	
	lines = checklistText.split("<br/>");
	for(let line of lines){
		if (line.trim() != ""){
			var checkbox = document.createElement("input");
			var checkboxLabel = document.createElement("label");
			checkbox.setAttribute("type", "checkbox");
			checkbox.setAttribute("name", "check");
			checkbox.setAttribute("style", "color:#FFF");
			checkbox.setAttribute("value", line.trim());
			checkboxLabel.setAttribute("for", "check");
			checkboxLabel.innerHTML = line.trim() + "<br/>";
			checkboxes.appendChild(checkbox);
			checkboxes.appendChild(checkboxLabel);
		}
	}
	
	return checkboxes;
}
function generateStandardChecklist(){
    empirical_standards = readEmpiricalStandards()
	var dom = document.createElement("div");
	dom.innerHTML = empirical_standards;
	var standardTags = dom.getElementsByTagName("standard");
	var form = document.createElement("FORM");
	form.setAttribute("id", "checklists");
	form.setAttribute("name", "standards");
	for (let standardTag of standardTags){
		let standardName = "\"" + standardTag.getAttribute('name') + "\"";
		if (keys.includes(standardName)){
			var standardTitle = document.createElement("H2");
			standardTitle.innerHTML = standardName.replaceAll("\"", "");
			form.appendChild(standardTitle);
			var checklistTags = standardTag.getElementsByTagName("checklist");

			for (let checklistTag of checklistTags){
				var checklistTitleUL = document.createElement("UL");
				var checklistTitle = document.createElement("H3");
				checklistTitle.innerHTML = checklistTag.getAttribute('name')
				checklistTitleUL.appendChild(checklistTitle);
				
				// Reformat the checklists
				checklistText = checklistTag.innerText.replaceAll("[ ]", "").
													   replaceAll(">", "").
													   replaceAll("\n\n", "<br/>").replaceAll("\n- ", "<LI>");
				
				checkboxes = convert_checklists_to_checkboxes(checklistText)
				checklistTitleUL.appendChild(checkboxes);
				form.appendChild(checklistTitleUL);
			}
			document.body.appendChild(form);
			//document.getElementById("fromFile").innerHTML = standardTag.innerHTML;
		}
	}
}