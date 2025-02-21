// Check if the completed checklist is valid (no missing items)
function checkFormValidity(event) {
	event.preventDefault();
	let validity = true;
	let list = document.getElementById("Essential");
	
	for (let ul of list.children) {
		if (ul.tagName == 'UL') {
			for (let li of ul.children) {
				if (li.tagName != 'LI'){
					continue;
				}
				 
				// If yes-no is missing, the item is invalid
				if (li.children[0].checked || li.children[1].checked) {
					li.children[2].classList.remove("attention");
				} else {
					li.children[2].classList.add("attention");
					validity = false;
				}
				
				if (li.className == "attention_item") {
					continue;
				}
				
				let questionBlocks = li.getElementsByClassName('question_block');
				
				if (questionBlocks[0].style.display != "none") {
					let reasonableYes = questionBlocks[0].getElementsByClassName('deviationRadioYes')[0];
					let reasonableNo = questionBlocks[0].getElementsByClassName('deviationRadioNo')[0];
					
					// If deviation reasonability missing, the item is invalid
					if (reasonableYes.checked || reasonableNo.checked) {
						questionBlocks[0].classList.remove("attention");
					} else {
						questionBlocks[0].classList.add("attention");
						validity = false;
					}
					
					if (questionBlocks[1].style.display != "none") {
						let types = questionBlocks[1].getElementsByClassName('justification_radio_type');
					
						// If deviation type missing, the item is invalid
						if (types[0].checked || types[1] && types[1].checked || types[2] && types[2].checked || types[3] && types[3].checked) {
							questionBlocks[1].classList.remove("attention");
						} else {
							questionBlocks[1].classList.add("attention");
							validity = false;
						}
					}
					
					let freeTextBox = li.getElementsByClassName('question_block_free_text')[0];
					
					if (freeTextBox.style.display != "none") {
						let freeTextContent = freeTextBox.getElementsByClassName('free_text_answer')[0];
					
						// If free text missing, the item is invalid
						if (freeTextContent.value == "") {
							freeTextBox.classList.add("attention");
							validity = false;
						} else {
							freeTextBox.classList.remove("attention");
						}
					}
				}
			}
		}
	}
	
	if (!validity) {
		document.getElementsByClassName("error_warning")[0].classList.remove("hide_display");
	} else {
		document.getElementsByClassName("error_warning")[0].classList.add("hide_display");
		saveFile();
	}
}


// Download the checklist with a specific format
function saveFile() {
	var checklists = document.getElementById('checklists');
	var generatedText = '=================\n' +
		'Review Checklist\n' +
		'=================\n';
		
	var decision = document.getElementById("decision_msg");
	var unreasonable = document.getElementById("deviation_unreasonable");
	var reasonable = document.getElementById("deviation_reasonable");

	if (decision.style.display == "block") {
		generatedText += "\nRecommended Decision: " + decision.innerText + "\n";
	}
	
	if (unreasonable.style.display == "block") {
		generatedText += "\nUnreasonable Deviations\n";
	}

	if (reasonable.style.display == "block") {
		generatedText += "\nUnreasonable Deviations Requiring Revision\n";
	} else {
		generatedText += "";
	}
	
	var essentialList = "\nEssential\r\n";
	
	if (role == "\"author\""){
		var locationType = document.getElementById('location_type');
		locationType = locationType.options[locationType.selectedIndex].text;
		generatedText += "\nNote: The numbers beside checklist items, if any, represent " + locationType.toLowerCase() + "\n";
		
		essentialList += "  Location" + "\t" + "Attribute\r\n\r\n";
	}
	
	var desirableList = "\nDesirable\r\n";
	var extraordinaryList = "\nExtraordinary\r\n";
	
	var includeDesirable = false;
	var includeExtraordinary = false;
	
	var type1List = "";
	var type2List = "";
	var type3List = "";
	var type4List = "";
	
	for (let list of checklists.children) {
		if(list.tagName == 'UL' & list.style.display != 'none') {
			for (let ul of list.children) {
				if(ul.tagName == 'UL'){
					var i = 0;
					for (let li of ul.children) {
						if (li.tagName != 'LI' || li.className == "attention_item") {
						   continue;
						}
						i++;
						var itemText = li.getAttribute("text").trim();
						var regex = /<a+\n*.+<\/a>/g;
						if (itemText.match(regex) != null)
							itemText = itemText.replace(regex, "");

						var regex2 = /\{sup\}.+\{\/sup\}/g;
						var regex3 = /<br\/>/g;
						var regex4 = /<\/b>/g;
						var regex5 = /<b>/g;
						var regex6 = /[\r\n]+/g;
						var regex7 =/ \(.+?\)/g;
						var regex8 = /<i>/g;
						var regex9 = /<\/i>/g;

						if (itemText.match(regex2) != null)
							itemText = itemText.replace(regex2, "");
						if (itemText.match(regex3) != null)
							itemText = itemText.replace(regex3,"\n");
						if (itemText.match(regex4) != null)
							itemText = itemText.replace(regex4,"");
						if (itemText.match(regex5) != null)
							itemText = itemText.replace(regex5,"");
						if (itemText.match(regex6) != null)
							itemText = itemText.replace(regex6,"");
						if (itemText.match(regex7) != null)
							itemText = itemText.replace(regex7,"");
						if (itemText.match(regex8) != null)
							itemText = itemText.replace(regex8,"");
						if (itemText.match(regex9) != null)
							itemText = itemText.replace(regex9,"");
						
						var locationValue = "";
						var locationTextbox = li.getElementsByClassName('item_location_textbox');

						if (list.id == 'Essential'){
							if (role != "\"author\"" && li.children[0].checked) {
								essentialList +=  'Y' + '\t   ' + itemText + '\r\n';
							} else if (role == "\"author\"" && locationTextbox[0].value != "") {
								if (locationTextbox.length == 1) {
									locationValue = locationTextbox[0].value;
								}
																
								essentialList += "  " + (locationValue != "" ? locationValue : "");
								
								// Determine whether to push item text to new line based on location text length
								if (locationValue.length < 6) {
									essentialList += '\t\t' + itemText + '\r\n';
								} else if (locationValue.length < 14) {
									essentialList += '\t' + itemText + '\r\n';
								} else {
									essentialList += '\r\n\t\t' + itemText + '\r\n';
								}
								
							} else {
								var reasonableDeviation = li.getElementsByClassName('deviationRadioYes')[0];						
								locationTextbox = li.getElementsByClassName('justification_location_textbox');
								
								// store for the free_text_question
								var questionDiv  = li.getElementsByClassName("question_block_free_text");
								
								if (questionDiv[0]) {
									var questionText = questionDiv[0].querySelector('div:first-child').textContent.trim().replace(/^\W+/g, '');
									console.log(questionText)
									var inputCollection  = li.getElementsByClassName('free_text_answer');
									console.log(inputCollection);
									
									if (inputCollection[0]) {
										var inputText = inputCollection[0].value;
									}
								}

								if (locationTextbox[0] && locationTextbox[0].value != "" || reasonableDeviation && reasonableDeviation.checked) {
									if (locationTextbox.length == 1) {
										locationValue = locationTextbox[0].value;
									}
									
									if (role == "\"author\"") {
										essentialList += "  " + (locationValue != "" ? locationValue : "");
										
										// Determine whether to push item text to new line based on location text length
										if (locationValue.length < 6) {
											essentialList += '\t\t' + itemText + ' (justified deviation)\r\n';
										} else if (locationValue.length < 14) {
											essentialList += '\t' + itemText + ' (justified deviation)\r\n';
										} else {
											essentialList += '\r\n\t\t' + itemText + ' (justified deviation)\r\n';
										}
										
									} else {
										essentialList += 'R' + '\t   ' + itemText + '\r\n';
									}
									
								} else {
									var fixableDeviation = li.getElementsByClassName('justification_radio_type');
									
									if (fixableDeviation.length != 0){
										if (fixableDeviation[0].checked) {
											type1List += '1\t   ' + itemText + '\r\n';
											if(inputText !== ""){
												type1List += ' \t   ' + questionText + '\r\n';
												type1List += ' \t    \t   ' + inputText + '\r\n';
											}
										} else if (fixableDeviation[1].checked) {
											type2List += '2\t   ' + itemText + '\r\n';
											if(inputText !== ""){
												type2List += ' \t   ' + questionText + '\r\n';
												type2List += ' \t    \t   ' + inputText + '\r\n';
											}
										}  else if (fixableDeviation[2].checked) {
											type3List += '3\t   ' + itemText + '\r\n';
											if(inputText !== ""){
												type3List += ' \t   ' + questionText + '\r\n';
												type3List += ' \t    \t   ' + inputText + '\r\n';
											}
										}  else if (fixableDeviation[3].checked) {
											type4List += '4\t   ' + itemText + '\r\n';
											if(inputText !== ""){
												type4List += ' \t   ' + questionText + '\r\n';
												type4List += ' \t    \t   ' + inputText + '\r\n';
											}
										}
									} else {
										essentialList += (role == "\"author\"" ? '  *' : ' ') + '\t\t' + itemText;
										essentialList += (role == "\"author\"" ? ' (unjustified deviation)\r\n' : '\r\n');
									}
								}
							}
						}
						else if (list.id == 'Desirable') {
							if (li.children[0].checked || role == "\"author\"" && locationTextbox[0].value != "") {
								includeDesirable = true;

								if (locationTextbox.length == 1) {
									locationValue = locationTextbox[0].value;
									desirableList += "  " + (locationValue != "" ? locationValue : "");
									
									// Determine whether to push item text to new line based on location text length
									if (locationValue.length < 6) {
										desirableList += '\t\t' + itemText + '\r\n';
									} else if (locationValue.length < 14) {
										desirableList += '\t' + itemText + '\r\n';
									} else {
										desirableList += '\r\n\t\t' + itemText + '\r\n';
									}
								} else {
									desirableList +=  'Y' + '\t   ' + itemText + '\r\n';
								}
							}
						} else if (li.children[0].checked || role == "\"author\"" && locationTextbox[0].value != "") {
							includeExtraordinary = true;

							if (locationTextbox.length == 1) {
								locationValue = locationTextbox[0].value;
								extraordinaryList += "  " + (locationValue != "" ? locationValue : "");
								
								// Determine whether to push item text to new line based on location text length
								if (locationValue.length < 6) {
									extraordinaryList += '\t\t' + itemText + '\r\n';
								} else if (locationValue.length < 14) {
									extraordinaryList += '\t' + itemText + '\r\n';
								} else {
									extraordinaryList += '\r\n\t\t' + itemText + '\r\n';
								}
							} else {
								extraordinaryList +=  'Y' + '\t   ' + itemText + '\r\n';
							}
						}

					}

				}
			}
		}
	}
	
	generatedText += type4List + type3List + type2List + type1List;
	
	generatedText += essentialList;
	
	if (includeDesirable) {
		generatedText += desirableList;
	}
	if (includeExtraordinary) {
		generatedText += extraordinaryList;
	}
	
	generatedText += "\n";
	
	let dateGenerated = new Date();
	let dateString = dateGenerated.toLocaleDateString("en-CA", {timeZone: "-12:00"});
	let timeString = dateGenerated.toLocaleTimeString("en-US", {timeZone: "-12:00"});
	
	let dateFormatted = new Date(dateString);
	generatedText += '\nGenerated: ' + dateGenerated.toDateString() + ', ';
	generatedText += timeString.slice(0, -6) + timeString.substr(8,3) + ' AoE\n\n';
	
	let attentionCheck = document.getElementsByClassName("attention_pass")[0];
	if (!attentionCheck.checked) {
		
		generatedText += "Note: the creator of this review failed the attention check. The editor should consider the possibility that the review is invalid.\n\n\n";
	}
	
	if (role != "\"author\"") {
		generatedText += "=======\n" +
		"Legend\n" +
		"=======\n" +
		"Y = yes, the paper has this attribute\n" +
		"R = a reasonable, acceptable deviation from the standards\n" +
		"1 = a deviation that can be fixed by editing text only\n" +
		"2 = a deviation that can be fixed by doing some new data analysis, redoing some existing data analysis, or collecting a small amount of additional data\n" +
		"3 = a deviation that can be fixed by completely redoing data analysis, or collecting additional data\n" +
		"4 = a deviation that cannot be fixed, or at least not without doing a brand new study\n\n\n";
	}

	generatedText+= "=================\n" +
		"Standards Used\n" +
		"=================\n";

	var elms = document.querySelectorAll(".standard_links");
	for (var i = 0; i < elms.length; i++) {
		generatedText += elms[i].innerHTML + '\n';
	}

	pageURL = window.location.href;	
	generatedText += "\nURL: " + pageURL;

	var newLink = document.createElement('a');
	newLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(generatedText);
	newLink.download = 'reviewChecklist.txt';

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        newLink.dispatchEvent(event);
    } else {
        newLink.click();
	}
	return false;
}