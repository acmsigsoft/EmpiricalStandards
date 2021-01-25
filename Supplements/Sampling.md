# Sampling
An empirical study where some of many possible items are selected

## Application

This standard applies to empirical research in which the researcher selects smaller groups of items to study (a _sample_) from a larger group of items of interest (the _population_) using a usually imperfect population list (the _sampling frame_). Common items in software engineering research include people (e.g. software developers), code artifacts (e.g. source code files) nd non-code artifacts (e.g. online discussions, user stories).

## Specific Attributes

### Essential Attributes
-[ ] explains the goal of sampling (e.g. aiming for representativeness, identifying exceptional cases)
-[ ] explains the sampling strategy, in particular the different filtering steps involved or the reasons for selecting certain objects
-[ ] explains why the sampling strategy is reasonable (not necessarily optimal) for the sampling goal
-[ ] explains the reasoning behind the selection of study objects (especially qualitative studies)
-[ ] reports the sample size
 
 #### Essential only if representativeness is a goal 
-[ ] states the theoretical population (what would the researcher like to generalize to?)
-[ ] presents a replicable, concise, algorithmic account of how other researchers could derive the same sample
-[ ] explicitly argues for representativeness (e.g. compares sample and population parameters, provides confidence interval and confidence level for sample size)
-[ ] explains how the sample could be biased along the sampling steps

### Desirable Attributes
-[ ] reports the approximate or exact sizes of populations and sampling frames
-[ ] provides the sample, sampling frame, and sampling scripts as supplementary material (subject to the collected data containing sensitive or protected information).
-[ ] uses more sophisticated sampling strategies where appropriate, e.g.:

    - exploratory research: using purposive rather than convenience sampling for unit of analysis
    - case study: using purposive rather than convenience sampling for site selection
    - repository mining: using probability rather than convenience or purposive sampling (if a sampling frame is available)
    - online survey: using respondent-driven rather than snowball sampling
    - study with identifiable strata: using stratified random rather than simple random sampling
    - theory building: using theoretical rather than convenience sampling


## Examples of Acceptable Deviations

- omitting a detailed account of the sampling strategy because it is explained in previous work using the same data set
- using a very simple sampling strategy in exceptional circumstances where expediency outweighs representativeness (e.g. research during a disaster)

## Antipatterns

- making claims about a population, based on sample, without providing an argument for representativeness
- claiming that a sample is representative of a population because it was randomly selected from a sampling frame, without considering bias in the sampling frame
- conducting underpowered research; i.e.:
    - quantitative research with a sample size insufficient to detect effects of the expected size<sup>[1](#myfootnote1)</sup>
    - qualitative research with too little data for plausible saturation
- justifying the selection of items merely by stating that they come from a &quot;real-world&quot; context, without providing additional reasoning why the selected items are suitable for the study context

## Invalid Criticisms

- complaining about lack of representativeness or low external validity in studies where representativeness is not a goal
- abstractly criticizing generalizability rather than pointing to best practices, e.g.:
- invalid: &#39;as most respondents work in app development, the results may not generalize to other settings&#39;
- valid: &#39;the researchers should have sent participation reminders to mitigate response bias&#39;
- for qualitative research, claiming that the sample size is too small without considering how the items were selected (e.g. theoretical sampling) or the authors&#39; argument for saturation.

## Suggested Readings

Sebastian Baltes and Paul Ralph. 2020. Sampling in Software Engineering Research: A Critical Review and Guidelines. _arXiv_. [https://arxiv.org/abs/2002.07764](https://arxiv.org/abs/2002.07764)

William G. Cochran. 2007. Sampling techniques. _Wiley_.

Steve Easterbrook, Janice Singer, Margaret-Anne Storey, and Daniela Damian. 2008. Selecting Empirical Methods for Software Engineering Research. In _Guide to Advanced Empirical Software Engineering_. 285-311.

Barbara Kitchenham and Shari Lawrence Pfleeger. 2002. Principles of survey research: part 5: populations and samples. SIGSOFT Softw. Eng. Notes 27, 5 (September 2002), 17–20. DOI:10.1145/571681.571686

Gary T. Henry. 1990. _Practical sampling._ Sage 21.

Meiyappan Nagappan, Thomas Zimmermann, and Christian Bird. 2013. Diversity in software engineering research. In _Proceedings of the 2013 9th Joint Meeting on Foundations of Software Engineering (ESEC/FSE 2013)_. Association for Computing Machinery, New York, NY, USA, 466–476. DOI:10.1145/2491411.2491415

---
<sup>[1](#myfootnote1)</sup>Expected effect sizes should be plausible. For instance, expecting any single factor (e.g. programming language) to explain 50% of the variance in software project success is not plausible.