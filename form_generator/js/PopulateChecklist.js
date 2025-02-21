function populateChecklist() {
	console.log("Populating " + role + " checklist");

	// Get all locally stored keys
	let keys = Object.keys(localStorage);

	// Move nonessential keys to last
	let nonessential = keys.filter(checkNonessentialKeys);
	for (let key of nonessential) {
		let index = keys.indexOf(key);
		keys.push(keys.splice(index, 1)[0]);
	}

	for (let key of keys) {

		if (key != role && key.includes(role)) {
			let listClass = key.replace(role + "-", "");
			let item = document.getElementsByClassName(listClass)[0];
			let state = JSON.parse(localStorage.getItem(key));

			if (item != null) {
				if (role != "\"author\"") {
					if (state.checked) {
						item.children[0].click();

					} else if (!state.checked) {
						item.children[1].click();
						
						if (item.className == "attention_item") {
							continue;
						}

						let questionBlocks = item.getElementsByClassName('question_block');
						let reasonableYes = questionBlocks[0].getElementsByClassName('deviationRadioYes')[0];
						let reasonableNo = questionBlocks[0].getElementsByClassName('deviationRadioNo')[0];

						if (state.reasonable) {
							reasonableYes.click();

						} else if (!state.reasonable) {
							reasonableNo.click();

							let types = questionBlocks[1].getElementsByClassName('justification_radio_type');

							if (state.deviationType == 1) {
								types[0].click();
							} else if (state.deviationType == 2) {
								types[1].click();
							} else if (state.deviationType == 3) {
								types[2].click();
							} else if (state.deviationType == 4) {
								types[3].click();
							}

							let freeTextBox = item.getElementsByClassName('question_block_free_text')[0];
							let freeTextContent = freeTextBox.getElementsByClassName('free_text_answer')[0];

							if (Object.hasOwn(state, "freeText") && state.freeText != "") {
								freeTextContent.value = state.freeText;
							}
						}
					}
				} else {
					let locationBox = item.getElementsByClassName('item_location_textbox')[0];
					let missingButton = item.getElementsByClassName('missing_checkbox')[0];

					if (state.location != "") {
						locationBox.value = state.location;

					} else if (!state.location) {
						missingButton.click();

						let justificationBox = item.getElementsByClassName('justification_location_textbox')[0];
						let justificationButton = item.getElementsByClassName('unjustified_checkbox')[0];

						if (Object.hasOwn(state, "justified") && state.justified != "") {
							justificationBox.value = state.justified;

						} else if (!state.justified) {
							justificationButton.click();
						}
					}
				}
			}
		}
	}
}

// Check if the key is nonessential
function checkNonessentialKeys(key) {
	return key.includes("Desirable") || key.includes("Extraordinary");
}