# Questionnaire Surveys 
<standard name="Questionnaire Surveys">



*<desc>A study in which a sample of respondents answer a series of (mostly structured) questions,
typically through a computerized or paper form</desc>*


## Application

This guideline applies to studies in which:

-   a sample of participants answer predefined, mostly closed-ended
    questions (typically online or on paper)
-   researchers systematically analyze participants' answers

This standard does not apply to questionnaires comprising predominately
open-ended questions<sup>[1](#myfootnote1)</sup>, literature surveys (see the **Systematic
Review Standard**), longitudinal or repeated measures studies (see the
**Longitudinal Studies Standard**), or the demographic questionnaires
typically given to participants in controlled experiments (see the
**Experiments Standard**).

## Specific Attributes 

### Essential Attributes 
<checklist name="Essential">

<intro>

<method>

- [ ]	identifies the target population and defines the sampling strategy (see the [Sampling Supplement](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/Sampling.md))
- [ ]	describes how the questionnaire instrument was created
- [ ]	describes how participants were selected or recruited (e.g. sampling frame, advertising, invitations, incentives)
- [ ]	step-by-step, systematic, replicable description of data collection and analysis
- [ ]	describes how responses were managed/monitored, including contingency actions for non-responses and drop-outs
- [ ]	EITHER: measures constructs using (or adapting) validated scales    
	 OR: analyzes construct validity (including content, convergent, discriminant and predictive validity) ex post<sup>[3](#myfootnote3)</sup>
- [ ]	explains handling of missing data (e.g. imputation, weighting adjustments, discarding)

<results>

- [ ]	analyzes response rates

<discussion>

- [ ]	acknowledges generalizability threats; discusses how respondents may differ from target population

<other>	
	
- [ ]	provides the questionnaire instrument (as an appendix or supplementary materials) 	
- [ ]	the questionnaire design matches the research aims and the target population<sup>[2](#myfootnote2)</sup>
	
</checklist>
     
### Desirable Attributes 	
<checklist name="Desirable">

- [ ]	provides supplementary materials including instrument(s), code books, analysis scripts and dataset(s)
- [ ]	characterizes the target population including demographic information (e.g. culture, knowledge)
- [ ]	accounts for the principles of research ethics (e.g. informed consent, re-identification risk)
- [ ]	explains and justifies instrument design and choice of scales (e.g. by research objectives or by analogy to similar studies)
- [ ]	validates whether the instrument's items, layout, duration, and technology are appropriate (e.g. using pilots, test-retest, or expert and non-expert reviews)
- [ ]	reports how the instrument has evolved through the validation process (if at all)
- [ ]	analyzes response bias (quantitatively)
- [ ]   includes attention-check items in the questionnaire, and excludes participants who fail one or more of these checks
- [ ]	applies techniques for improving response rates (e.g. incentives, reminders, targeted advertising)
- [ ]	discusses possible effects of incentives (e.g. on voluntariness, response rates, response bias) if used
- [ ]	describes the stratification of the analysis (if stratified sampling is used)
- [ ]	defines and estimates the size of the population strata (if applicable)
- [ ]	clearly distinguishes evidence-based results from interpretations and speculation<sup>[4](#myfootnote4)</sup>
 </checklist>
     
### Extraordinary Attributes 	
<checklist name="Extraordinary">

- [ ]	provides feasibility check of the anticipated data analysis techniques
- [ ]	reports on the scale validation in terms of dimensionality, reliability, and validity of measures
- [ ]   longitudinal design in which each respondent participates two or more times	
</checklist>

## General Quality Criteria 

Survey studies should address quantitative quality criteria such
as **internal validity**, **construct validity**, **external validity**,
**reliability** and **objectivity** (see **Glossary**).

## Variations 

-   **Descriptive surveys** provide a detailed account of the properties
    of a phenomenon or population.
-   **Exploratory surveys** generate insights, hypotheses or models for
    further research.
-   **Confirmatory surveys** testing formal (e.g. causal) propositions
    to explain a phenomenon.

## Examples of Acceptable Deviations
- Ommitting part of a questionnaire instrument from supplementary materials due to copyright issues (in which case the paper should cite the source of the questions)
- Doesn't describe handling of drop-outs or missing data because there were none

## Invalid Criticism 

-   Not reporting response rate for open public subscription surveys
    (i.e. surveys open to the anonymous public so that everyone with a
    link---typically broadcasted among social networks---can
    participate).
-   Failure to release full data sets despite the data being sensitive.
-   Claiming the sample size is too small without justifying why the
    sample size is insufficient to answer the research questions.
-   Criticizing the relevance of a survey on the basis that responses
    only capture general people's perceptions.
-   The results are considered controversial or hardly surprising.
-   The results do not accord with the reviewer's personal experience or
    previous studies.

## Suggested Readings 

Don Dillman, Jolene Smyth, and Leah Christian. 2014. *Internet, phone,
mail, and mixed-mode surveys: the tailored design method.* John Wiley &
Sons.
	
Daniel Graziotin, Per Lenberg, Robert Feldt, and Stefan Wagner. 2021. Psychometrics in behavioral software engineering: A methodological introduction with guidelines. _ACM Transactions on Software Engineering and Methodology (TOSEM)_, 31(1), 1-36. DOI:10.1145/3469888

Mark Kasunic. 2005. Designing an effective survey. Tech report
\#CMU/SEI-2005-GB-004, Carnegie-Mellon University, Pittsburgh, USA.

Jefferson Seide Molléri, Kai Petersen, and Emilia Mendes. 2020. An
empirically evaluated checklist for surveys in software engineering.*
Information and Software Technology*. 119.
	
Gary C. Moore, and Izak Benbasat. Development of an instrument to measure the perceptions of adopting an information technology innovation. *Information systems research* 2.3 (1991): 192-222.	

Paul Ralph and Ewan Tempero. 2018. Construct Validity in Software
Engineering Research and Software Metrics. In *Proceedings of the 22nd
International Conference on Evaluation and Assessment in Software
Engineering (EASE'18)*, 13–23. DOI:10.1145/3210459.3210461

Stefan Wagner, Daniel Mendez, Michael Felderer, Daniel Graziotin, Marcos
Kalinowski. 2020. Challenges in Survey Research. In: _Contemporary Empirical
Methods in Software Engineering_, Springer.
		
Marco Torchiano, Daniel Méndez, Guilherme Horta Travassos, and Rafael
Maiani de Mello. 2017. Lessons learnt in conducting survey research. In
*Proceedings of the 5th International Workshop on Conducting Empirical
Studies in Industry (CESI '17)*, 33–39. DOI:10.1109/CESI.2017.5

Torchiano Marco and Filippo Ricca. 2013. Six reasons for rejecting an
industrial survey paper. In *2013 1st International Workshop on
Conducting Empirical Studies in Industry (CESI)*, 21–26.

## Exemplars 

Jingyue Li, Reidar Conradi, Odd Petter Slyngstad, Marco Torchiano,
Maurizio Morisio, and Christian Bunse. A State-of-the-Practice Survey on
Risk Management in Development with Off-The-Shelf Software Components.
In *IEEE Transactions on Software Engineering*. 34, 2 (2008), 271–286.

D. Méndez Fernández, Stefan Wagner, Marcos Kalinowski, Michael Felderer,
Priscilla Mafra, Antonio Vetrò, Tayana Conte et al. Naming the Pain in
Requirements Engineering: Contemporary Problems, Causes, and Effects in
Practice. In *Empirical software engineering*. 22, 5 (2016), 2298–2338.

Paul Ralph, Sebastian Baltes, Gianisa Adisaputri, Richard Torkar,
Vladimir Kovalenko, Marcos Kalinowski, et al. Pandemic Programming: How
COVID-19 affects software developers and how their organizations can
help. In *Empirical Software Engineering*, 25, 6, 2020, 4927–4961. DOI:
10.1007/s10664-020-09875-y

Stefan Wagner, Daniel Méndez Fernández, Michael Felderer, Antonio Vetrò,
Marcos Kalinowski, Roel Wieringa, et al. 2019. Status Quo in
Requirements Engineering: A Theory and a Global Family of Surveys. *ACM
Trans. Softw. Eng. Methodol.* 28, 2, Article 9 (April 2019), 48 pages.
DOI:10.1145/3306607

---
<footnote><sup>[1](#myfootnote1)</sup> There is currently no standard for predominately open-ended questionnaire surveys. One exemplar readers could draw from is: Daniel Graziotin, Fabian Fagerholm, Xiaofeng Wang, and Pekka Abrahamsson. 2018. "What happens when software developers are (un)happy." Journal of Systems and Software 140, 32-47.</footnote><br>
<footnote><sup>[2](#myfootnote2)</sup> questions are mapped to research objectives and their wording and format is appropriate for their audience</footnote><br>
<footnote><sup>[3](#myfootnote3)</sup> For advice on analyzing construct validity, see recommended readings Graziotin et al. (2021) and Ralph and Tempero (2018)</footnote <br>
<footnote><sup>[4](#myfootnote4)</sup> Simply separating results and discussion into different sections is typically sufficient. No speculation in the results section.</footnote><br>
</standard>
