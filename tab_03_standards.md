---
layout: default
title: Standards
permalink: /docs/standards
---   

<html>
<head>

	<style>
		main .wrapper {
			width: 100%;
			display: flex;
		}
	</style>

  <script src="../form_generator/js/Utilities.js"></script>
  <script src="../form_generator/js/UIInteractionHandlers.js"></script>
  <script src="../form_generator/js/ReadEmpiricalStandards.js"></script>
  <script src="../form_generator/js/PopulateChecklist.js"></script>
  <script src="../form_generator/js/FormValidity.js"></script>
  <script src="../form_generator/js/HashMap.js"></script>
  <script src="../form_generator/js/UIInteractionHandlers.js"></script>
  <script src="../form_generator/js/DeviationHandler.js"></script>
  <script src="../form_generator/js/RequirementsChecklist.js"></script>
  <script src="../form_generator/js/ReadStandards.js"></script>

<script>
function openStandardFromURL(evt) {
  standardName = getParameterByName('standard')[0].replaceAll('"', '');

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(standardName).style.display = "block";
  document.getElementById(standardName+'_b').className += " active";
}
</script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics }}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ site.google_analytics }}');
</script>
</head>

<body onload="openStandardFromURL(event)">

<!-- Standards list/table of contents -->
<nav class="standards_list">

  <input type="checkbox" id="toc_trigger" class="nav_trigger">
  <label for="toc_trigger">
    <span class="menu_icon">
      <svg viewBox="0 0 18 15" width="18px" height="15px">
        <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"></path>
      </svg>
    </span>
  </label>

  <ul class="tab">
    <li>
	  <h3>General</h3>
	  <ul>
		<li><a id="GeneralStandard_b"        class="tablinks" href="#" onclick="openStandard(event, 'GeneralStandard')">General Standard</a></li>
		<li><a id="EngineeringResearch_b"    class="tablinks" href="#" onclick="openStandard(event, 'EngineeringResearch')">Engineering Research</a></li>
		<li><a id="MixedMethods_b"           class="tablinks" href="#" onclick="openStandard(event, 'MixedMethods')">Mixed Methods</a></li>
	  </ul>
    </li>
    <li>
	  <h3>Qualitative</h3>
	  <ul>
		<li><a id="ActionResearch_b"         class="tablinks" href="#" onclick="openStandard(event, 'ActionResearch')">Action Research</a></li>
		<li><a id="CaseStudy_b"              class="tablinks" href="#" onclick="openStandard(event, 'CaseStudy')">Case Study</a></li>
		<li><a id="GroundedTheory_b"         class="tablinks" href="#" onclick="openStandard(event, 'GroundedTheory')">Grounded Theory</a></li>
		<li><a id="QualitativeSurvey_b"     class="tablinks" href="#" onclick="openStandard(event, 'QualitativeSurveys')">Qualitative Survey</a></li>
	  </ul>
    </li>
    <li>
	  <h3>Quantitative</h3>
	  <ul>
		<li><a id="Benchmarking_b"           class="tablinks" href="#" onclick="openStandard(event, 'Benchmarking')">Benchmarking</a></li>
		<li><a id="DataScience_b"            class="tablinks" href="#" onclick="openStandard(event, 'DataScience')">Data Science</a></li>
		<li><a id="Experiment_b"            class="tablinks" href="#" onclick="openStandard(event, 'Experiments')">Experiment</a></li>
		<li><a id="Longitudinal_b"           class="tablinks" href="#" onclick="openStandard(event, 'Longitudinal')">Longitudinal</a></li>
		<li><a id="OptimizationStudy_b"    	class="tablinks" href="#" onclick="openStandard(event, 'OptimizationStudies')">Optimization Study</a></li>
		<li><a id="QuantitativeSimulation_b" class="tablinks" href="#" onclick="openStandard(event, 'QuantitativeSimulation')">Quantitative Simulation</a></li>
		<li><a id="QuestionnaireSurvey_b"   class="tablinks" href="#" onclick="openStandard(event, 'QuestionnaireSurveys')">Questionnaire Survey</a></li>
		<li><a id="RepositoryMining_b"       class="tablinks" href="#" onclick="openStandard(event, 'RepositoryMining')">Repository Mining</a></li>
	  </ul>
    </li>
    <li>
	  <h3>Literature Review</h3>
	  <ul>
		<li><a id="CaseSurvey_b"             class="tablinks" href="#" onclick="openStandard(event, 'CaseSurvey')">Case Survey</a></li>
		<li><a id="SystematicReviews_b"      class="tablinks" href="#" onclick="openStandard(event, 'SystematicReviews')">Systematic Review</a></li>
	  </ul>
    </li>
    <li>
	  <h3>Other</h3>
	  <ul>
		<li><a id="MetaScience_b"            class="tablinks" href="#" onclick="openStandard(event, 'MetaScience')">Meta Science</a></li>
		<li><a id="Replication_b"            class="tablinks" href="#" onclick="openStandard(event, 'Replication')">Replication</a></li>
	  </ul>
    </li>
  </ul>
</nav>

<div id="Display">
<div id="GeneralStandard" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/GeneralStandard.md %}{% endcapture %}
    {{ std | remove: '<standard name="General Standard">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="ActionResearch" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/ActionResearch.md %}{% endcapture %}
    {{ std | remove: '<standard name="Action Research">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="Benchmarking" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/Benchmarking.md %}{% endcapture %}
    {{ std | remove: '<standard name="Benchmarking (of Software Systems)">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="CaseStudy" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/CaseStudy.md %}{% endcapture %}
    {{ std | remove: '<standard name="Case Study and Ethnography">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="CaseSurvey" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/CaseSurvey.md %}{% endcapture %}
    {{ std | remove: '<standard name="Case Survey">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="DataScience" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/DataScience.md %}{% endcapture %}
    {{ std | remove: '<standard name="Data Science">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="EngineeringResearch" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/EngineeringResearch.md %}{% endcapture %}
    {{ std | remove: '<standard name="Engineering Methods">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="Experiments" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/Experiments.md %}{% endcapture %}
    {{ std | remove: '<standard name="Experiments (with Human Participants)">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="GroundedTheory" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/GroundedTheory.md %}{% endcapture %}
    {{ std | remove: '<standard name="Grounded Theory">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="Longitudinal" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/Longitudinal.md %}{% endcapture %}
    {{ std | remove: '<standard name="Longitudinal">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="MetaScience" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/MetaScience.md %}{% endcapture %}
    {{ std | remove: '<standard name="Meta Science">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="MixedMethods" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/MixedMethods.md %}{% endcapture %}
    {{ std | remove: '<standard name="Mixed Methods">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="OptimizationStudies" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/OptimizationStudies.md %}{% endcapture %}
    {{ std | remove: '<standard name="Optimization Studies">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="QualitativeSurveys" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/QualitativeSurveys.md %}{% endcapture %}
    {{ std | remove: '<standard name="Qualitative Surveys (Interview Studies)">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="QuantitativeSimulation" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/QuantitativeSimulation.md %}{% endcapture %}
    {{ std | remove: '<standard name="Simulation">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="QuestionnaireSurveys" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/QuestionnaireSurveys.md %}{% endcapture %}
    {{ std | remove: '<standard name="Questionnaire Surveys">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="Replication" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/Replication.md %}{% endcapture %}
    {{ std | remove: '<standard name="Replication">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>
    
<div id="RepositoryMining" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/RepositoryMining.md %}{% endcapture %}
    {{ std | remove: '<standard name="Repository Mining">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="SystematicReviews" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/standards/SystematicReviews.md %}{% endcapture %}
    {{ std | remove: '<standard name="Systematic Reviews">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/standards/', '../docs/standards?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/supplements/', '../docs/supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>
</div>

<script>
function openStandard(evt, standardName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(standardName).style.display = "block";
  evt.currentTarget.className += " active";
  window.history.replaceState('', '', '?standard='+standardName);
  
  <!-- Dynamic footnote links -->
  let footnotes = document.getElementsByClassName("footnote");
  let textCount = 1;
  let refCount = 1;
  for (i = 0; i < footnotes.length; i++) {
	footnotes[i].removeAttribute("id");
	footnotes[i].removeAttribute("href");
	
	if (footnotes[i].closest(".tabcontent").style.display === "block") {
	  if (footnotes[i].classList.contains("footnote_text")) {
	    footnotes[i].setAttribute("id", "footnote_text" + textCount);
		footnotes[i].setAttribute("href", "#footnote_ref" + textCount);
		textCount++;
	  } else {
	    footnotes[i].setAttribute("id", "footnote_ref" + refCount);
		footnotes[i].setAttribute("href", "#footnote_text" + refCount);
		refCount++;
	  }
	}
  }
}
</script>