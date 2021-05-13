---
layout: default
title: People
permalink: /people/
---   

{% for team_member in site.team %}
  <h3>{{ team_member.name }} - {{ team_member.title }} ({{ team_member.affiliation }})</h3>
  <p>{{ team_member.content | markdownify }}</p>
  <br>
  <h3>{{ team_member.name }} - {{ team_member.title }} ({{ team_member.affiliation }})</h3>
  <p>{{ team_member.content | markdownify }}</p>
  <br>
{% endfor %}
