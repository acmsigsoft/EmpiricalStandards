# Empirical Standards

The _ACM SIGSOFT Empirical Standards for Software Engineering_ are a type of evidence standard. _Evidence standards_, like the CONSORT and PRISMA statements in health and medicine, the American Psychological Association's Journal Article Reporting Standards, and the WhatWorksClearinghouse in Education, are documents that attempt to express specific expectations for one or more types of research. Serious scientific communities use evidence standards to help distinguish good research from bad, and sufficient evidence from insufficient.  

Evidence standards can include expectations about the way research is conducted (method) and reported, as well as the type or quantity of evidence expected to justify a specific intervention. The Software Engineering (SE) Empirical Standards focus on the first two---they express the SE community's collective expectations for research methodology and reporting. Here _empirical_ denotes research that uses data rather than a mathematical proof or a philosophical treatise. The data can be qualitative or quantitative; real or synthetic. "Empirical" does **not** mean "positivist."

Our empirical standards build on evidence standards from other disciplines, but are significantly more ambitious: 
 * Unlike some previous attempts, our standards are method-specific. Software engineering researchers use many different research methods. A single standard for all empirical research would either be biased against some methods or radically incomplete. We have totally different expectations for a controlled experiment and an ethnographic case study. Therefore, the standard for controlled experiments is quite different from the standard for case studies. Our standards cover more methods (and philosophical positions) than any other field's.  
 * Our empirical standards are models of the software engineering community's expectations. That is, most of a standard should appear reasonable to most of the subset of our community that's familiar with that kind of research. The standards should both reflect, and help build, consensus. Therefore, they are hosted on github, and any researcher can report issues and directly implement improvements.
 * Evidence standards can be difficult to apply. Therefore, we have prototyped tools to help authors and reviewers check their manuscripts against relevant standards.
  
## What are Empirical Standards for?

The empirical standards have three main uses:

### 1. Fixing peer review
Scholarly peer review is simultaneously “the lynchpin about which the whole business of science is pivoted" [1] and "prejudiced, capricious, inefficient, ineffective, and generally unscientific” [2]. Many of the problems with peer review boiled down to reviewers inventing their own evaluation criteria. Devising appropriate evaluation criteria for any given manuscript is extraordinarily difficult, so most reviewers' criteria are not very good. Reviewers create criteria that are inconsistent with other reviewers', the venue's, the editor's, the methodological literature and---crucially---the author's. In effect, the real criteria by which our research is judged are not merely opaque; they don't even exist until after the manuscript is submitted. This is why peer review is so frustrating, unpredictable, and unscientific. 

Empirical standards are the secret to fixing this situation. With the standards, all the reviewers use the same criteria and the authors know the criteria in advance. Used appropriately, the standards discourage reviewers from either accepting research with fatal flaws or rejecting research based on bogus criteria. 

### 2. Designing better studies 

Obviously, if authors have these criteria in advance, they can use the criteria to design more rigorous studies. There's a lot to remember when designing a study, and robust methodological training is rare in our community. The standards provide concise, convenient checklists to help us remember all the core practices for a given method.   

### 3. Educating researchers

The standards can also be used for educational purposes. While they cannot replace a good methods textbook, the lists of references and exemplars can be used to construct reading lists, and the specific attributes can be used to shepherd graduate students through their study designs and paper write-ups. Our tools are designed to help authors and reviewers access more information about unfamiliar concepts. 

## Creation and Maintenance

You can learn more about how the standards were created and are maintained by reading the empirical standards report [3].

## Attribute Customization and Validation
Please refer to the following [ReadMe File](/docs/ReadMe.md) for detailed instructions

<!--
## Repository Structure
The standards themselves can be found in the _docs_ directory. There is a **General Standard**, which applies to all empirical research, and a set of specific standards, which apply to specific research methods such as **Case Studies**, **Controlled Experiments** and **Systematic Literature Reviews**.
In the _Supplements_ directory, you will find a set of supplemental standards that address cross-cutting concerns including **Information Visualization**,  **Sampling** and **Inter-rater Reliability and Agreement**. 
In the _Resources_ directory you'll find slide decks, links to videos and other materials about the standards.
In the main directory: 
 - Contributing.md gives advice on contributing to the standards
 - Empirical_Standards_Report.pdf explains how the standards were created, their costs and benefits, how they should be used and governed, and the scientific basis of the empirical standards initiative. 
 - HowToCite.md explains how to reference the standards 
 - LICENSE.md explains the creative commons license used by the standards
-->

## References

[1] John M Ziman. 1968. Public knowledge: An essay concerning the social dimension of science. Vol. 519. CUP Archive. [doi:10.1063/1.3035233](https://doi.org/10.1063/1.3035233).<br>
[2] Paul Ralph. 2016. Practical suggestions for improving scholarly peer review quality and reducing cycle times. _Communications of the Association for Information Systems_ 38, 1 (2016), Article 13, [doi:10.17705/1CAIS.03813](http://doi.org/10.17705/1CAIS.03813).<br>
[3] Paul Ralph et al. 2020 "Empirical Standards for Software Engineering Research." [_arXiv_:2010.03525](https://arxiv.org/abs/2010.03525).<br>
