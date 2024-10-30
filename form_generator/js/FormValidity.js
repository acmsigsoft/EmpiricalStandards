// Check if the completed checklist is valid (no missing items)
export function check_form_validity(event) {
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
				
				let question_blocks = li.getElementsByClassName('question_block');
				
				if (question_blocks[0].style.display != "none") {
					let reasonable_yes = question_blocks[0].getElementsByClassName('deviationRadioYes')[0];
					let reasonable_no = question_blocks[0].getElementsByClassName('deviationRadioNo')[0];
					
					// If deviation reasonability missing, the item is invalid
					if (reasonable_yes.checked || reasonable_no.checked) {
						question_blocks[0].classList.remove("attention");
					} else {
						question_blocks[0].classList.add("attention");
						validity = false;
					}
					
					if (question_blocks[1].style.display != "none") {
						let types = question_blocks[1].getElementsByClassName('justificationRadioType');
					
						// If deviation type missing, the item is invalid
						if (types[0].checked || types[1] && types[1].checked || types[2] && types[2].checked || types[3] && types[3].checked) {
							question_blocks[1].classList.remove("attention");
						} else {
							question_blocks[1].classList.add("attention");
							validity = false;
						}
					}
					
					let free_text = li.getElementsByClassName('question_block_free_Text')[0];
					
					if (free_text.style.display != "none") {
						let free_text_content = free_text.getElementsByClassName('freeTextAnswer')[0];
					
						// If free text missing, the item is invalid
						if (free_text_content.value == "") {
							free_text.classList.add("attention");
							validity = false;
						} else {
							free_text.classList.remove("attention");
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
	var generated_text = '=================\n' +
		'Review Checklist\n' +
		'=================\n';
		
	var decision = document.getElementById("decision_msg");
	var unreasonable = document.getElementById("deviation_unreasonable");
	var reasonable = document.getElementById("deviation_reasonable");

	if (decision.style.display == "block") {
		generated_text += "\nRecommended Decision: " + decision.innerText + "\n";
	}
	
	if (unreasonable.style.display == "block") {
		generated_text += "\nUnreasonable Deviations\n";
	}

	if (reasonable.style.display == "block") {
		generated_text += "\nUnreasonable Deviations Requiring Revision\n";
	} else {
		generated_text += "";
	}
	
	var essential_list = "\nEssential\r\n";
	
	if (role == "\"author\""){
		var location_type = document.getElementById('location_type');
		location_type = location_type.options[location_type.selectedIndex].text;
		generated_text += "\nNote: The numbers beside checklist items, if any, represent " + location_type.toLowerCase() + "\n";
		
		essential_list += "  Location" + "\t" + "Attribute\r\n\r\n";
	}
	
	var desirable_list = "\nDesirable\r\n";
	var extraordinary_list = "\nExtraordinary\r\n";
	var free_text_list = "\nFree Text Questions\r\n"
	
	var include_desirable = false;
	var include_extraordinary = false;
	
	var type1_list = "";
	var type2_list = "";
	var type3_list = "";
	var type4_list = "";
	
	for (let list of checklists.children) {
		if(list.tagName == 'UL' & list.style.display != 'none') {
			for (let ul of list.children) {
				if(ul.tagName == 'UL'){
					var i = 0;
					for (let li of ul.children) {
						if (li.tagName != 'LI') {
						   continue;
						}
						i++;
						var li_text = li.getAttribute("text").trim();
						var regex = /<a+\n*.+<\/a>/g;
						if (li_text.match(regex) != null)
							li_text = li_text.replace(regex, "");

						var regex2 = /\{sup\}.+\{\/sup\}/g;
						var regex3 = /<br\/>/g;
						var regex4 = /<\/b>/g;
						var regex5 = /<b>/g;
						var regex6 = /[\r\n]+/g;
						var regex7 =/ \(.+?\)/g;
						var regex8 = /<i>/g;
						var regex9 = /<\/i>/g;

						if (li_text.match(regex2) != null)
							li_text = li_text.replace(regex2, "");
						if (li_text.match(regex3) != null)
							li_text = li_text.replace(regex3,"\n");
						if (li_text.match(regex4) != null)
							li_text = li_text.replace(regex4,"");
						if (li_text.match(regex5) != null)
							li_text = li_text.replace(regex5,"");
						if (li_text.match(regex6) != null)
							li_text = li_text.replace(regex6,"");
						if (li_text.match(regex7) != null)
							li_text = li_text.replace(regex7,"");
						if (li_text.match(regex8) != null)
							li_text = li_text.replace(regex8,"");
						if (li_text.match(regex9) != null)
							li_text = li_text.replace(regex9,"");
						
						var location_value = "";
						var location_textbox = li.getElementsByClassName('item_location_textbox');

						if (list.id == 'Essential'){
							if (role != "\"author\"" && li.children[0].checked) {
								essential_list +=  'Y' + '\t   ' + li_text + '\r\n';
							} else if (role == "\"author\"" && location_textbox[0].value != "") {
								if (location_textbox.length == 1) {
									location_value = location_textbox[0].value;
								}
																
								essential_list += "  " + (location_value != "" ? location_value : "");
								
								// Determine whether to push item text to new line based on location text length
								if (location_value.length < 6) {
									essential_list += '\t\t' + li_text + '\r\n';
								} else if (location_value.length < 14) {
									essential_list += '\t' + li_text + '\r\n';
								} else {
									essential_list += '\r\n\t\t' + li_text + '\r\n';
								}
								
							} else {
								var reasonable_deviation = li.getElementsByClassName('deviationRadioYes')[0];						
								location_textbox = li.getElementsByClassName('justification_location_textbox');
								
								// store for the free_text_question
								var questionDiv  = li.getElementsByClassName("question_block_free_Text");
								
								if (questionDiv[0]) {
									var question_text = questionDiv[0].querySelector('div:first-child').textContent.trim().replace(/^\W+/g, '');
									console.log(question_text)
									var inputCollection  = li.getElementsByClassName('freeTextAnswer');
									console.log(inputCollection);
									
									if (inputCollection[0]) {
										var input_text = inputCollection[0].value;
									}
								}

								if (location_textbox[0] && location_textbox[0].value != "" || reasonable_deviation && reasonable_deviation.checked) {
									if (location_textbox.length == 1) {
										location_value = location_textbox[0].value;
									}
									
									if (role == "\"author\"") {
										essential_list += "  " + (location_value != "" ? location_value : "");
										
										// Determine whether to push item text to new line based on location text length
										if (location_value.length < 6) {
											essential_list += '\t\t' + li_text + ' (justified deviation)\r\n';
										} else if (location_value.length < 14) {
											essential_list += '\t' + li_text + ' (justified deviation)\r\n';
										} else {
											essential_list += '\r\n\t\t' + li_text + ' (justified deviation)\r\n';
										}
										
									} else {
										essential_list += 'R' + '\t   ' + li_text + '\r\n';
									}
									
								} else {
									var fixable_deviation = li.getElementsByClassName('justificationRadioType');
									
									if (fixable_deviation.length != 0){
										if (fixable_deviation[0].checked) {
											type1_list += '1\t   ' + li_text + '\r\n';
											if(input_text !== ""){
												type1_list += ' \t   ' + question_text + '\r\n';
												type1_list += ' \t    \t   ' + input_text + '\r\n';
											}
										} else if (fixable_deviation[1].checked) {
											type2_list += '2\t   ' + li_text + '\r\n';
											if(input_text !== ""){
												type2_list += ' \t   ' + question_text + '\r\n';
												type2_list += ' \t    \t   ' + input_text + '\r\n';
											}
										}  else if (fixable_deviation[2].checked) {
											type3_list += '3\t   ' + li_text + '\r\n';
											if(input_text !== ""){
												type3_list += ' \t   ' + question_text + '\r\n';
												type3_list += ' \t    \t   ' + input_text + '\r\n';
											}
										}  else if (fixable_deviation[3].checked) {
											type4_list += '4\t   ' + li_text + '\r\n';
											if(input_text !== ""){
												type4_list += ' \t   ' + question_text + '\r\n';
												type4_list += ' \t    \t   ' + input_text + '\r\n';
											}
										}
									} else {
										essential_list += (role == "\"author\"" ? '  *' : ' ') + '\t\t' + li_text;
										essential_list += (role == "\"author\"" ? ' (unjustified deviation)\r\n' : '\r\n');
									}
								}
							}
						}
						else if (list.id == 'Desirable') {
							if (li.children[0].checked || role == "\"author\"" && location_textbox[0].value != "") {
								include_desirable = true;

								if (location_textbox.length == 1) {
									location_value = location_textbox[0].value;
									desirable_list += "  " + (location_value != "" ? location_value : "");
									
									// Determine whether to push item text to new line based on location text length
									if (location_value.length < 6) {
										desirable_list += '\t\t' + li_text + '\r\n';
									} else if (location_value.length < 14) {
										desirable_list += '\t' + li_text + '\r\n';
									} else {
										desirable_list += '\r\n\t\t' + li_text + '\r\n';
									}
								} else {
									desirable_list +=  'Y' + '\t   ' + li_text + '\r\n';
								}
							}
						} else if (li.children[0].checked || role == "\"author\"" && location_textbox[0].value != "") {
							include_extraordinary = true;

							if (location_textbox.length == 1) {
								location_value = location_textbox[0].value;
								extraordinary_list += "  " + (location_value != "" ? location_value : "");
								
								// Determine whether to push item text to new line based on location text length
								if (location_value.length < 6) {
									extraordinary_list += '\t\t' + li_text + '\r\n';
								} else if (location_value.length < 14) {
									extraordinary_list += '\t' + li_text + '\r\n';
								} else {
									extraordinary_list += '\r\n\t\t' + li_text + '\r\n';
								}
							} else {
								extraordinary_list +=  'Y' + '\t   ' + li_text + '\r\n';
							}
						}

					}

				}
			}
		}
	}
	
	generated_text += type4_list + type3_list + type2_list + type1_list;
	
	generated_text += essential_list;
	
	if (include_desirable) {
		generated_text += desirable_list;
	}
	if (include_extraordinary) {
		generated_text += extraordinary_list;
	}
	
	generated_text += "\n";
	
	let date_generated = new Date();
	let date_string = date_generated.toLocaleDateString("en-CA", {timeZone: "-12:00"});
	let time_string = date_generated.toLocaleTimeString("en-US", {timeZone: "-12:00"});
	
	let date_formatted = new Date(date_string);
	generated_text += '\nGenerated: ' + date_generated.toDateString() + ', ';
	generated_text += time_string.slice(0, -6) + time_string.substr(8,3) + ' AoE\n\n';
	
	if (role != "\"author\"") {
		generated_text += "=======\n" +
		"Legend\n" +
		"=======\n" +
		"Y = yes, the paper has this attribute\n" +
		"R = a reasonable, acceptable deviation from the standards\n" +
		"1 = a deviation that can be fixed by editing text only\n" +
		"2 = a deviation that can be fixed by doing some new data analysis, redoing some existing data analysis, or collecting a small amount of additional data\n" +
		"3 = a deviation that can be fixed by completely redoing data analysis, or collecting additional data\n" +
		"4 = a deviation that cannot be fixed, or at least not without doing a brand new study\n\n\n";
	}

	generated_text+= "=================\n" +
		"Standards Used\n" +
		"=================\n";

	var elms = document.querySelectorAll(".standard_links");
	for (var i = 0; i < elms.length; i++) {
		generated_text += elms[i].innerHTML + '\n';
	}

	pageURL = window.location.href;	
	generated_text += "\nURL: " + pageURL;

	var newLink = document.createElement('a');
	newLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(generated_text);
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