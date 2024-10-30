// Function to convert Markdown tables to HTML tables
export function convertMarkdownToHTML(markdown) {
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
export function collect_footnotes(dom, standardTag) {
	var footnoteTags = dom.getElementsByTagName("footnote");

	for (let footnoteTag of footnoteTags) {
		supTag = footnoteTag.getElementsByTagName("sup")[0];
		footnote_id = standardTag.getAttribute('name') + "--footnote--" + supTag.innerText.trim() // To make footnotes belong to their standards
		supTag.remove();
		footnotes[footnote_id] = footnoteTag.innerText.trim();
	}
}

//The text from the MD file is converted to HTML using this method
export function convert_MD_tags_to_HTML_tags(text) {
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
export function generate_message(id, text, style_class) {
	var message;

	if (role == "\"author\"") {
		message = document.createElement("span");
		message.innerHTML = text;
		message.className = "attention hide_display " + style_class;
	} else {
		message = document.createElement("div");
		message.className = "attention hide_display " + style_class;
	}

	message.id = id;

	return message;
}

//this function creates a location textbox for all items in the standards
export function generate_location_textbox(name, id) {
	var location_textbox;
	location_textbox = document.createElement('input');
	location_textbox.type = 'text';
	location_textbox.className = name;
	location_textbox.id = name + ":" + id;
	location_textbox.maxLength = "100";
	location_textbox.pattern = "^(?!.*[A-Za-z]).*$";
	location_textbox.title = "Numbers and symbols only."
	location_textbox.defaultValue = '';
	return location_textbox;
}