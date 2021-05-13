---
layout: default
title: People
permalink: /people/
---   
<h1>List of Contributors</h1>
<h2>Editor</h2>
{% for team_member in site.team %}
  <h3>{{ team_member.name }} - {{ team_member.title }} ({{ team_member.affiliation }})</h3>
  <p>{{ team_member.content | markdownify }}</p>
  <br>
  <h2>Content Contributors</h2>
  <h3>{{ team_member.name }} - {{ team_member.title }} ({{ team_member.affiliation }})</h3>
  <p>{{ team_member.content | markdownify }}</p>
  <br>
  <h2>Technical Contributors</h2>
  <h3>{{ team_member.name }} - {{ team_member.title }} ({{ team_member.affiliation }})</h3>
  <p>{{ team_member.content | markdownify }}</p>
  <br>
  <h3>{{ team_member.name }} - {{ team_member.title }} ({{ team_member.affiliation }})</h3>
  <p>{{ team_member.content | markdownify }}</p>
  <br>
{% endfor %}
