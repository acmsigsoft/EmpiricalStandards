import { generate_message, generate_location_textbox } from "./Utilities";
import { create_deviation_justification_block_and_show_hide_justification_location_textbox } from "./UIInteractionHandlers";

// generate the deviation block for One Phase Reviewer Role
export function generate_one_phase_reviewer_deviation_block(checklistItem_id, data) {

	// Create a question block with Yes-No radio answers
	// 2nd Question
	if (data != null) {
		var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItem_id, 2.40, data.display1 == "False");

		// Reviewer-specific deviation justification block
		var deviation_justified = generate_message("deviation_justified:" + checklistItem_id, "", "message_style_2");

		// Create a question block with type radio answers
		// 3rd Question
		var numbersArray = data.errortype.split(",").map(function (item) {
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

		if (data.displayfree == "True") {
			var freeTextQuestion = generate_free_text_question("free_text_question", "freeText", data.freelabel, checklistItem_id);

			deviation_block.appendChild(freeTextQuestion);
		}
	} else {
		console.log("Data not fetched");
		var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItem_id, 2.40);

		// Reviewer-specific deviation justification block
		var deviation_justified = generate_message("deviation_justified:" + checklistItem_id, "", "message_style_2");

		// Create a question block with type radio answers
		// 3rd Question
		var deviation_not_justified = generate_question_block_with_type_radio_answers("deviation_not_justified", "justificationRadio", "Please indicate the type of unreasonable deviations. (Pick the largest number that applies.)", checklistItem_id, 2.06, type = [1, 2, 3, 4]);

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
export function generate_two_phase_reviewer_deviation_block(checklistItem_id, data) {

	// Create a question block with Yes-No radio answers
	// 2nd Question
	if (data != null) {
		var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItem_id, 2.40, data.display1 == "False");

		// Reviewer-specific deviation justification block
		var deviation_justified = generate_message("deviation_justified:" + checklistItem_id, "", "message_style_2");

		// Create a question block with type radio answers
		// 3rd Question
		var numbersArray = data.errortype.split(",").map(function (item) {
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

		if (data.displayfree == "True") {
			var freeTextQuestion = generate_free_text_question("free_text_question", "freeText", data.freelabel, checklistItem_id);
			console.log(data.freelabel);
			deviation_block.appendChild(freeTextQuestion);
		}
	} else {
		console.log("Data not fetched");

		// new standard
		var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItem_id, 2.40);

		var deviation_justified = generate_message("deviation_justified:" + checklistItem_id, "", "message_style_2");
		var deviation_not_justified = generate_question_block_with_type_radio_answers("deviation_not_justified", "justificationRadio", "Please indicate the type of unreasonable deviations. (Pick the largest number that applies.)", checklistItem_id, 2.06, [1, 2, 3, 4]);

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


function generate_free_text_question(id, class_name, question, checklistItem_id) {
	var question_block = document.createElement("div");
	question_block.id = id + ":" + checklistItem_id;
	question_block.className = "question_block_free_Text";

	var questionText = document.createElement("div"); // Create a div for the question
	questionText.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rdsh;&nbsp;  " + question;

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


// generate the deviation block for Author Role
function generate_author_deviation_block(checklistItem_id) {
	var deviation_block = generate_question_block_with_yes_no_radio_answers("deviation_block", "deviationRadio", "where does the manuscript justify the deviation?", checklistItem_id);

	// Author-specific deviation justification message
	var deviation_justified = generate_message("deviation_justified:" + checklistItem_id, "", "message_style_1");

	deviation_block.appendChild(deviation_justified);

	return deviation_block;
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
		deviationRadioType.id = id + "-radio:Type" + type[i] + ":" + checklistItem_id;

		// className - deal with all of them
		deviationRadioType.className = class_name + "Type";

		// These are the radio buttons of that element regardless of Type1 or Type2
		// For Hiding Buttons
		deviationRadioType.name = id + "-radio:" + checklistItem_id;

		// deviation justification is a function
		deviationRadioType.onclick = create_deviation_justification_block_and_show_hide_justification_location_textbox;

		deviationRadioType.type = "radio";

		// Value for comparisons
		deviationRadioType.value = "type" + type[i];

		// Actual Text of the Radio button
		// Adding tooltip to type Radio button
		deviationLabelType.innerHTML = "<div class=\"tooltip\">type " + type[i] + "<span class=\"tooltiptext\"> " + dict[type[i]] + "</span></div>" + "&nbsp;&nbsp;";

		// For Labels
		// Click on the label, click that radio button
		deviationLabelType.htmlFor = deviationRadioType.id;

		deviation_block_radios.appendChild(deviationRadioType);
		deviation_block_radios.appendChild(deviationLabelType);
	}

	question_block.appendChild(deviation_block_radios);

	return question_block;
}

function generate_question_block_with_yes_no_radio_answers(id, class_name, question, checklistItem_id, padding, display) {
	var question_block = document.createElement("div");

	question_block.id = id + ":" + checklistItem_id;
	question_block.className = "question_block yes_no_block";

	var deviation_block = document.createElement("div");
	deviation_block.innerHTML = "&nbsp;&nbsp;&nbsp;";

	if (role == "\"author\"") {
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

		var deviation_not_justified = generate_message("deviation_not_justified:" + checklistItem_id, "&nbsp;Your manuscript should justify any deviations from essential attributes.", "message_style_1 unjustified_warning");

		question_block.appendChild(deviation_not_justified);
	} else {
		question_block.innerHTML = "&rdsh;&nbsp; " + question;

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

		deviation_block.appendChild(deviationRadioYes);
		deviation_block.appendChild(deviationLabelYes);
		deviation_block.appendChild(deviationRadioNo);
		deviation_block.appendChild(deviationLabelNo);
		question_block.appendChild(deviation_block);
	}

	// if the deviation reasonable is fixed in the table
	if (display) {
		deviationRadioYes.disabled = true; // Disable 'Yes' radio button

		// Cross out the label associated with the 'Yes' radio button
		deviationLabelYes.innerHTML = "<s>yes</s>&nbsp;&nbsp;";
	}

	return question_block;
}