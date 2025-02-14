// Generate relative path for each standard document
function readSpecificEmpiricalStandard(standardName) {
	var mdFile = new XMLHttpRequest();
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	var dir = dir.substring(0, dir.lastIndexOf('/'));
	var standardFileName = standardName.replaceAll("\"", "").replace(" ", "");
	var standardFilePath = dir + "/docs/standards/" + standardFileName + ".md";
	var empiricalStandard = "";
	mdFile.open("GET", standardFilePath, false);
	mdFile.onreadystatechange = function () {
		if (mdFile.readyState === 4) {
			if (mdFile.status === 200 || mdFile.status == 0) {
				empiricalStandard = mdFile.responseText;
			} else {
				alert("Can't read " + standardFilePath);
			}
		} else {
			alert("Can't read " + standardFilePath);
		}
	}
	mdFile.send(null);
	return empiricalStandard;
}

// Load the table file for the customization of the checklist
function readSpecificEmpiricalStandardTable(standardName) {
	//loadConfiguration();
	var mdFile = new XMLHttpRequest();
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	var dir = dir.substring(0, dir.lastIndexOf('/'));
	var standardFileName = standardName.replaceAll("\"", "").replace(" ", "");
	console.log(standardFileName);
	var standardFilePath = dir + "/docs/attribute_customizations/" + standardFileName + "_table.md";
	console.log(standardFilePath);
	var empiricalStandard = "";
	mdFile.open("GET", standardFilePath, false);
	mdFile.onreadystatechange = function () {
		if (mdFile.readyState === 4) {
			if (mdFile.status === 200 || mdFile.status == 0) {
				empiricalStandard = mdFile.responseText;
			} else {
				alert("Can't read " + standardFilePath);
			}
		} else {
			alert("Can't read " + standardFilePath);
		}
	}
	mdFile.send(null);
	return empiricalStandard;
}