var dataStructure = new HashMap();
var footnotes = {};
var imradOrder = [];

function createRequirementsChecklist(file) {

	// Create Element "FORM"
	var form = document.createElement("FORM");
	form.id = "checklists";
	form.name = "checklists";

	let clearButton = createClearChecklistButton();
	form.appendChild(clearButton);

	// create Header for Essential Requirements with an unordered list
	var EssentialUL = createRequirementsHeadingWithUL("Essential");

	// create Header for Desirable Requirements with an unordered list
	var DesirableUL = createRequirementsHeadingWithUL("Desirable");

	// create Header for Extraordinary Requirements with an unordered list
	var ExtraordinaryUL = createRequirementsHeadingWithUL("Extraordinary");

	if (role != "\"author\"") {
		DesirableUL.className = "hide_display";
		ExtraordinaryUL.className = "hide_display";
	}

	// unshift() method adds new items to the beginning of an array, and returns the new length
	if (!standardKeys.includes("\"General Standard\"")) {
		standardKeys.unshift("\"General Standard\"");
	}

	createRequirementsChecklistTable(file);

	let standardsList = [];

	var i = 0;
	for (let key of standardKeys) {
		i++;

		// Obtain all the information for a Standard
		empiricalStandard = readSpecificEmpiricalStandard(key);

		var dom = document.createElement("div");
		dom.innerHTML = empiricalStandard;
		var standardTag = dom.getElementsByTagName("standard")[0];

		// collect all the footnotes
		collectFootnotes(dom, standardTag);

		let standardName = "\"" + standardTag.getAttribute('name') + "\"";
		standardName = standardName.replaceAll("\"", "");
		standardsList.push(standardName.replaceAll(/\s/g, ""));

		var checklistTags = standardTag.getElementsByTagName("checklist");
		for (let checklistTag of checklistTags) {

			let checklistType = checklistTag.getAttribute('name');

			// dealing with footnotes
			checklistHTML = checklistTag.innerHTML.replaceAll("<sup>", "<sup>" + standardName + "--footnote--") // To make footnotes belong to their standards 

			// Add all information for "allIntroItems", etc.
			if (checklistType == "Essential") {
				separateEssentialAttributesByIMRaD(standardTag.getAttribute('name'), checklistHTML);
			}

			// Reformat the checklists from MD to HTML
			var checklistLabels = document.createElement("div");
			checklistLabels.className = "checklist_labels"

			if (role == "\"author\"") {
				checklistLabels.classList.add("author_labels");

				var attributeLabel = document.createElement("span");
				attributeLabel.innerHTML = "Attribute";
				attributeLabel.className = "attribute_label";

				var locationLabel = document.createElement("span");
				var locationTypesDropdown = document.createElement("select");
				locationTypesDropdown.id = 'location_type';

				var locationTypes = [
					{ value: 'line_no', text: 'Line Number(s)' },
					{ value: 'page_no', text: 'Page #, Line #' },
					{ value: 'page_with_paragraph_no', text: 'Page #, Paragraph #' },
					{ value: 'section_no', text: 'Section #, Line #' },
					{ value: 'section_with_paragraph_no', text: 'Section #, Paragraph #' },
				];

				locationTypes.forEach(function (option) {
					var location = document.createElement('option');
					location.value = option.value;
					location.text = option.text;
					locationTypesDropdown.appendChild(location);
				});

				locationTypesDropdown.selectedIndex = 0;
				locationLabel.className = "location_container";
				locationLabel.appendChild(locationTypesDropdown);

				var missingLabel = document.createElement("span");
				missingLabel.innerHTML = "N/A";

				checklistLabels.appendChild(attributeLabel);
				checklistLabels.appendChild(locationLabel);
				checklistLabels.appendChild(missingLabel);
			} else {
				checklistLabels.innerHTML = "&nbsp;yes no";
			}

			if (checklistType == "Essential") {
				if (i == 1) {
					EssentialUL.appendChild(checklistLabels);
				}
			}
			else if (checklistType == "Desirable") {

				// Change from Markdown to HTML elements
				checklists = prepareToConvertMDToHTML(standardTag.getAttribute('name'), checklistTag.getAttribute('name'), checklistHTML, footnotes);
				DesirableUL.appendChild(checklists);
			}
			else if (checklistType == "Extraordinary") {

				// Change from Markdown to HTML elements
				checklists = prepareToConvertMDToHTML(standardTag.getAttribute('name'), checklistTag.getAttribute('name'), checklistHTML, footnotes);
				ExtraordinaryUL.appendChild(checklists);
			}
		}
	}

	essentialIMRaDItemsInnerHTML = "" + allIntroItems + "\n_hr_" + allMethodItems + "\n_hr_" + allResultsItems + "\n_hr_" + allDiscussionItems + "\n_hr_" + allOtherItems;

	essentialIMRaDItemsInnerHTML = essentialIMRaDItemsInnerHTML.replaceAll("\n_hr_", "").length > 0 ? essentialIMRaDItemsInnerHTML : "";

	// Notify testers in the case of unrecognized tags, no tags at all, or untagged attributes
	notifyTesters();

	// Change from Markdown to HTML elements
	checklists = prepareToConvertMDToHTML(standardsList, 'Essential', essentialIMRaDItemsInnerHTML, footnotes);
	EssentialUL.appendChild(checklists);

	// Add Essential Attributes to the form
	form.appendChild(EssentialUL);

	// Create download button
	var download = createDownloadButton();

	var errorWarning = document.createElement("div");
	errorWarning.className = "error_warning attention hide_display";
	errorWarning.innerHTML = "Some required items are missing.";

	var downloadTest = createDownloadConfigurationButton();

	// (All 'Yes' -> accept manuscript)
	var decisionMessage = generateMessage("decision_msg", (role != "\"author\"" ? "The manuscript meets all essential criteria: ACCEPT." : ""), "message_style_4");
	form.appendChild(decisionMessage);

	if (role == "\"author\"") {
		// (At least one 'No-No-No' -> reject manuscript)
		var deviationUnreasonable = generateMessage("deviation_unreasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable.", "message_style_4");
		form.appendChild(deviationUnreasonable);
		// (At least one 'No-No-Yes' -> explain fix)
		var deviationReasonable = generateMessage("deviation_reasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable. Please give specific suggestions for how each deviation can be addressed.", "message_style_4");
		form.appendChild(deviationReasonable);

	} else if (role == "\"one-phase-reviewer\"") {
		// (At least one 'No-No-No' -> reject manuscript)
		var deviationUnreasonable = generateMessage("deviation_unreasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable.", "message_style_4");
		form.appendChild(deviationUnreasonable);
		// (At least one 'No-No-Yes' -> explain fix)
		var deviationReasonable = generateMessage("deviation_reasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable. Please give specific suggestions for how each deviation can be addressed.", "message_style_4");
		form.appendChild(deviationReasonable);

	} else if (role == "\"two-phase-reviewer\"") {
		// (At least one 'No-No-No' -> reject manuscript)
		var deviationUnreasonable = generateMessage("deviation_unreasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable.", 2, 0);
		form.appendChild(deviationUnreasonable);

		// (At least one 'No-No-Yes' -> explain fix)
		var deviationReasonable = generateMessage("deviation_reasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable. Please give specific suggestions for how each deviation can be addressed.", "message_style_4");
		form.appendChild(deviationReasonable);
	}

	// Add Desirable and Extraordinary Unordered List to Form
	form.appendChild(DesirableUL);
	form.appendChild(ExtraordinaryUL);
	form.appendChild(download);
	form.appendChild(errorWarning);

	return form;
}

function createRequirementsChecklistTable(file) {
	// Create Element "FORM"
	var form = document.createElement("FORM");
	form.id = "checklists";
	form.name = "checklists";

	// unshift() method adds new items to the beginning of an array, and returns the new length
	if (!standardKeys.includes("\"General Standard\"")) {
		standardKeys.unshift("\"General Standard\"");
	}

	if (file == null) {
		var i = 0;
		const essentialDataStructure = new HashMap();
		const desirableDataStructure = new HashMap();
		const extraordinaryDataStructure = new HashMap();
		for (let key of standardKeys) {
			i++;
			// Obtain all the information for a Standard
			empiricalStandard1 = readSpecificEmpiricalStandardTable(key);
			// Convert Markdown to HTML
			var htmlTable = convertMarkdownToHTML(empiricalStandard1);

			// Get a reference to the container element where you want to display the table
			var dom1 = document.createElement("div");
			// Append the HTML table to the container
			dom1.innerHTML = htmlTable;

			var checklists1 = dom1.getElementsByTagName('checklist')[2];
			for (let checks of checklists1.getElementsByTagName('row')) {
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
				const key = encodeKey(content1);
				dataStructure.set(key, rowData)
			}
		}
	} else {
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

// create Header with Unordered List (Essential, Desirable, Extraordinary)
function createRequirementsHeadingWithUL(title) {
	var heading = document.createElement("H3");
	var unorderedList = document.createElement("UL");

	heading.className = "checklist_heading";
	heading.innerHTML = title;
	unorderedList.id = title;
	unorderedList.appendChild(heading);

	return unorderedList;
}

function createDownloadConfigurationButton() {
	var download = document.createElement("button");
	download.innerHTML = "Download_Configuration";
	download.id = "checklist_download_config";
	download.name = "checklist_download_config";
	download.disabled = false;
	download.onclick = saveConfig;
	return download;
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

// Notify testers in the case of unrecognized tags, no tags at all, or untagged attributes
function notifyTesters() {
	tester = getParameterByName('y')[0] == 'noval' ? true : false;
	if (tester) {
		alertMessage = "";
		if (unrecognizedTags != "") {
			alertMessage += "Warning — unrecognized tag(s):\n" + unrecognizedTags;
		}
		if (standardsWithNoTags != "") {
			alertMessage += "\nWarning — there are no tags at:\n" + standardsWithNoTags;
		}
		if (standardsWithUntaggedAttributes != "") {
			alertMessage += "\nWarning — there are untagged attributes at:\n" + standardsWithUntaggedAttributes;
		}
		if (alertMessage != "") {
			alert(alertMessage);
		}
	}
}

// Create download button to download text file
function createDownloadButton() {
	var download = document.createElement("button");
	download.innerHTML = "Download";
	download.id = "checklist_download";
	download.name = "checklist_download";

	if (role == "\"author\"") {
		download.onclick = saveFile;
	} else {
		download.addEventListener("click", checkFormValidity, false);
	}
	return download;
}

// Prepare unordered lists
function prepareToConvertMDToHTML(standardTagName, checklistTagName, checklistInnerHTML, footnotes) {

	// superscript tags
	checklistInnerHTML = checklistInnerHTML.replaceAll("<sup>", "{sup}").replaceAll("</sup>", "{/sup}");

	var tempDivElement = document.createElement("div");
	tempDivElement.innerHTML = checklistInnerHTML;
	checklistInnerText = tempDivElement.innerText;

	checklistText = checklistInnerText.replaceAll(">", "").replaceAll(/\n\s*\n/g, '\n').replaceAll("\n", "<br/>");

	// Transform Markdown tags to HTMLtags
	checklistText = convertMDTagsToHTMLTags(checklistText);

	// Standard Files - Change from docs to link, change from .md file to nothing
	checklistText = checklistText.replaceAll('https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=').replaceAll('.md', '');

	// Supplement Files - Change from docs to link, change from .md file to nothing
	checklistText = checklistText.replaceAll('https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=').replaceAll('.md', '');

	// Convert Markdown Checklists to HTML checklists
	checklists = convertMDStandardChecklistsToHTMLStandardChecklists(standardTagName, checklistTagName, checklistText, footnotes)

	return checklists;
}

// Create a button for clearing the current checklist
function createClearChecklistButton() {
	let clearButton = document.createElement("input");
	clearButton.type = "reset";
	clearButton.value = "Clear checklist";
	clearButton.id = "clear_checklist";

	clearButton.addEventListener("click", clearChecklist, false);

	return clearButton;
}

// Clear the current checklist
function clearChecklist(event) {
	let clearConfirm = confirm("This will erase all progress on the current checklist. Are you sure?");

	if (!clearConfirm) {
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

		deviationBoxes = document.getElementsByClassName("question_block");

		// If author, display primary location boxes
		if (role == "\"author\"") {
			primaryLocations = document.getElementsByClassName("item_location_textbox");

			for (let locationBox of primaryLocations) {
				locationBox.style.visibility = "visible";
			}
		} else {
			// If reviewer, hide free text boxes
			textBoxes = document.getElementsByClassName("question_block_free_Text");
			
			for (let textBox of textBoxes) {
				textBox.style.display = "none";
			}
		}
		
		// Hide deviation boxes
		for (let deviationBox of deviationBoxes) {
			deviationBox.style.display = "none";
		}
	}
}


function separateEssentialAttributesByIMRaD(standardName, checklistHTML) {
	const IMRaDTags = ["<intro>", "<method>", "<results>", "<discussion>", "<other>"]; // Known IMRaD tags
	let imradCounts = [];

	// Attributes of each IMRaD tag
	var intro = checklistHTML.includes("<intro>") ? checklistHTML.match(/<intro>([\s\S]*?)\n\s*<\/?\w+>/i)[1] : "";
	var method = checklistHTML.includes("<method>") ? checklistHTML.match(/<method>([\s\S]*?)\n\s*<\/?\w+>/i)[1] : "";
	var results = checklistHTML.includes("<results>") ? checklistHTML.match(/<results>([\s\S]*?)\n\s*<\/?\w+>/i)[1] : "";
	var discussion = checklistHTML.includes("<discussion>") ? checklistHTML.match(/<discussion>([\s\S]*?)\n\s*<\/?\w+>/i)[1] : "";
	var other = checklistHTML.includes("<other>") ? checklistHTML.match(/<other>([\s\S]*?)\n\s*<\/?\w+>/i)[1] : "";

	tags = checklistHTML.match(/\n\s*<\w+>/g);
	// No tags at all => treat as '<other>'
	if (tags === null) {
		other = checklistHTML;
		standardsWithNoTags += "[" + standardName + "]\n";
	}
	// Unrecognized tags => treat as '<other>'
	else for (const tag of tags) {
		if (!IMRaDTags.includes(tag.trim())) {
			unrecognizedTags += "[" + tag.trim() + " @ " + standardName + "]\n";
			var unrecognized = checklistHTML.match(new RegExp(tag.trim() + "([\\s\\S]*?)<\\/?\\w+>", "i"))[1];
			other = unrecognized + other;
		}
	}

	// Attributes that do not belong under any tag => treat as '<other>'
	untagged = checklistHTML.match(/^[\s\r\n]+-([\s\S]*?)\n(<\w+>)/i);
	if (untagged != null) {
		other = "-" + untagged[1] + other;
		standardsWithUntaggedAttributes += "[" + standardName + "]\n";
	}

	// Count IMRaD items
	let introItems = intro.match(/(\[\s\])/img);
	let introCount = introItems != null ? imradCounts.push(introItems.length) : imradCounts.push(0);

	let methodItems = method.match(/(\[\s\])/img);
	let methodCount = methodItems != null ? imradCounts.push(methodItems.length) : imradCounts.push(0);

	let resultsItems = results.match(/(\[\s\])/img);
	let resultsCount = resultsItems != null ? imradCounts.push(resultsItems.length) : imradCounts.push(0);

	let discussionItems = discussion.match(/(\[\s\])/img);
	let discussionCount = discussionItems != null ? imradCounts.push(discussionItems.length) : imradCounts.push(0);

	let otherItems = other.match(/(\[\s\])/img);
	let otherCount = otherItems != null ? imradCounts.push(otherItems.length) : imradCounts.push(0);

	imradOrder.push(imradCounts);

	// Combine IMRaD tags of all standards
	allIntroItems = allIntroItems + intro;
	allMethodItems = allMethodItems + method;
	allResultsItems = allResultsItems + results;
	allDiscussionItems = allDiscussionItems + discussion;
	allOtherItems = allOtherItems + other;
}

// convert from Markdown to HTML checklists
function convertMDStandardChecklistsToHTMLStandardChecklists(standardName, checklistName, checklistText, footnotes) {
	
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
	
	var imradCountIndex = 0;
	var attributeNumbers = Array(standardName.length).fill(0);
	console.log(attributeNumbers);

	// IMRaD line break flag is set to equal false
	var IMRaDLineBreak = false;

	for(let line of lines){

		// removes whitespace, replace all line breaks (<br> </br>) and tab character(\t)
		lineText = line.trim().replaceAll(" ", "").replaceAll("<br>", "").replaceAll("<br/>", "").replaceAll("\t", "");
		
		if (lineText != ""){
			i++;

			lineText = line.trim().replace("---", "&mdash;");

			// Trim and remove line breaks in markdown text
			while (lineText.match(/<br(\/)?>$/)) {
				lineText = lineText.replace(/<br(\/)?>$/, "");
				lineText = lineText.trim();
			}
			
			var checklistItemLI = document.createElement("LI");
			var checklistItemText = document.createElement("span");
			
			if (role == "\"author\"") {
				checklistItemLI.classList.add("author_list_item");
				checklistItemText.classList.add("item_text");
			}
			
			if(IMRaDLineBreak) {
				checklists.appendChild(document.createElement("br"));
			}

			// !!!!!!!!!!!!!!!! we dont need this part in the checklist
			if(lineText.includes("complies with all applicable empirical standards")) {
				continue;
			}
			
			// if lineText includes a specific regex set to true ( line break with horizontal rule)
			IMRaDLineBreak = lineText.includes('<br\/>_hr_') ? true : false;

			// Replace line break and horizontal rule with empty string
			lineText = lineText.replace(/(<br\/>_hr_)+/g, '');
			
			let checklistItemClass = "";
			var checklistItemID = "";
			
			// Determine which standard to use for the current essential item
			if (checklistName == "Essential") {									
				let imradCounts = imradOrder[imradCountIndex];
				let tag_count = imradCounts[0];
				
				let found = false;
				let num = attributeNumbers[imradCountIndex];
				
				// Find the current count
				while (found == false) {
					if (tag_count == 0) {
						imradCounts.shift();
						imradOrder[imradCountIndex] = imradCounts;

						// If this isn't the last array of counts, move to the next one
						if (imradCountIndex + 1 < standardName.length) {
							imradCountIndex++;
							
							imradCounts = imradOrder[imradCountIndex];
							tag_count = imradCounts[0];
							num = attributeNumbers[imradCountIndex];
							
						// If this is the last array of counts, reset to the first
						} else {
							imradCountIndex = 0;
							
							imradCounts = imradOrder[imradCountIndex];
							tag_count = imradCounts[0];
							num = attributeNumbers[imradCountIndex];
						}
					} else {
						found = true;
						num++;
						attributeNumbers[imradCountIndex] = num;
					}
				}

				checklistItemClass = standardName[imradCountIndex] + "-" + checklistName + ":" + num;
				tag_count--;
				imradCounts[0] = tag_count;
				imradOrder[imradCountIndex] = imradCounts;

				checklistItemID = "-" + checklistName + ":" + i;
			} else {
				checklistItemClass = standardName.replaceAll(/\s/g, "") + "-" + checklistName + ":" + i;
				checklistItemID = standardName + "-" + checklistName + ":" + i;
			}
			
			checklistItemLI.classList.add(checklistItemClass);

			// Change the text to the string held in lineText
			checklistItemLI.setAttribute("text", lineText);
			
			console.log("Line text: " + lineText);

			if(lineText.replaceAll("<br/><br>", "") == "") {
				continue;
			}
			
			if(lineText.includes("footnote")) {
				checklistItemText = createTooltip(checklistItemText, lineText, footnotes);
			} else {
				checklistItemText.innerHTML = "&nbsp;" + lineText;
			}

			//locate the current checklist into the table
			data = dataStructure.get(encodeKey(lineText));

			if (checklistName == "Essential"){
				// create Input Elements
				
				var userInputYes;
				var userInputNo;
				var location_container;
				var missing_container;
				
				if (role == "\"author\"") {
					
					location_container = document.createElement("span");
					location_container.className = "location_container";
					
					userInputYes = generateLocationTextbox("item_location_textbox", checklistItemID);
					userInputYes.onfocus = hideDeviationBlockShowLocationTextbox;
					
					missing_container = document.createElement("span");
					
					userInputNo = document.createElement("input");
					userInputNo.type = "checkbox";
					userInputNo.id = "missing_checkbox:" + checklistItemID;
					userInputNo.className = "missing_checkbox";
					userInputNo.name = checklistItemID;
					userInputNo.onclick = showHideLocationTextbox;
					
				} else {
					userInputYes = document.createElement("input");
					userInputYes.id = "checklist-radio:Yes:" + checklistItemID;
					userInputYes.className = "checklistRadioYes";
					userInputYes.name = "checklist-radio:" + checklistItemID;
					
					// in the case of YES, hide the deviation block
					userInputYes.onclick = hideDeviationBlockShowLocationTextbox;
					
					userInputYes.type = "radio";
					userInputYes.value = "yes";
					userInputYes.checked = tester;
					
					userInputNo = document.createElement("input");
					userInputNo.id = "checklist-radio:No:" + checklistItemID;
					userInputNo.className = "checklistRadioNo";
					userInputNo.name = "checklist-radio:" + checklistItemID;
					userInputNo.onclick = showDeviationBlockHideLocationTextbox;
					userInputNo.type = "radio";
					userInputNo.value = "no";
				}

				// Generate a deviation block
				var deviation_block;
				if(role == "\"author\"") {
					deviation_block = generateAuthorDeviationBlock(checklistItemID);
					
					checklistItemLI.appendChild(checklistItemText);
					
					location_container.appendChild(userInputYes);
					missing_container.appendChild(userInputNo);
					
					checklistItemLI.appendChild(location_container);
					checklistItemLI.appendChild(missing_container);
					
					checklistItemLI.appendChild(deviation_block);
					
				} else if(role == "\"one-phase-reviewer\""){
					
					if(data){
						deviation_block = generateOnePhaseReviewerDeviationBlock(checklistItemID,data);
					}else{
						deviation_block = generateOnePhaseReviewerDeviationBlock(checklistItemID,null);
					}
					
					checklistItemLI.appendChild(userInputYes);
					checklistItemLI.appendChild(userInputNo);
					
					checklistItemText.appendChild(deviation_block);
					checklistItemLI.appendChild(checklistItemText);
					
				}
				else if(role == "\"two-phase-reviewer\""){
					if(data){
						deviation_block = generateTwoPhaseReviewerDeviationBlock(checklistItemID,data);
					}else{
						deviation_block = generateTwoPhaseReviewerDeviationBlock(checklistItemID,null);
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

					userInputYes = generateLocationTextbox("item_location_textbox", checklistItemID);
					
					var userInputNo;
					missing_container = document.createElement("span");
					
					userInputNo = document.createElement("input");
					userInputNo.type = "checkbox";
					userInputNo.id = "missing_checkbox:" + checklistItemID;
					userInputNo.className = "missing_checkbox";
					userInputNo.name = checklistItemID;
					userInputNo.onclick = showHideLocationTextbox;
					userInputNo.value = lineText;
				
					checklistItemLI.appendChild(checklistItemText);
					
					location_container.appendChild(userInputYes);
					checklistItemLI.appendChild(location_container);
					
					missing_container.appendChild(userInputNo);
					checklistItemLI.appendChild(missing_container);
				} else {
					var checkboxInput = document.createElement("input");
					checkboxInput.type = "checkbox";
					checkboxInput.id = checklistItemID;
					checkboxInput.className = "checkbox_attributes";
					checkboxInput.name = checklistItemID;
					checkboxInput.value = lineText;
					checklistItemLI.appendChild(checkboxInput);
					checklistItemLI.appendChild(checklistItemText);
				}
			}

			checklists.appendChild(checklistItemLI);
		}
	}
	return checklists;
}

// A function to process the Encoding method of the contents to create a unique key for every single checklist
function encodeKey(content) {
	console.log(content);
	// process the conentes within <a> and </a>
	content = content.replace(/<a[^>]*>|<\/a>/g, '');
	// process the footnote issue
	content = content.replace(/\{sup\}.*?\{\/sup\}/g, '');
	// now remove all the non-alphabetic and non-numeric characters
	content = content.replace(/[^a-zA-Z0-9]/g, '');
	return content;
}