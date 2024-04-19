---
layout: default
title: Supplements
permalink: /docs/supplements
---   

<html>
<head>
<style>

main .wrapper {
  min-width: 100%;
  display: flex;
  padding: 0;
}

.supplements-list {
  flex: 0 0 260px;
  align-self: flex-start;
  top: 30px;
  position: sticky;
  padding-left: 30px;
  text-indent: -30px;
}

#Display {
  flex: 20%;
}

.supplements-list .nav-trigger, .supplements-list .menu-icon {
  display: none
}

@media screen and (max-width: 780px) {
  .supplements-list {
    left: 15px;
    background-color: #fdfdfd;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    text-align: left;
	position: fixed;
	top: 80px;
	padding-left: 0;
    text-indent: 0;
  }
  
  #Display {
	flex: 100%;
	word-break: break-word;
  }
  
  .supplements-list label[for="toc-trigger"] {
    display: block;
    float: left;
    width: 36px;
    height: 36px;
    cursor: pointer;
  }
  
  .supplements-list .menu-icon {
    display: block;
    float: left;
    width: 36px;
    padding-top: 6px;
    text-align: center;
  }
  
  .supplements-list .menu-icon>svg {
    fill: #424242;
  }
  
  .supplements-list input ~ .tab {
    clear: both;
    display: none;
	overflow: scroll;
	max-height: 75vh;
  }
  
  .supplements-list input:checked ~ .tab {
    display: block;
    padding-bottom: 5px;
  }
}

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

.active {
	font-weight: bold;
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
<nav class="supplements-list">

  <input type="checkbox" id="toc-trigger" class="nav-trigger">
  <label for="toc-trigger">
    <span class="menu-icon">
      <svg viewBox="0 0 18 15" width="18px" height="15px">
        <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"></path>
      </svg>
    </span>
  </label>

  <ul class="tab">
    <li>
      <h3>Ethics</h3>
      <ul>
	    <li><a id="EthicsEngineering_b" class="tablinks" href="#" onclick="openSupplement(event, 'EthicsEngineering')">Ethics (Engineering Research)</a></li>
	    <li><a id="EthicsHumanParticipants_b" class="tablinks" href="#" onclick="openSupplement(event, 'EthicsHumanParticipants')">Ethics (Human Participants)</a></li>
	    <li> <a id="EthicsSecondaryData_b" class="tablinks" href="#" onclick="openSupplement(event, 'EthicsSecondaryData')">Ethics (Secondary Data)</a></li>
	  </ul>
    </li>
    <li>
      <h3>Other</h3>
	  <ul>
	    <li><a id="InformationVisualization_b" class="tablinks" href="#" onclick="openSupplement(event, 'InformationVisualization')">Information Visualization</a></li>
	    <li><a id="InterRaterReliabilityAndAgreement_b" class="tablinks" href="#" onclick="openSupplement(event, 'InterRaterReliabilityAndAgreement')">Inter-Rater Reliability and Agreement</a></li>
	    <li><a id="OpenScience_b"	class="tablinks" href="#" onclick="openSupplement(event, 'OpenScience')">Open Science</a></li>
	    <li><a id="RegisteredReports_b" class="tablinks" href="#" onclick="openSupplement(event, 'RegisteredReports')">Registered Reports</a></li>
	    <li> <a id="Sampling_b" class="tablinks" href="#" onclick="openSupplement(event, 'Sampling')">Sampling</a></li>
	  </ul>
    </li>
  </ul>
</nav>

<div id="Display">
<div id="EthicsEngineering" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/supplements/EthicsEngineering.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="EthicsHumanParticipants" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/supplements/EthicsHumanParticipants.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>
  
  
<div id="EthicsSecondaryData" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/supplements/EthicsSecondaryData.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="InformationVisualization" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/supplements/InformationVisualization.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="InterRaterReliabilityAndAgreement" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/supplements/InterRaterReliabilityAndAgreement.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="OpenScience" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/supplements/OpenScience.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="RegisteredReports" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/supplements/RegisteredReports.md %}{% endcapture %}
    {{ std | replace: '- [ ]', '-' | markdownify }}
  </p>
</div>

<div id="Sampling" class="tabcontent">
  <p>
    {% capture std %}{% include_relative docs/supplements/Sampling.md %}{% endcapture %}
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