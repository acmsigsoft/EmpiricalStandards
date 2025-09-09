// Function to convert Markdown tables to HTML tables
function convertMarkdownToHTML(markdown) {
	var lines = markdown.trim().split('\n');
	var resultHTML = '<div>';

	var currentType = null;

	for (var i = 0; i < lines.length; i++) {
		var line = lines[i].trim();
		var isHeaderRow = i === 0;

		if (isHeaderRow) {
			var headers = line.split('|').map(function (header) {
				return header.trim();
			});

			currentType = headers[1];
			resultHTML += '<checklist name="' + currentType + '">';
		} else {
			var cells = line.split('|').map(function (cell) {
				return cell.trim();
			});

			if (currentType !== cells[1]) {
				resultHTML += '</checklist>';
				currentType = cells[1];
				resultHTML += '<checklist name="' + currentType + '">';
			}

			resultHTML += '<row>';
			resultHTML += '<type>' + cells[1] + '</type>';
			resultHTML += '<content>' + cells[2] + '</content>';
			resultHTML += '<Display1>' + cells[3] + '</Display1>';
			resultHTML += '<ErrorType>' + cells[4] + '</ErrorType>';
			resultHTML += '<DisplayFree>' + cells[5] + '</DisplayFree>';
			resultHTML += '<FreeLabel>' + cells[6] + '</FreeLabel>';
			resultHTML += '</row>';
		}
	}

	resultHTML += '</checklist></div>';
	return resultHTML;
}

// collect footnotes
function collectFootnotes(dom, standardTag) {
	var footnoteTags = dom.getElementsByTagName("footnote");

	for (let footnoteTag of footnoteTags) {
		supTag = footnoteTag.getElementsByTagName("sup")[0];
		footnoteID = standardTag.getAttribute('name') + "--footnote--" + supTag.innerText.trim() // To make footnotes belong to their standards
		supTag.remove();
		footnotes[footnoteID] = footnoteTag.innerText.trim();
	}
}

//The text from the MD file is converted to HTML using this method
function convertMDTagsToHTMLTags(text) {
	// Bold text - Convert from MD to HTML tags
	if (text.match(/\*\*(.*?)\*\*/g) != null) {
		text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
	}

	// Italic text - Convert from MD to HTML tags
	if (text.match(/\*(.*?)\*/g) != null) {
		text = text.replace(/\*(.*?)\*/g, "<i>$1</i>");
	}

	// Supplements/Links? - Convert from MD to HTML tags
	if (text.match(/\[([\w\s\d\.\-#\*_\/]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)/g) != null) {
		text = text.replace(/\[([\w\s\d\.\-#\*_\/]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)/g, "<a target='_blank' href='$2'>$1</a>");
	}

	return text;
}

//generate a message with a specific style
function generateMessage(id, text, styleClass) {
	var message;

	if (role == "\"author\"") {
		message = document.createElement("span");
		message.innerHTML = text;
		message.className = "attention hide_display " + styleClass;
	} else {
		message = document.createElement("div");
		message.className = "attention hide_display " + styleClass;
	}

	message.id = id;

	return message;
}

//this function creates a location textbox for all items in the standards
function generateLocationTextbox(name, id) {
	var locationTextbox;
	locationTextbox = document.createElement('input');
	locationTextbox.type = 'text';
	locationTextbox.className = name;
	locationTextbox.id = name + ":" + id;
	locationTextbox.maxLength = "100";
	locationTextbox.defaultValue = '';
	
	if (name == "item_location_textbox") {
		locationTextbox.pattern = "^(?!.*[A-Za-z]).*$";
		locationTextbox.title = "Numbers and symbols only."
	}
	
	// If the user enters/removes a location, automatically check/uncheck the associated "Present" checkbox
	if (name == "item_location_textbox") {
		locationTextbox.addEventListener("change", (event) => {
			let present = document.getElementById("present_checkbox" + ":" + id);
			if (event.target.value != "") {
				present.checked = true;
			} else {
				present.checked = false;
			}
		});
	}
	
	return locationTextbox;
}