import { convertMarkdownToHTML } from './Utilities.js';
import { generate_one_phase_reviewer_deviation_block, generate_two_phase_reviewer_deviation_block } from './DeviationHandler.js';
import { check_form_validity } from './FormValidity.js';
import { createTooltip } from './UIInteractionHandlers.js';
import { convert_MD_tags_to_HTML_tags, generate_message, generate_location_textbox } from './Utilities.js';
import { HashMap } from './HashMap.js';
import { readSpecificEmpiricalStandard_table } from './ReadEmpiricalStandards.js';
import { show_hide_location_textbox, show_deviation_block_and_hide_location_textbox, hide_deviation_block_and_show_location_textbox } from './UIInteractionHandlers.js';

var dataStructure = new HashMap();
var footnotes = {};
var imrad_order = [];

export function create_requirements_checklist(file) {

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

	if (role != "\"author\"") {
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
	for (let key of standard_keys) {
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
		for (let checklistTag of checklistTags) {

			let checklistType = checklistTag.getAttribute('name');

			// dealing with footnotes
			checklistHTML = checklistTag.innerHTML.replaceAll("<sup>", "<sup>" + standardName + "--footnote--") // To make footnotes belong to their standards 

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

				location_types.forEach(function (option) {
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
				Yes_No.innerHTML = "&nbsp;yes no";
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

	if (role == "\"author\"") {
		// (At least one 'No-No-No' -> reject manuscript)
		var deviation_unreasonable = generate_message("deviation_unreasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable.", "message_style_4");
		form.appendChild(deviation_unreasonable);
		// (At least one 'No-No-Yes' -> explain fix)
		var deviation_reasonable = generate_message("deviation_reasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable. Please give specific suggestions for how each deviation can be addressed.", "message_style_4");
		form.appendChild(deviation_reasonable);

	} else if (role == "\"one-phase-reviewer\"") {
		// (At least one 'No-No-No' -> reject manuscript)
		var deviation_unreasonable = generate_message("deviation_unreasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable.", "message_style_4");
		form.appendChild(deviation_unreasonable);
		// (At least one 'No-No-Yes' -> explain fix)
		var deviation_reasonable = generate_message("deviation_reasonable", "In the free-text part of your review, please explain the deviation(s) and why they are not reasonable. Please give specific suggestions for how each deviation can be addressed.", "message_style_4");
		form.appendChild(deviation_reasonable);

	} else if (role == "\"two-phase-reviewer\"") {
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

export function create_requirements_checklist_table(file) {
	// Create Element "FORM"
	var form = document.createElement("FORM");
	form.id = "checklists";
	form.name = "checklists";

	// unshift() method adds new items to the beginning of an array, and returns the new length
	if (!standard_keys.includes("\"General Standard\"")) {
		standard_keys.unshift("\"General Standard\"");
	}

	if (file == null) {
		var i = 0;
		const Essentail_dataStructure = new HashMap();
		const Desirable_dataStructure = new HashMap();
		const Extraordinary_dataStructure = new HashMap();
		for (let key of standard_keys) {
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
				const key = Encode_key(content1);
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
export function create_requirements_heading_with_UL(title) {
	var H3_ = document.createElement("H3");
	var UL_ = document.createElement("UL");

	H3_.className = "checklist_heading";
	H3_.innerHTML = title;
	UL_.id = title;
	UL_.appendChild(H3_);

	return UL_;
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
function notify_testers() {
	tester = getParameterByName('y')[0] == 'noval' ? true : false;
	if (tester) {
		alert_msg = "";
		if (unrecognized_tags != "") {
			alert_msg += "Warning — unrecognized tag(s):\n" + unrecognized_tags;
		}
		if (standards_with_no_tags != "") {
			alert_msg += "\nWarning — there are no tags at:\n" + standards_with_no_tags;
		}
		if (standards_with_untagged_attributes != "") {
			alert_msg += "\nWarning — there are untagged attributes at:\n" + standards_with_untagged_attributes;
		}
		if (alert_msg != "") {
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


function separate_essential_attributes_based_on_IMRaD_tags(standardName, checklistHTML) {
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
	if (tags === null) {
		other = checklistHTML;
		standards_with_no_tags += "[" + standardName + "]\n";
	}
	// Unrecognized tags => treat as '<other>'
	else for (const tag of tags) {
		if (!IMRaD_tags.includes(tag.trim())) {
			unrecognized_tags += "[" + tag.trim() + " @ " + standardName + "]\n";
			var unrecognized = checklistHTML.match(new RegExp(tag.trim() + "([\\s\\S]*?)<\\/?\\w+>", "i"))[1];
			other = unrecognized + other;
		}
	}

	// Attributes that do not belong under any tag => treat as '<other>'
	untaged = checklistHTML.match(/^[\s\r\n]+-([\s\S]*?)\n(<\w+>)/i);
	if (untaged != null) {
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

	for (let line of lines) {

		// removes whitespace, replace all line breaks (<br> </br>) and tab character(\t)
		line_text = line.trim().replaceAll(" ", "").replaceAll("<br>", "").replaceAll("<br/>", "").replaceAll("\t", "");

		if (line_text != "") {
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
				checklistItemLI.className = "author_list_item";
				checklistItemText.className = "item_text";
			}

			if (IMRaD_line_break) {
				checklists.appendChild(document.createElement("br"));
			}

			// !!!!!!!!!!!!!!!! we dont need this part in the checklist
			if (line_text.includes("complies with all applicable empirical standards")) {
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

			checklistItemLI.className = checklistItem_class;

			// Change the text to the string held in line_text
			checklistItemLI.setAttribute("text", line_text);

			console.log("Line text: " + line_text);

			if (line_text.replaceAll("<br/><br>", "") == "") {
				continue;
			}

			if (line_text.includes("footnote")) {
				checklistItemText = createTooltip(checklistItemText, line_text, footnotes);
			} else {
				checklistItemText.innerHTML = "&nbsp;" + line_text;
			}

			//locate the current checklist into the table
			data = dataStructure.get(Encode_key(line_text));

			if (checklistName == "Essential") {
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
				if (role == "\"author\"") {
					deviation_block = generate_author_deviation_block(checklistItem_id);

					checklistItemLI.appendChild(checklistItemText);

					location_container.appendChild(userInputYes);
					missing_container.appendChild(userInputNo);

					checklistItemLI.appendChild(location_container);
					checklistItemLI.appendChild(missing_container);

					checklistItemLI.appendChild(deviation_block);

				} else if (role == "\"one-phase-reviewer\"") {
					// deviation_block = generate_reviewer_deviation_block(checklistItem_id);
					if (data) {
						deviation_block = generate_one_phase_reviewer_deviation_block(checklistItem_id, data);
					} else {
						deviation_block = generate_one_phase_reviewer_deviation_block(checklistItem_id, null);
					}

					checklistItemLI.appendChild(userInputYes);
					checklistItemLI.appendChild(userInputNo);

					checklistItemText.appendChild(deviation_block);
					checklistItemLI.appendChild(checklistItemText);

				}
				else if (role == "\"two-phase-reviewer\"") {
					if (data) {
						deviation_block = generate_two_phase_reviewer_deviation_block(checklistItem_id, data);
					} else {
						deviation_block = generate_two_phase_reviewer_deviation_block(checklistItem_id, null);
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