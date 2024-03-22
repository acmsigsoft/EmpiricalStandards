---
layout: default
title: Standards
permalink: /docs/
---   

<html>
<head>
<style>

.tablinks {
  padding: 4px 10px;
  font-size: 16px;
}

.tab, .tab ul {
  list-style-type: none;
}

.tab p {
  padding: 0;
  margin-bottom: 0;
}

.tablinks:hover {
  background-color: #ddd;
}

.tabcontent {
  color: black;
  display: none;
  padding: 10px 20px;
  height: 100%;
}

</style>
<script src="../form_generator/js/read_standards.js"></script>
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
<ul class="tab">
  <li>
	General
	<ul>
		<li><a id="GeneralStandard_b"        class="tablinks" href="#Display" onclick="openStandard(event, 'GeneralStandard')">General Standard</a></li>
		<li><a id="EngineeringResearch_b"    class="tablinks" href="#Display" onclick="openStandard(event, 'EngineeringResearch')">Engineering Research</a></li>
		<li><a id="MixedMethods_b"           class="tablinks" href="#Display" onclick="openStandard(event, 'MixedMethods')">Mixed Methods</a></li>
	</ul>
  </li>
  <li>
	Qualitative
	<ul>
		<li><a id="ActionResearch_b"         class="tablinks" href="#Display" onclick="openStandard(event, 'ActionResearch')">Action Research</a></li>
		<li><a id="CaseStudy_b"              class="tablinks" href="#Display" onclick="openStandard(event, 'CaseStudy')">Case Study</a></li>
		<li><a id="GroundedTheory_b"         class="tablinks" href="#Display" onclick="openStandard(event, 'GroundedTheory')">Grounded Theory</a></li>
		<li><a id="QualitativeSurvey_b"     class="tablinks" href="#Display" onclick="openStandard(event, 'QualitativeSurveys')">Qualitative Survey</a></li>
	</ul>
  </li>
  <li>
	Quantitative
	<ul>
		<li><a id="Benchmarking_b"           class="tablinks" href="#Display" onclick="openStandard(event, 'Benchmarking')">Benchmarking</a></li>
		<li><a id="DataScience_b"            class="tablinks" href="#Display" onclick="openStandard(event, 'DataScience')">Data Science</a></li>
		<li><a id="Experiment_b"            class="tablinks" href="#Display" onclick="openStandard(event, 'Experiments')">Experiment</a></li>
		<li><a id="Longitudinal_b"           class="tablinks" href="#Display" onclick="openStandard(event, 'Longitudinal')">Longitudinal</a></li>
		<li><a id="OptimizationStudy_b"    	class="tablinks" href="#Display" onclick="openStandard(event, 'OptimizationStudies')">Optimization Study</a></li>
		<li><a id="QuantitativeSimulation_b" class="tablinks" href="#Display" onclick="openStandard(event, 'QuantitativeSimulation')">Quantitative Simulation</a></li>
		<li><a id="QuestionnaireSurvey_b"   class="tablinks" href="#Display" onclick="openStandard(event, 'QuestionnaireSurveys')">Questionnaire Survey</a></li>
		<li><a id="RepositoryMining_b"       class="tablinks" href="#Display" onclick="openStandard(event, 'RepositoryMining')">Repository Mining</a></li>
	</ul>
  </li>
  <li>
	Literature Review
	<ul>
		<li><a id="CaseSurvey_b"             class="tablinks" href="#Display" onclick="openStandard(event, 'CaseSurvey')">Case Survey</a></li>
		<li><a id="SystematicReviews_b"      class="tablinks" href="#Display" onclick="openStandard(event, 'SystematicReviews')">Systematic Review</a></li>
	</ul>
  </li>
  <li>
	Other
	<ul>
		<li><a id="MetaScience_b"            class="tablinks" href="#Display" onclick="openStandard(event, 'MetaScience')">Meta Science</a></li>
		<li><a id="Replication_b"            class="tablinks" href="#Display" onclick="openStandard(event, 'Replication')">Replication</a></li>
	</ul>
  </li>
</ul>

<div id="Display">
<div id="GeneralStandard" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/GeneralStandard.md %}{% endcapture %}
    {{ std | remove: '<standard name="General Standard">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="ActionResearch" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/ActionResearch.md %}{% endcapture %}
    {{ std | remove: '<standard name="Action Research">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="Benchmarking" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/Benchmarking.md %}{% endcapture %}
    {{ std | remove: '<standard name="Benchmarking (of Software Systems)">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="CaseStudy" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/CaseStudy.md %}{% endcapture %}
    {{ std | remove: '<standard name="Case Study and Ethnography">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="CaseSurvey" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/CaseSurvey.md %}{% endcapture %}
    {{ std | remove: '<standard name="Case Survey">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="DataScience" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/DataScience.md %}{% endcapture %}
    {{ std | remove: '<standard name="Data Science">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="EngineeringResearch" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/EngineeringResearch.md %}{% endcapture %}
    {{ std | remove: '<standard name="Engineering Methods">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="Experiments" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/Experiments.md %}{% endcapture %}
    {{ std | remove: '<standard name="Experiments (with Human Participants)">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="GroundedTheory" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/GroundedTheory.md %}{% endcapture %}
    {{ std | remove: '<standard name="Grounded Theory">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="Longitudinal" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/Longitudinal.md %}{% endcapture %}
    {{ std | remove: '<standard name="Longitudinal">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="MetaScience" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/MetaScience.md %}{% endcapture %}
    {{ std | remove: '<standard name="Meta Science">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="MixedMethods" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/MixedMethods.md %}{% endcapture %}
    {{ std | remove: '<standard name="Mixed Methods">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="OptimizationStudies" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/OptimizationStudies.md %}{% endcapture %}
    {{ std | remove: '<standard name="Optimization Studies">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="QualitativeSurveys" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/QualitativeSurveys.md %}{% endcapture %}
    {{ std | remove: '<standard name="Qualitative Surveys (Interview Studies)">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="QuantitativeSimulation" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/QuantitativeSimulation.md %}{% endcapture %}
    {{ std | remove: '<standard name="Simulation">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="QuestionnaireSurveys" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/QuestionnaireSurveys.md %}{% endcapture %}
    {{ std | remove: '<standard name="Questionnaire Surveys">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="Replication" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/Replication.md %}{% endcapture %}
    {{ std | remove: '<standard name="Replication">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>
    
<div id="RepositoryMining" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/RepositoryMining.md %}{% endcapture %}
    {{ std | remove: '<standard name="Repository Mining">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
  </p>
</div>

<div id="SystematicReviews" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/SystematicReviews.md %}{% endcapture %}
    {{ std | remove: '<standard name="Systematic Reviews">' | remove: '<checklist name="Essential">' | remove: '<checklist name="Desirable">' | remove: '<checklist name="Extraordinary">' | remove: '</checklist>' | remove: '</standard>' | remove: '<footnote>' | remove: '</footnote>' | remove: '<intro>' | remove: '<method>' | remove: '<results>' | remove: '<discussion>' | remove: '<other>' | replace: '- [ ]', '-' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/', '../docs?standard=' | replace: 'https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/', '../Supplements?supplement=' | replace: '.md', '' | markdownify }}
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
}
</script>