# Longitudinal Studies
<standard name="Longitudinal">

*A study focusing on the changes in and evolution of a phenomenon over time*

## Application

This standard applies to studies that involve repeated observations of the same variables (e.g., productivity or technical debt) over a period of time. Longitudinal studies include the analysis of datasets over time, such as the analysis of the evolution of the code. Longitudinal studies require to maintain identifiability of subjects (humans or artifacts) between data collection waves and to use at least two waves.

For cross-sectional analysis, consider the **Exploratory Data Science Standard** or the **Experiments Standard** (if variables are manipulated).

## Specific Attributes

### Essential Attributes 
<checklist name="Essential">

- [ ] subjects (humans or artifacts) are identifiable between waves
- [ ] uses at least two data collection waves
- [ ] determines the appropriate number of waves based on the natural oscillation of the research phenomenon<sup>[1](#myfootnote1)</sup>
- [ ] the data analysis strategy is appropriate for the interdependent nature of the data<sup>[2](#myfootnote2)</sup>
- [ ] justifies the data analysis strategy<sup>[3](#myfootnote3)</sup>
- [ ] discusses the critical alpha levels<sup>[4](#myfootnote4)</sup>
- [ ] determines appropriate sample size using a power calculation<sup>[5](#myfootnote5)</sup>
- [ ] describes the subjects (e.g., demographic information in the case of humans)<sup>[6](#myfootnote6)</sup>
- [ ] describes data loss throughout the different waves
- [ ] describes the research instrument (e.g., survey, software repository) and provide it as supplementary material
- [ ] discusses the operationalization of the research model (i.e. construct validity)<sup>[7](#myfootnote7)</sup>
- [ ] reports treatment of missing data
</checklist>
    
### Desirable Attributes
<checklist name="Desirable">

- [ ] provides supplementary materials including the data sets, data collection scripts or instruments, analytical scripts, a description of how to reproduce the work and any other materials used
- [ ] either builds new theory or tests existing theory
- [ ] investigates causality using the longitudinal nature of the data to establish precedence and statistically controlling for third-variable explanations
- [ ] discusses potential confounding factors (for inferential analyses) that cannot be statistically controlled
- [ ] discusses data (in)consistency across waves (e.g., test-retest reliability)
- [ ] examines differences in distributions between waves (and uses an appropriate parametric or non-parametric data analysis strategy)
- [ ] describes the cost of gathering data and any incentives used

</checklist>
    
### Extraordinary Attributes
<checklist name="Extraordinary">

- [ ] uses a multi-stage selection process to identify the study's subjects<sup>[8](#myfootnote8)</sup>
</checklist>

## General Quality Criteria

Reliability, internal validity, conclusion validity, construct validity, and external validity.

Longitudinal studies seek to maximize their internal validity. In this regard, it is essential to consider two main aspects: the sample size and the selected population&#39;s representativeness (humans or artifacts). The sample needs to reflect the target population (e.g., software developers, Java libraries).

## Antipatterns

- Subject loss between waves is too high, leading to a severely underpowered study.
- The period between waves does not match the phenomenon's natural cycles
- Treating longitudinal data as cross-sectional

## Variations

- **Experience sampling** provides a highly specific understanding of a phenomenon through multiple repeated measurements per day over a short period (typically one to three weeks). The focus is on the in-the-moment assessment rather than reflective assessment (van Berkel et al. 2017).

## Invalid Criticisms

- Claiming that the time span between measurements is too short or too long.
- Claiming that the number of waves is inadequate without a reasoned explanation.
- Claiming that the sample size is too small without performing a _post hoc_ power calculation.
- Claiming that the paper with a modest number of comparisons should have used more conservative alphas or adopted a Bayesian approach.
- Complaining about generalizability when the paper clearly acknowledges limitations to generalizability.

## Notes

- Cohort Studies are a type of analytical observational study where researchers investigate the relationship between an independent and dependent variable. This is done by observing subjects over time and comparing groups with different levels of exposure. However, they follow a more strict set of rules than presented here.

## Suggested Readings

- Franz Faul, et al. Statistical power analyses using G\* Power 3.1: Tests for correlation and regression analyses. In _Behavior Research Methods_. 41,4 (2009), 1149–1160.  
- Flavius Kehr and Tobias Kowatsch. 2015. Quantitative Longitudinal Research: A Review of IS Literature, and a Set of Methodological Guidelines. In _Proceedings of the 23rd European Conference on Information Systems_ (ECIS). Münster, Germany.  
- Hall, Sharon M., et al. &quot;Statistical analysis of randomized trials in tobacco treatment: longitudinal designs with dichotomous outcome.&quot; Nicotine &amp; Tobacco Research 3.3 (2001): 193–202.  
- Duncan, Susan C., Terry E. Duncan, and Hyman Hops. &quot;Analysis of longitudinal data within accelerated longitudinal designs.&quot; Psychological Methods 1.3 (1996): 236.  
- Langfred, Claus W. &quot;The downside of self-management: A longitudinal study of the effects tf conflict on trust, autonomy, and task interdependence in self-managing teams.&quot; Academy of Management Journal 50.4 (2007): 885–900.  
- Benner, Mary J., and Michael Tushman. &quot;Process management and technological innovation: A longitudinal study of the photography and paint industries.&quot; Administrative Science Quarterly 47.4 (2002): 676–707.  
- Joseph P. Simmons, Leif D. Nelson, and Uri Simonsohn. False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. In _Psychological Science._ 22,11 (2011), 1359—1366.  
- Niels van Berkel, Denzil Ferreira, and Vassilis Kostakos. The experience sampling method on mobile devices. In _ACM Computing Surveys_. 50,6 (2017), 1—40.

## Exemplars

- Daniel Russo, Paul H.P. Hanel, Seraphina Altnickel, and Niels van Berkel. Predictors of Well-being and Productivity among Software Professionals during the COVID-19 Pandemic — A Longitudinal Study. _Empirical Software Engineering_ (2021). 
- Chandrasekar Subramaniam, Sen Ravi, and Matthew L. Nelson. Determinants of open source software project success: A longitudinal study. In _Decision Support Systems._ 46, 2 (2009), 576—585.  
- Davide Fucci, Simone Romano, Maria Teresa Baldassarre, Danilo Caivano, Giuseppe Scanniello, Burak Turhan, Natalia Juristo. A longitudinal cohort study on the retainment of test-driven development. _International Symposium on Empirical Software Engineering and Measurement._ (2018), 1-10  
- Jingyue Li, Nils B Moe, and Tore Dybå. 2010. Transition from a plan-driven process to Scrum: a longitudinal case study on software quality. _International symposium on empirical software engineering and measurement_. (2010), 1-10  
- Laurie McLeod, Stephen MacDonell, and Bill Doolin.Qualitative Research on software development: a longitudinal case study methodology. _Empirical software engineering_ 16, 4 (2011), 430–459.  
- Jari Vanhanen, Casper Lassenius, and Mika V Mantyla. Issues and tactics when adopting pair programming: A longitudinal case study. _International Conference on Software Engineering Advances_. (2007)  
- Donald E Harter, Chris F Kemerer, and Sandra A Slaughter. 2012. Does software process improvement reduce the severity of defects? A longitudinal field study. _IEEE Transactions on Software Engineering_ 38, 4 (2012), 810–827.

---
<footnote><sup>[1](#myfootnote1)</sup> On the concept of natural oscillation cf. Kehr &amp; Kowatsch, 2015.</footnote><br>
<footnote><sup>[2](#myfootnote2)</sup> Several different statistical approaches are used to analyze longitudinal data (Kehr &amp; Kowatsch provide a partial overview).</footnote><br>
<footnote><sup>[3](#myfootnote3)</sup> Although there might not be one best method for a specific problem, it should still be discussed on a subjective level (e.g., why it fits best to the research question) and at an objective level (e.g., data normality).</footnote><br>
<footnote><sup>[4](#myfootnote4)</sup> The choice of thresholds (e.g., _p_-values \&lt; 0.05) should be discussed, to avoid Type I errors. Typically, longitudinal analyses deal with many variables and multiple comparisons, increasing the likelihood to obtain results within traditionally acceptable thresholds. For this reason, authors are advised to adjust the critical alpha level (e.g., using as a threshold _p_-values \&lt; 0.001) or use Bayesian statistics (Simmons et al., 2011).</footnote><br>
<footnote><sup>[5](#myfootnote5)</sup> Determining the sample size is of utter importance to avoid Type II errors. Thus, authors might define their sample size using a priori power calculations. At the same time, reviewers can control adequate size through a post hoc analysis (Faul, 2019).</footnote><br>
<footnote><sup>[6](#myfootnote6)</sup> The research design should explicitly state how the sample has been selected and filtered out through a selection process. For example, how are we sure to have included only software engineers when dealing with human subjects? Or, which type of quality controls have been performed on software repositories to ensure the consistency and homogeneity of artifacts?</footnote><br>
<footnote><sup>[7](#myfootnote7)</sup> It should be clear, which are the factors being investigated and how they have been selected. Similarly, measurements should show adequate reliability based on literature benchmarks (e.g., Cronbach&#39;s alpha, test-retest reliability between waves).</footnote><br>
<footnote><sup>[8](#myfootnote8)</sup> An example of such a selection process can be found in Russo, Daniel, and Klaas-Jan Stol. &quot;Gender differences in personality traits of software engineers.&quot; _IEEE Transactions on Software Engineering_ (2020).</footnote><br>
</standard>
