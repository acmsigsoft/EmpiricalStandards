// generate the deviation block for One Phase Reviewer Role
// generate the deviation block for One Phase Reviewer Role
function generateOnePhaseReviewerDeviationBlock(checklistItemID,data) {

	// Create a question block with Yes-No radio answers
	// 2nd Question
	if(data!=null){
		var deviationBlock = generateQuestionBlockWithYesNoRadioAnswers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItemID, 2.40, data.display1 == "False");

		// Reviewer-specific deviation justification block
		var deviationJustified = generateMessage("deviation_justified:" + checklistItemID, "", "message_style_2");
	
		// Create a question block with type radio answers
		// 3rd Question
		var numbersArray = data.errortype.split(",").map(function(item) {
			return parseInt(item, 10);
		});

		var deviationNotJustified = generateQuestionBlockWithTypeRadioAnswers("deviation_not_justified", "justification_radio", "Please indicate the type of unreasonable deviations. (Pick the largest number that applies.)", checklistItemID, 2.06, numbersArray);

		// (No-No-Yes)
		var deviationReasonable = generateMessage("deviation_reasonable:" + checklistItemID, "", "message_style_3");
	
		// (No-No-No)
		var deviationUnreasonable = generateMessage("deviation_unreasonable:" + checklistItemID, "", "message_style_3");
		
		deviationBlock.appendChild(deviationJustified);
		deviationBlock.appendChild(deviationNotJustified);
		deviationBlock.appendChild(deviationReasonable);
		deviationBlock.appendChild(deviationUnreasonable);

		if(data.displayfree == "True"){
			var freeTextQuestion = generateFreeTextQuestion("free_text_question", data.freelabel, checklistItemID);

			deviationBlock.appendChild(freeTextQuestion);
		}
	}else{
		console.log("Data not fetched");
		var deviationBlock = generateQuestionBlockWithYesNoRadioAnswers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItemID, 2.40);

		// Reviewer-specific deviation justification block
		var deviationJustified = generateMessage("deviation_justified:" + checklistItemID, "", "message_style_2");
	
		// Create a question block with type radio answers
		// 3rd Question
		var deviationNotJustified = generateQuestionBlockWithTypeRadioAnswers("deviation_not_justified", "justification_radio", "Please indicate the type of unreasonable deviations. (Pick the largest number that applies.)", checklistItemID, 2.06, type = [1,2,3,4]);
	
		// (No-No-Yes)
		var deviationReasonable = generateMessage("deviation_reasonable:" + checklistItemID, "", "message_style_3");
	
		// (No-No-No)
		var deviationUnreasonable = generateMessage("deviation_unreasonable:" + checklistItemID, "", "message_style_3");
	
		deviationBlock.appendChild(deviationJustified);
		deviationBlock.appendChild(deviationNotJustified);
		deviationBlock.appendChild(deviationReasonable);
		deviationBlock.appendChild(deviationUnreasonable);
		
		var freeTextQuestion = generateFreeTextQuestion("free_text_question", 'How can this problem be addressed', checklistItemID);

		deviationBlock.appendChild(freeTextQuestion);
	}

	console.log(deviationBlock);
	return deviationBlock;
}

// generate the deviation block for Two Phase Reviewer Role
function generateTwoPhaseReviewerDeviationBlock(checklistItemID,data) {

	// Create a question block with Yes-No radio answers
	// 2nd Question
	if(data!=null){
		var deviationBlock = generateQuestionBlockWithYesNoRadioAnswers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItemID, 2.40, data.display1 == "False");
		
		// Reviewer-specific deviation justification block
		var deviationJustified = generateMessage("deviation_justified:" + checklistItemID, "", "message_style_2");
	
		// Create a question block with type radio answers
		// 3rd Question
		var numbersArray = data.errortype.split(",").map(function(item) {
			return parseInt(item, 10);
		});

		var deviationNotJustified = generateQuestionBlockWithTypeRadioAnswers("deviation_not_justified", "justification_radio", "Please indicate the type of unreasonable deviations. (Pick the largest number that applies.)", checklistItemID, 2.06, numbersArray);

		// (No-No-Yes)
		var deviationReasonable = generateMessage("deviation_reasonable:" + checklistItemID, "", "message_style_3");
	
		// (No-No-No)
		var deviationUnreasonable = generateMessage("deviation_unreasonable:" + checklistItemID, "", "message_style_3");
		
		deviationBlock.appendChild(deviationJustified);
		deviationBlock.appendChild(deviationNotJustified);
		deviationBlock.appendChild(deviationReasonable);
		deviationBlock.appendChild(deviationUnreasonable);

		if(data.displayfree == "True"){
			var freeTextQuestion = generateFreeTextQuestion("free_text_question", data.freelabel, checklistItemID);
			console.log(data.freelabel);
			deviationBlock.appendChild(freeTextQuestion);
		}
	}else{
		console.log("Data not fetched");	

		// new standard
		var deviationBlock = generateQuestionBlockWithYesNoRadioAnswers("deviation_block", "deviationRadio", "is the deviation reasonable?", checklistItemID, 2.40);

		var deviationJustified = generateMessage("deviation_justified:" + checklistItemID, "", "message_style_2");
		var deviationNotJustified = generateQuestionBlockWithTypeRadioAnswers("deviation_not_justified", "justification_radio", "Please indicate the type of unreasonable deviations. (Pick the largest number that applies.)", checklistItemID, 2.06, [1,2,3,4]);

		// (No-No-Yes)
		var deviationReasonable = generateMessage("deviation_reasonable:" + checklistItemID, "", "message_style_3");
	
		// (No-No-No)
		var deviationUnreasonable = generateMessage("deviation_unreasonable:" + checklistItemID, "", "message_style_3");
		
		deviationBlock.appendChild(deviationJustified);
		deviationBlock.appendChild(deviationNotJustified);
		deviationBlock.appendChild(deviationReasonable);
		deviationBlock.appendChild(deviationUnreasonable);

		var freeTextQuestion = generateFreeTextQuestion("free_text_question", "How can this problem be addressed", checklistItemID);

		deviationBlock.appendChild(freeTextQuestion);
	}

	return deviationBlock;
}


function generateFreeTextQuestion(id, question, checklistItemID) {
    var questionBlock = document.createElement("div");
    questionBlock.id = id + ":" + checklistItemID;
    questionBlock.className = "question_block_free_text";

    var questionText = document.createElement("div"); // Create a div for the question
    questionText.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rdsh;&nbsp;  " + question;

    var answerInput = document.createElement("div"); // Create a div for the input answer
    answerInput.className = "free_text_container";
	
	var answerInputField = document.createElement("textarea");
    answerInputField.id = id + "-answer:" + checklistItemID;
    answerInputField.className = "free_text_answer";
    answerInputField.type = "text";
	
    answerInput.appendChild(answerInputField);
    questionBlock.appendChild(questionText);
    questionBlock.appendChild(answerInput);

	questionBlock.getAnswer = function () {
        return answerInputField.value;
    };
	
	console.log(answerInputField.value);

    return questionBlock;
}


// generate the deviation block for Author Role
function generateAuthorDeviationBlock(checklistItemID) {
	var deviationBlock = generateQuestionBlockWithYesNoRadioAnswers("deviation_block", "deviationRadio", "explain:", checklistItemID);

	// Author-specific deviation justification message
	var deviationJustified = generateMessage("deviation_justified:" + checklistItemID, "", "message_style_1");

	deviationBlock.appendChild(deviationJustified);

	return deviationBlock;
}

// generate the question block with the type radio buttons (type 1, type 2, type 3, type 4)
function generateQuestionBlockWithTypeRadioAnswers(id, classValue, question, checklistItemID, padding, type) {
	var questionBlock = document.createElement("div");

	questionBlock.id = id + ":" + checklistItemID;
	questionBlock.className = "question_block type_block";
	questionBlock.innerHTML = "&rdsh;&nbsp; " + question;

	var deviationBlockRadios = document.createElement("div");
    deviationBlockRadios.innerHTML = "&nbsp;&nbsp;&nbsp;";

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
        deviationRadioType.id = id + "-radio:Type"+type[i]+":" + checklistItemID;

        // className - deal with all of them
        deviationRadioType.className = classValue + "_type";
    
        // These are the radio buttons of that element regardless of Type1 or Type2
        // For Hiding Buttons
        deviationRadioType.name = id + "-radio:" + checklistItemID;
    
        // deviation justification is a function
        deviationRadioType.onclick = createDeviationJustificationBlockShowHideJustificationLocationTextbox;
    
        deviationRadioType.type = "radio";
    
        // Value for comparisons
        deviationRadioType.value = "type"+type[i];
    
        // Actual Text of the Radio button
		// Adding tooltip to type Radio button
		deviationLabelType.innerHTML = "<div class=\"tooltip\">type "+type[i]+ "<span class=\"tooltip_text\"> "+dict[type[i]]+"</span></div>" + "&nbsp;&nbsp;";
    
        // For Labels
        // Click on the label, click that radio button
        deviationLabelType.htmlFor = deviationRadioType.id;
    
        deviationBlockRadios.appendChild(deviationRadioType);
        deviationBlockRadios.appendChild(deviationLabelType);
    }

    questionBlock.appendChild(deviationBlockRadios);

	return questionBlock;
}

function generateQuestionBlockWithYesNoRadioAnswers(id, classValue, question, checklistItemID, padding, display) {
	var questionBlock = document.createElement("div");

	questionBlock.id = id + ":" + checklistItemID;
	questionBlock.className = "question_block";

	var deviationBlock = document.createElement("div");

	if (role == "\"author\"") {
		questionBlock.classList.add("author_yes_no_block");
		var questiontextContainer = document.createElement("span");
		questiontextContainer.innerHTML = "&rdsh;&nbsp; " + question;
		questiontextContainer.className = "question_text_container";

		// For authors, create location indicator + N/A checkbox
		var justificationLocationTextbox = generateLocationTextbox("justification_location_textbox", checklistItemID);
		var locationContainer = document.createElement("span");
		locationContainer.className = "author_justification_container";
		locationContainer.appendChild(justificationLocationTextbox);

		questionBlock.appendChild(questiontextContainer);
		questionBlock.appendChild(locationContainer);

	} else {
		questionBlock.classList.add("reviewer_yes_no_block");
		deviationBlock.className = "reviewer_reasonable_block";
		
		let questionText = document.createElement("span");
		questionText.innerHTML = "&rdsh;&nbsp; " + question;

		// For reviewers, create yes-no radio buttons
		var deviationRadioYes = document.createElement("input");
		var deviationLabelYes = document.createElement("label");
		deviationRadioYes.id = id + "-radio:Yes:" + checklistItemID;
		deviationRadioYes.className = classValue + "Yes";
		deviationRadioYes.name = id + "-radio:" + checklistItemID;
		deviationRadioYes.onclick = createDeviationJustificationBlockShowHideJustificationLocationTextbox;
		deviationRadioYes.type = "radio";
		deviationRadioYes.value = "yes";
		deviationLabelYes.innerHTML = "yes&nbsp;&nbsp;";
		deviationLabelYes.htmlFor = deviationRadioYes.id;

		var deviationRadioNo = document.createElement("input");
		var deviationLabelNo = document.createElement("label");
		deviationRadioNo.id = id + "-radio:No:" + checklistItemID;
		deviationRadioNo.className = classValue + "No";
		deviationRadioNo.name = id + "-radio:" + checklistItemID;
		deviationRadioNo.onclick = createDeviationJustificationBlockShowHideJustificationLocationTextbox;
		deviationRadioNo.type = "radio";
		deviationRadioNo.value = "no";
		deviationLabelNo.innerHTML = "no";
		deviationLabelNo.htmlFor = deviationRadioNo.id;

		deviationBlock.appendChild(questionText);
		deviationBlock.appendChild(deviationRadioYes);
		deviationBlock.appendChild(deviationLabelYes);
		deviationBlock.appendChild(deviationRadioNo);
		deviationBlock.appendChild(deviationLabelNo);
		questionBlock.appendChild(deviationBlock);
	}

	// if the deviation reasonable is fixed in the table
	if (display) {
		deviationRadioYes.disabled = true; // Disable 'Yes' radio button

		// Cross out the label associated with the 'Yes' radio button
		deviationLabelYes.innerHTML = "<s>yes</s>&nbsp;&nbsp;";
	}

	return questionBlock;
}