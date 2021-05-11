---
layout: default      
title: About
permalink: /about/
---   

{% capture std %}{% include_relative README.md %}{% endcapture %}

{{ std | markdownify }}
