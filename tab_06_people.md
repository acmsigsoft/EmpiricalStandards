---
layout: default
title: People
permalink: /people/
---   
<h1>List of Contributer</h1>
<h3>Editor</h3>
{% for team_member in site.team %}
  <h3>{{ team_member.name }} - {{ team_member.title }} ({{ team_member.affiliation }})</h3>
  <p>{{ team_member.content | markdownify }}</p>
  <br>
{% endfor %}
