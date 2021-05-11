---
layout: default
title: Supplements
permalink: /Supplements/
---   

<html>
<head>
<style>
.tablinks {
  background-color: #inherit;
  color: black;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 4px 10px;
  font-size: 17px;
  height: 50px;
  width: 25%;
}

.tablinks:hover {
  background-color: #ddd;
}

.tab {
  padding-bottom: 80px;
}

.tab button.active {
  background-color: #ccc;
}

.tabcontent {
  color: black;
  display: none;
  padding: 10px 20px;
  height: 100%;
}
</style>
</head>
<body>

<div class="tab">
  <button class="tablinks" onclick="openStandard(event, 'EthicsHumanParticipants')">Ethics (Human Participants)</button>
  <button class="tablinks" onclick="openStandard(event, 'EthicsSecondaryData')">Ethics (Secondary Human Data)</button>
  <button class="tablinks" onclick="openStandard(event, 'InformationVisualization')">Information Visualization</button>
  <button class="tablinks" onclick="openStandard(event, 'InterRaterReliabilityAndAgreement')">Inter-Rater Reliability and Agreement</button>
  <button class="tablinks" onclick="openStandard(event, 'OpenScience')">Open Science</button>
  <button class="tablinks" onclick="openStandard(event, 'RegisteredReports')">Registered Reports</button>
  <button class="tablinks" onclick="openStandard(event, 'Sampling')">Sampling</button>
</div>

<div id="EthicsHumanParticipants" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/EthicsHumanParticipants.md %}{% endcapture %}
    {{ std | markdownify }}
  </p>
</div>

<div id="EthicsSecondaryData" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/EthicsSecondaryData.md %}{% endcapture %}
    {{ std | markdownify }}
  </p>
</div>

<div id="InformationVisualization" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/InformationVisualization.md %}{% endcapture %}
    {{ std | markdownify }}
  </p>
</div>

<div id="InterRaterReliabilityAndAgreement" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/InterRaterReliabilityAndAgreement.md %}{% endcapture %}
    {{ std | markdownify }}
  </p>
</div>

<div id="OpenScience" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/OpenScience.md %}{% endcapture %}
    {{ std | markdownify }}
  </p>
</div>

<div id="RegisteredReports" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/RegisteredReports.md %}{% endcapture %}
    {{ std | markdownify }}
  </p>
</div>

<div id="Sampling" class="tabcontent">
  <p>
    {% capture std %}{% include_relative Supplements/Sampling.md %}{% endcapture %}
    {{ std | markdownify }}
  </p>
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
}
</script>
   
</body>
</html> 
