---
layout: default      
title: About
permalink: /about/
---   

{% capture std %}{% include_relative README.md %}{% endcapture %}

{{ std | replace: "Repository Structure", "Standards Structure" | remove: "This repository contains the ACM SIGSOFT Empirical Standards for researchers, peer reviewers, editors and publications venues." | markdownify }}
