---
layout: default
title: Supplements
permalink: /Supplements/
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

.tab h3 {
  padding: 0;
  margin-bottom: 0;
  font-size: 16px;
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
function openSupplementFromURL(evt) {
  supplementName = getParameterByName('supplement')[0].replaceAll('"', '');

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(supplementName).style.display = "block";
  document.getElementById(supplementName+'_b').className += " active";
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

<body onload="openSupplementFromURL(event)">

<!-- Supplements list/table of contents -->
<ul class="tab">
  <li>
    <h3>Ethics</h3>
    <ul>
	  <li><a id="EthicsEngineering_b" class="tablinks" href="#Display" onclick="openSupplement(event, 'EthicsEngineering')">Ethics (Engineering Research)</a></li>
	  <li><a id="EthicsHumanParticipants_b" class="tablinks" href="#Display" onclick="openSupplement(event, 'EthicsHumanParticipants')">Ethics (Human Participants)</a></li>
	  <li> <a id="EthicsSecondaryData_b" class="tablinks" href="#Display" onclick="openSupplement(event, 'EthicsSecondaryData')">Ethics (Secondary Data)</a></li>
	</ul>
  </li>
  <li>
    <h3>Other</h3>
	<ul>
	  <li><a id="InformationVisualization_b" class="tablinks" href="#Display" onclick="openSupplement(event, 'InformationVisualization')">Information Visualization</a></li>
	  <li><a id="InterRaterReliabilityAndAgreement_b" class="tablinks" href="#Display" onclick="openSupplement(event, 'InterRaterReliabilityAndAgreement')">Inter-Rater Reliability and Agreement</a></li>
	  <li><a id="OpenScience_b"	class="tablinks" href="#Display" onclick="openSupplement(event, 'OpenScience')">Open Science</a></li>
	  <li><a id="RegisteredReports_b" class="tablinks" href="#Display" onclick="openSupplement(event, 'RegisteredReports')">Registered Reports</a></li>
	  <li> <a id="Sampling_b" class="tablinks" href="#Display" onclick="openSupplement(event, 'Sampling')">Sampling</a></li>
	</ul>
  </li>
</ul>

<div id="Display">
<div id="EthicsEngineering" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/EthicsEngineering.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="EthicsHumanParticipants" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/EthicsHumanParticipants.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>
  
  
<div id="EthicsSecondaryData" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/EthicsSecondaryData.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="InformationVisualization" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/InformationVisualization.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="InterRaterReliabilityAndAgreement" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/InterRaterReliabilityAndAgreement.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="OpenScience" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/OpenScience.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="RegisteredReports" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/RegisteredReports.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="Sampling" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/Sampling.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>
</div>

<script>
function openSupplement(evt, supplementName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(supplementName).style.display = "block";
  evt.currentTarget.className += " active";
  window.history.replaceState('', '', '?supplement='+supplementName);
}
</script>