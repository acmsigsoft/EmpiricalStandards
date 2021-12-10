# The General Standard 

<standard name="General Standard">

## Application 

This general standard applies to all software engineering studies that
collect and analyze data. It should be complemented by more specific
guidelines where available.

## Initial Checks (Editor) 

Reviewers should only be invited for papers with the following
attributes. By assigning reviewers, the editor/chair/administrator is
confirming that the manuscript meets these criteria:
-   meets venue's requirements (e.g. length, author-blinding,
    appropriate keywords)
-   within the venue's scope
-   meets the minimum level of language quality acceptable to the
    journal
-   cites other scholarly works
-   presents new analysis not previously published in a peer-reviewed
    venue (i.e. preprints are fine)
-   does not include unattributed verbatim published text (i.e.
    plagiarism)

### Initial Checks (Reviewer)

Before beginning to review a paper, assigned reviewers should verify the
following.
-   reviewer has no conflicts of interest; if unsure, check with the
    chair or editor
-   reviewer has sufficient expertise; if unsure, check with the chair
    or editor and clarify what you can(not) evaluate
-   paper is clear enough (in language and presentation) to even review

## Specific Attributes 

### Essential Attributes 

<checklist name="Essential"> 

<intro>    
    
- [ ]	states a purpose, problem, objective, or research question  
- [ ]	explains why the purpose, problem, etc. is important (motivation)  
- [ ]	defines jargon, acronyms and key concepts  

<method>
    
- [ ]	methodology is appropriate (not necessarily optimal) for stated purpose, problem, etc.
- [ ]	describes in detail what, where, when and how data were collected (see the [Sampling Supplement](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/Sampling.md))
- [ ]	describes in detail how the data were analyzed


<results>
    
- [ ]	presents results
- [ ]	results directly address research questions
- [ ]	enumerates and validates assumptions of statistical tests used (if any)<sup>[1](#myfootnote1)</sup>

<discussion>
    
- [ ]	discusses implications of the results
- [ ]	discusses the study's limitations and threats to validity
- [ ]   states clear conclusions which are linked to research question (or purpose, etc.) and supported by explicit evidence (data/observations) or arguments

<other> 
    
- [ ]	contributes in some way to the collective body of knowledge <!-- (see Replications Supplement) -->
- [ ]	language is not misleading; any grammatical problems do not substantially hinder understanding
- [ ]	acknowledges and mitigates potential risks, harms, burdens or unintended consequences of the research (see the ethics supplements for [Engineering Research](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/EthicsEngineering.md), [Human Participants](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/EthicsHumanParticipants.md), or [Secondary Data](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/EthicsSecondaryData.md))
- [ ]	visualizations/graphs are not misleading (see the [Information Visualization Supplement](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/InformationVisualization.md))
- [ ]	complies with all applicable empirical standards

</checklist>
     
### Desirable Attributes

<checklist name="Desirable">

- [ ]	states epistemological stance<sup>[2](#myfootnote2)</sup>
- [ ]	summarizes and synthesizes a reasonable selection of related work (not every single relevant study)
- [ ]	clearly describes relationship between contribution(s) and related work
- [ ]	demonstrates appropriate statistical power (for quantitative work) or saturation (for qualitative work)
- [ ]	describes reasonable attempts to investigate or mitigate limitations
- [ ]	discusses study’s realism, assumptions and sensitivity of the results to its realism/assumptions
- [ ]	provides plausibly useful interpretations or recommendations for practice, education or research
- [ ]	concise, precise, well-organized and easy-to-read presentation
- [ ]	visualizations (e.g. graphs, diagrams, tables) advance the paper’s arguments or contribution
- [ ]	clarifies the roles and responsibilities of the researchers (i.e. who did what?)
- [ ]	provides an auto-reflection or assessment of the authors’ own work (e.g. lessons learned)
- [ ]   publishes the study in two phases: a plan and the results of executing the plan (see the [Registered Reports Supplement](https://github.com/acmsigsoft/EmpiricalStandards/tree/master/Supplements)) 
- [ ]	uses multiple raters, where philosophically appropriate, for making subjective judgments (see the [IRR/IRA Supplement](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/InterRaterReliabilityAndAgreement.md))

</checklist>
     
### Extraordinary Attributes 	
<checklist name="Extraordinary">

- [ ]	applies two or more data collection or analysis strategies to the same research question (see the [Multimethodology Standard](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/MixedMethods.md))
- [ ]	approaches the same research question(s) from multiple epistemological perspectives
- [ ]	innovates on research methodology while completing an empirical study

</checklist>

## General Quality Criteria 

There are no universal quality criteria. Each study should be assessed
against quality criteria appropriate for its methodology, as laid out in
the specific **empirical standards**. Avoid applying inappropriate
quality criteria (e.g. construct validity to a study with no constructs;
internal validity to a study with no causal relationships).

### Examples of Acceptable Deviations 

A study can only apply an **empirical standard** if an appropriate
standard exists. If no related standards exist, studies should apply
published guidance. If no appropriate guidance exists, reviewers should
apply the general standard and construct an ad hoc evaluation scheme for
the new method.

## Good Review Practices 

Reviewers evaluate a manuscripts' trustworthiness, importance and
clarity. The results must be, primarily, true (trustworthy) and,
secondarily, important. A paper that is trustworthy can be accepted even
if it is not important. A paper that is not trustworthy cannot be
accepted, even if it seems important. Papers that are both trustworthy
and important can have priority. Papers must be clear enough to judge
their trustworthiness and importance. Reviewers should endeavor to:
-   Reflect on and clearly state their own limitations and biases.
-   Clarify which are necessary and which are suggested changes.
    Ideally, separate them.
-   Identify parts of the paper that you cannot effectively judge or did
    not review.

## Reviewing Antipatterns
-   Applying empirical standards in a mechanical, inflexible, box-ticking or gotcha-like manner.
-   Rejecting a study because it uses a methodology for which no specific standard is available.
-   Skimming a manuscript instead of carefully reading each word and inspecting each figure and table.
-   Unprofessional or vitriolic tone, ad hominem attacks, disparaging or denigrating comments.
-   Allowing the authors' identities or affiliations to affect the review.
-   Focusing on superficial details of paper without engaging with its main claims or results.
-   Requesting additional analysis not directly related to a study's purpose or research question, 
    leading to results poorly linked to the article’s narrative.
-   Using sub-reviewers when the venue does not explicitly allow it.
-   Using the review to promote the reviewer's own views, theories, methods, or publications.

## Invalid Criticisms
-   Setting arbitrary minimum sample sizes or other data requirements, based on neither power analysis nor theoretical saturation.
-   Stating that a study: 
    - lacks detail without enumerating missing details;  
    - is of low quality without explaining specific problems; or  
    - is not new without providing citations to published studies that make **practically identical** contributions.  
-   Rejecting a study because it replicates or reproduces existing work. <!--(see Replications Supplement)-->
-   Cross-paradigmatic criticism (e.g. attacking an interpretivist study for not conforming to positivist norms).
-   Criticizing a study for limitations intrinsic to that kind of study or the methodology used (e.g. attacking a case study for low generalizability).
-   Rejecting a study because the reviewer would have used a different methodology or design.
-   Rejecting a study because it reports negative results.
    
## Research and Reporting Antipatterns
-   Attempting a study without reading, understanding and applying published guidelines for that kind of study.
-   Unreasonably small, underpowered or limited studies.
-   Hypothesizing After Results are Known (HARKing) in ostensibly confirmatory, (post-)positivist research.
-   Reporting only the subset of statistical tests that produce significant results (p-hacking).
-   Reporting---together in one paper---several immature or disjointed studies instead of one fully-developed study.
-   Unnecessarily dividing the presentation of a single study into many papers (salami-slicing).
-   Overreaching conclusions or generalizations; obfuscating, downplaying or dismissing a study's limitations.
-   Mentioning related work only to dismiss it as irrelevant; listing rather than synthesizing related work.
-   Acknowledging limitations but then writing implications and conclusions as though the limitations don't exist.

---    
<footnote><sup>[1](#myfootnote1)</sup> visual methods of checking assumptions are often as good as or better than statistical tests</footnote><br>
<footnote><sup>[2](#myfootnote2)</sup>e.g. positivism, falisificationism, interpretivism, critical realism, postmodernism</footnote><br>
</standard>
    
