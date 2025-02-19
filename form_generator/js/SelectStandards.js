function showInstructions(){
	role = location.search.split("=")[1];
	var checklistName = document.createElement("h1");
	var checklistInstructions = document.createElement("p");
	if (role == "author") {
		checklistName.innerHTML = "Pre-Submission Checklist Generator";
		checklistInstructions.innerHTML = "To generate a pre-submission checklist, select all the methods that apply to your paper and click \"submit\". You can mouse-over each method for a brief description or click on the method name to read the full standard. If your manuscript proposes and assesses a new artifact (e.g. a tool) select <em>Engineering Research</em> and the empirical method(s) used to assess the artifact. If your manuscript reports a multimethodology or mixed-methods study, select <em>Multimethodology</em> and both methods. If your manuscript uses a method not listed here, choose the last option. If your manuscript does not report an empirical study (e.g. it's an opinion paper) do not use this generator.";
	} else if (role == "one-phase-reviewer") {
		checklistName.innerHTML = "Review Checklist Generator";
		checklistInstructions.innerHTML = "To generate a review checklist, select all the methods used in the manuscript and click \"submit\". You can mouse-over each method for a brief description or click on the method name to read the full standard. If the manuscripts proposes and assesses a new artifact (e.g. a tool) select <em>Engineering Research</em> and the empirical method used to assess the artifact. If the manuscript reports a multimethodology or mixed-methods study, select <em>Multimethodology</em> and both methods. If the mansucript does not report an empirical study (e.g. it's an opinion paper) or uses a method not listed here, do not use this generator.";
	} else if (role == "two-phase-reviewer") {
		checklistName.innerHTML = "Review Checklist Generator";
		checklistInstructions.innerHTML = "To generate a review checklist, select all the methods used in the manuscript and click \"submit\". You can mouse-over each method for a brief description or click on the method name to read the full standard. If the manuscripts proposes and assesses a new artifact (e.g. a tool) select <em>Engineering Research</em> and the empirical method used to assess the artifact. If the manuscript reports a multimethodology or mixed-methods study, select <em>Multimethodology</em> and both methods. If the mansucript does not report an empirical study (e.g. it's an opinion paper) or uses a method not listed here, do not use this generator.";
	}
	var instructionsContainer = document.getElementById("instructions");
	instructionsContainer.appendChild(checklistName);
	instructionsContainer.appendChild(checklistInstructions);

	var roleInput = document.createElement("input");
	roleInput.type = "hidden";
	roleInput.name = "role";
	roleInput.value = role;
	
	var checklistForm = document.getElementById("checklist_form");
	checklistForm.appendChild(roleInput);
}

// Reset the form at the begining
$(window).bind("pageshow", function() {
	$('form')[0].reset();
});

$(document).ready(function(){
	// Enable the Submit button only when any of the checkboxes is checked; otherwise, disable.
	$(".standard,.none").click(function() {
		if ($("#checklist_form input[type=checkbox]:checked").length > 0) {
			$(".button").attr("disabled", false);
		} else {
			$(".button").attr("disabled", true);
		}
	});
});