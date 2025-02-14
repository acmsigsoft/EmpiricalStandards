// Generate relative path for each standard document
function readSpecificEmpiricalStandard(standard_name) {
	var mdFile = new XMLHttpRequest();
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	var dir = dir.substring(0, dir.lastIndexOf('/'));
	var standard_file_name = standard_name.replaceAll("\"", "").replace(" ", "");
	var standard_file_path = dir + "/docs/standards/" + standard_file_name + ".md";
	var empirical_standard = "";
	mdFile.open("GET", standard_file_path, false);
	mdFile.onreadystatechange = function () {
		if (mdFile.readyState === 4) {
			if (mdFile.status === 200 || mdFile.status == 0) {
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
function readSpecificEmpiricalStandardTable(standard_name) {
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
	mdFile.onreadystatechange = function () {
		if (mdFile.readyState === 4) {
			if (mdFile.status === 200 || mdFile.status == 0) {
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