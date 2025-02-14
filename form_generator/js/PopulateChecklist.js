function populateChecklist() {
	console.log("Populating " + role + " checklist");

	// Clear all stored items for this checklist
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

						let question_blocks = item.getElementsByClassName('question_block');
						let reasonable_yes = question_blocks[0].getElementsByClassName('deviationRadioYes')[0];
						let reasonable_no = question_blocks[0].getElementsByClassName('deviationRadioNo')[0];

						if (state.reasonable) {
							reasonable_yes.click();

						} else if (!state.reasonable) {
							reasonable_no.click();

							let types = question_blocks[1].getElementsByClassName('justificationRadioType');

							if (state.deviationType == 1) {
								types[0].click();
							} else if (state.deviationType == 2) {
								types[1].click();
							} else if (state.deviationType == 3) {
								types[2].click();
							} else if (state.deviationType == 4) {
								types[3].click();
							}

							let free_text_box = item.getElementsByClassName('question_block_free_Text')[0];
							let free_text_content = free_text_box.getElementsByClassName('freeTextAnswer')[0];

							if (Object.hasOwn(state, "freeText") && state.freeText != "") {
								free_text_content.value = state.freeText;
							}
						}
					}
				} else {
					let location_box = item.getElementsByClassName('item_location_textbox')[0];
					let missing_button = item.getElementsByClassName('missing_checkbox')[0];

					if (state.location != "") {
						location_box.value = state.location;

					} else if (!state.location) {
						missing_button.click();

						let justification_box = item.getElementsByClassName('justification_location_textbox')[0];
						let justification_button = item.getElementsByClassName('unjustified_checkbox')[0];

						if (Object.hasOwn(state, "justified") && state.justified != "") {
							justification_box.value = state.justified;

						} else if (!state.justified) {
							justification_button.click();
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