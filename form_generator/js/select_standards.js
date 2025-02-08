function showInstructions(){
	role = location.search.split("=")[1];
	var checklist_name = document.createElement("h1");
	var checklist_instructions = document.createElement("p");
	if (role == "author") {
		checklist_name.innerHTML = "Pre-Submission Checklist Generator";
		checklist_instructions.innerHTML = "To generate a pre-submission checklist, select all the methods that apply to your paper and click \"submit\". You can mouse-over each method for a brief description or click on the method name to read the full standard. If your manuscript proposes and assesses a new artifact (e.g. a tool) select <em>Engineering Research</em> and the empirical method(s) used to assess the artifact. If your manuscript reports a multimethodology or mixed-methods study, select <em>Multimethodology</em> and both methods. If your manuscript uses a method not listed here, choose the last option. If your manuscript does not report an empirical study (e.g. it's an opinion paper) do not use this generator.";
	} else if (role == "one-phase-reviewer") {
		checklist_name.innerHTML = "Review Checklist Generator";
		checklist_instructions.innerHTML = "To generate a review checklist, select all the methods used in the manuscript and click \"submit\". You can mouse-over each method for a brief description or click on the method name to read the full standard. If the manuscripts proposes and assesses a new artifact (e.g. a tool) select <em>Engineering Research</em> and the empirical method used to assess the artifact. If the manuscript reports a multimethodology or mixed-methods study, select <em>Multimethodology</em> and both methods. If the mansucript does not report an empirical study (e.g. it's an opinion paper) or uses a method not listed here, do not use this generator.";
	} else if (role == "two-phase-reviewer") {
		checklist_name.innerHTML = "Review Checklist Generator";
		checklist_instructions.innerHTML = "To generate a review checklist, select all the methods used in the manuscript and click \"submit\". You can mouse-over each method for a brief description or click on the method name to read the full standard. If the manuscripts proposes and assesses a new artifact (e.g. a tool) select <em>Engineering Research</em> and the empirical method used to assess the artifact. If the manuscript reports a multimethodology or mixed-methods study, select <em>Multimethodology</em> and both methods. If the mansucript does not report an empirical study (e.g. it's an opinion paper) or uses a method not listed here, do not use this generator.";
	}
	var instructions_div = document.getElementById("instructions");
	instructions_div.appendChild(checklist_name);
	instructions_div.appendChild(checklist_instructions);

	var role_input = document.createElement("input");
	role_input.type = "hidden";
	role_input.name = "role";
	role_input.value = role;
	var checklist_form = document.getElementById("checklistForm");
	checklist_form.appendChild(role_input);
}

// Reset the form at the begining
$(window).bind("pageshow", function() {
	$('form')[0].reset();
});

$(document).ready(function(){
	// Enable the Submit button only when any of the checkboxes is checked; otherwise, disable.
	$(".standard,.none").click(function() {
		if ($("#checklistForm input[type=checkbox]:checked").length > 0) {
			$(".button").attr("disabled", false);
		} else {
			$(".button").attr("disabled", true);
		}
	});
});