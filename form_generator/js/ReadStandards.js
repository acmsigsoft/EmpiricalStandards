// Variables for the Checklist
let role = getParameterByName('role');

allIntroItems = "";
allMethodItems = "";
allResultsItems = "";
allDiscussionItems = "";
allOtherItems = "";
unrecognizedTags = "";
standardsWithNoTags = "";
standardsWithUntaggedAttributes = "";

//This function reads in the file name and passes it onto the next method
function getParameterByName(paramName, url = window.location.href) {
	var params = location.search && location.search.substr(1).replace(/\+/gi, " ").split("&");
	var paramValues = [];
	var i = 0;
	for (var paramIndex in params) {
		var param = params[paramIndex].split("=");
		if (param[0] === paramName) {
			paramValues[i] = param.length > 1 ? "\"" + unescape(param[1]) + "\"" : "noval";
			i++;
		}
	}
	return paramValues;
}

// sorting all the standards, engineering research and mixed methods always displayed before any other standards regardless of any input
function sortStandards(keys) {
	var sortedKeys = [];
	if (keys.includes("\"Engineering Research\"")) {
		sortedKeys.push("\"Engineering Research\"")
		keys.splice(keys.indexOf("\"Engineering Research\""), 1);
	}
	if (keys.includes("\"Mixed Methods\"")) {
		sortedKeys.push("\"Mixed Methods\"")
		keys.splice(keys.indexOf("\"Mixed Methods\""), 1);
	}
	sortedKeys = sortedKeys.concat(keys.sort());
	return sortedKeys;
}

// Create Role Heading (Pre-Submission Checklist, Reviewer Checklist)
function createRoleHeading() {
	var headingContainer = document.createElement("div");
	var heading = document.createElement("H1");

	if (role == "\"author\"") {
		heading.innerHTML = "Pre-Submission Checklist";
		headingContainer.appendChild(heading);

		var instructions = document.createElement("h3");
		instructions.innerHTML = "Use this form to ensure your manuscript meets the appropriate standards. You can download the results to share with reviewers so they can see where you have addressed each item.";

		headingContainer.appendChild(instructions);

	} else if (role == "\"one-phase-reviewer\"") {
		heading.innerHTML = "Reviewer Checklist";
		headingContainer.appendChild(heading);

	} else if (role == "\"two-phase-reviewer\"") {
		heading.innerHTML = "Reviewer Checklist";
		headingContainer.appendChild(heading);
	}

	return headingContainer;
}

// Create a message showing the loaded configuration
function createLoadConfigMessage() {
	var config = document.createElement("p");
	config.innerHTML = "Customized Configuration Loaded";
	config.className = "hide_display";
	return config;
}

// Save checklist state on visibility change
document.addEventListener("visibilitychange", () => {
	console.log("Storing checklist items.");

	let items = document.querySelectorAll(".item_list li");
	
	if (role == "\"author\""){	
		let locationOption = document.getElementById('location_type');
		let locationType = locationOption.value;	
		localStorage.setItem("location-type", locationType);
	}

	for (let item of items) {
		let storage = {};
		let key = role + "-" + item.className;

		if (role != "\"author\"") {
			if (item.children[0].checked) {
				storage.checked = true;
				localStorage.setItem(key, JSON.stringify(storage));
			} else if (item.children[1].checked) {
				storage.checked = false;
				
				if (item.className == "attention_item") {
					localStorage.setItem(key, JSON.stringify(storage));
					continue;
				}

				let questionBlocks = item.getElementsByClassName('question_block');
				let reasonableYes = questionBlocks[0].getElementsByClassName('deviationRadioYes')[0];
				let reasonableNo = questionBlocks[0].getElementsByClassName('deviationRadioNo')[0];

				if (reasonableYes.checked) {
					storage.reasonable = true;

				} else if (reasonableNo.checked) {
					storage.reasonable = false;

					let types = questionBlocks[1].getElementsByClassName('justification_radio_type');
					if (types[0].checked) {
						storage.deviationType = 1;
					} else if (types[1] && types[1].checked) {
						storage.deviationType = 2;
					} else if (types[2] && types[2].checked) {
						storage.deviationType = 3;
					} else if (types[3] && types[3].checked) {
						storage.deviationType = 4;
					}

					let freeTextBox = item.getElementsByClassName('question_block_free_text')[0];
					let freeTextContent = freeTextBox.getElementsByClassName('free_text_answer')[0];

					if (freeTextContent.value != "") {
						storage.freeText = freeTextContent.value;
					}
				}
				localStorage.setItem(key, JSON.stringify(storage));
			} else if (item.className.includes("Desirable") || item.className.includes("Extraordinary")) {
				if (!item.children[0].checked) {
					localStorage.removeItem(key, "");
				}
			}
		} else {
			let locationBox = item.getElementsByClassName('item_location_textbox')[0];
			let missingButton = item.getElementsByClassName('missing_checkbox')[0];
			let presentCheckBox = item.getElementsByClassName('present_checkbox')[0];
			let state = JSON.parse(localStorage.getItem(key));
			
			if (presentCheckBox.checked) {
				storage.present = true;
				
			} else if (state !== null && state.present) {
				storage.present = false;
			}

			if (locationBox.value != "") {
				storage.location = locationBox.value;

			} else if (missingButton.checked) {
				storage.location = false;
				
				if (item.className.includes("Essential")) {
					let justificationBox = item.getElementsByClassName('justification_location_textbox')[0];
					let justificationButton = item.getElementsByClassName('unjustified_checkbox')[0];

					if (justificationBox.value != "") {
						storage.justified = justificationBox.value;

					} else if (justificationButton.checked) {
						storage.justified = false;
					}
				}
			} else {
				delete storage.location;
				delete storage.justified;
			}
			localStorage.setItem(key, JSON.stringify(storage));
		}
	}
});

// Add the bottom of checklist "For more information, see: "
function createForMoreInfoPart(standardKeys) {
	var moreInfoContainer = document.createElement("DIV");
	var moreInfoH2 = document.createElement("H2");
	moreInfoH2.innerHTML = "For more information, see:";

	var standardsPath = "../docs/standards?standard="
	var moreInfoUL = document.createElement("UL");
	moreInfoUL.className = "more-info-list";

	// Adding Standards as a list with a link to the correct page
	for (let key of standardKeys) {
		key = key.replaceAll("\"", "");
		var standardList = document.createElement("LI");
		var standardLink = document.createElement("A");
		standardLink.innerHTML = key;
		standardLink.href = standardsPath + key.replaceAll(" ", "");
		standardLink.target = "_blank";
		standardLink.className = "standard_links";
		standardList.appendChild(standardLink);
		moreInfoUL.appendChild(standardList);
	}
	moreInfoContainer.appendChild(moreInfoH2);
	moreInfoContainer.appendChild(moreInfoUL);
	return moreInfoContainer;
}

// Functions below are directly accessed by the UI Files
function generateStandardChecklist(file) {
	console.log(file);

	// list of Standards
	standardKeys = getParameterByName('standard');

	// return sorted list of Standards
	standardKeys = sortStandards(standardKeys);

	var wrappers = document.getElementsByClassName('wrapper');
	var wrapper = null;
	if (wrappers.length > 0)
		wrapper = wrappers[1];

	// Create container that holds header, checklist, etc.
	var container = document.createElement("DIV");
	container.id = "container";

	// Create header (Pre-submission Checklist, Reviewer Checklist)
	var heading = createRoleHeading();

	// Create a message showing the loaded configuration
	var config = createLoadConfigMessage();

	// Create Checklist
	var form = createRequirementsChecklist(file);

	// Append header and form to container
	container.appendChild(heading);
	container.appendChild(config);
	container.appendChild(form);

	// Creates line separating from checklist and "for more information, see:"
	HR = document.createElement("HR");
	container.appendChild(HR);

	// Create "For more information, see:"
	var moreInfoContainer = createForMoreInfoPart(standardKeys);
	container.appendChild(moreInfoContainer);

	if (wrapper == null) {
		document.body.appendChild(container);
	} else {
		wrapper.appendChild(container);
	}

	//This function is primarily responsible for controlling the displaying of the deviation blocks in the checklist.
	generateDecisionMessageBlock();

	// Check if the current checklist is being stored
	if (localStorage.getItem(role) !== null) {
		console.log(role + " checklist found in storage");
		populateChecklist();
	} else {
		console.log("Begin storing " + role + " checklist");
		localStorage.setItem(role, "");
	}
}

function viewStandardDescription(standardName) {
	// Obtain all the information for a Standard
	empiricalStandard = readSpecificEmpiricalStandard(standardName);
	var dom = document.createElement("div");
	dom.innerHTML = empiricalStandard;
	var standardTag = dom.getElementsByTagName("standard")[0];
	var descTags = standardTag.getElementsByTagName("desc");
	for (let descTag of descTags) {
		descHTML = descTag.innerHTML.replaceAll(">", "").replaceAll(/\n\s*\n/g, '\n').replaceAll("\n", " ").replaceAll("*", "");
	}
	return descHTML;
}