# Experiments (with Human Participants) 
<standard name="Experiments (with Human Participants)">

A study in which an intervention is deliberately introduced to observe
its effects on some aspects of reality under controlled conditions

## Application 

This standard applies to controlled experiments and quasi-experiments
that meet all of the following conditions:

-   manipulates one or more independent variables
-   controls many extraneous variables
-   applies each treatment independently to several experimental units
-   involves human participants

In true experiments, experimental units are randomly allocated across
treatments; quasi-experiments lack random assignment. Experiments
include between-subjects, within-subjects and repeated measures designs.
For experiments without human participants, see the **Exploratory Data
Science Standard** or the **Engineering Research Standard**.

## Specific Attributes 

### Essential Attributes
<checklist name="Essential">

-	describes how characteristics of phenomenon under investigation relate to experimental constructs
-	states formal hypotheses
-	justifies use of one-sided hypotheses (if any) based on face validity or previous work
-	describes independent, dependent and extraneous variables; how extraneous vars are controlled
-	describes the research design and protocol including treatments, materials, tasks, design (e.g. 2x2 factorial), participant allocation, period and sequences (for crossover designs), and logistics
-	design and protocol appropriate (not optimal) for stated research questions and hypotheses
-	EITHER: uses random assignment; explains logistics (e.g. how random numbers were generated)  \ OR: justifies why random assignment is impractical or unethical (compelling reason needed); and mitigates unequal groups threat to validity (e.g. using pre-test/post-test and matched subjects design)
-	describes experimental objects (e.g. real or toy system) and their characteristics (e.g. size, type);
-	justifies selection of experimental objects; checks for object-treatment confounds<sup>[9](#myfootnote9)</sup>
-	describes and justifies how the dependent variable is measured (including units, instruments)
-	describes how independent and dependent variables are measured
-	describes participants (e.g. age, gender, education, relevant experience or preferences)
-	reports distribution-appropriate descriptive and inferential statistics; enumerates and checks assumptions<sup>[10](#myfootnote10)</sup>; justifies tests used
-	reports effects sizes with confidence intervals (if using frequentist approach)
-	EITHER: shares raw, de-identified data  \ OR: explains why sharing raw data is impractical or unethical
-	discusses construct, conclusion internal and external validity
-	discusses alternative interpretations of results
</checklist>
     
### Desirable Attributes
<checklist name="Desirable">

-	justifies hypotheses and Bayesian priors (if applicable) based on previous studies and theory
-	discusses alternative experimental designs and why they were not used (e.g. validity trade-offs)
-	includes visualizations of data distributions
-	cites statistics papers to support any nuanced issues or unusual approaches
-	explains deviations between design and execution, and their implications<sup>[11](#myfootnote11)</sup>
-	includes supplementary material: complete, algorithmic research protocol, task materials, de-identified dataset, analyses scripts
-	named experiment design (e.g. simple 2-group, 2x2 factorial, randomized block)
-	presents a-priori power analysis and sufficient n for expected effect sizes.
-	analyzes construct validity of dependent variable
-	uses and reports manipulation checks
-	pre-registration of hypotheses and design where venue allows
</checklist>
     
### Extraordinary Attributes
<checklist name="Extraordinary">

-   reports multiple experiments or replications in different cultures or regions
-	uses multiple methods of data collection; data triangulation
-	longitudinal data collection with appropriate time-series analysis
</checklist>

## General Quality Criteria 

Conclusion validity, construct validity, internal validity, reliability,
objectivity, reproducibility

## Antipatterns 

-   using bad proxies for dependent variables (e.g. task completion time
    as a proxy for task complexity)
-   quasi-experiments without a good reason<sup>[12](#myfootnote12)</sup>
-   treatments or response variables are poorly described
-   inappropriate design for the conditions under which the experiment
    took place
-   data analysis technique used does not correspond to the design
    chosen or data characteristics (e.g. using an independent samples
    t-test on paired data)
-   validity threats are simply listed without linking them to results
-   hypotheses are missing

## Invalid criticisms

-   participants are students---appropriateness of participant
    characteristics should be judged based on the context, desired level
    of control, trade-off choices between internal and external
    validity, and the specifics of the technology (i.e. method,
    technique, tool, process, etc.) under evaluation; the choice must be
    explained in the paper
-   low external validity
-   the experiment is a replication
-   the reviewer would have investigated the topic in any other way than
    an experiment

## Exemplars

Dag IK Sjøberg, Aiko Yamashita, Bente CD Anda, Audris Mockus, and Tore
Dybå. 2012. Quantifying the Effect of Code Smells on Maintenance Effort.
*IEEE Transactions on Software Engineering*. 39, 8 (Dec. 2012),
1144–1156. DOI: 10.1109/TSE.2012.89.

Ayse Tosun, Oscar Dieste, Davide Fucci, Sira Vegas, Burak Turhan, Hakan
Erdogmus, Adrian Santos et al. 2017. An industry experiment on the
effects of test-driven development on external quality and productivity.
*Empirical Software Engineering*. *22*, 6 (Dec. 2016), 2763–2805.

Kai Petersen, Kari Rönkkö, and Claes Wohlin. 2008. The impact of time
controlled reading on software inspection effectiveness and efficiency:
a controlled experiment. In *Proceedings of the Second ACM-IEEE
International Symposium on Empirical Software Engineering and
Measurement (ESEM '08)*, 139–148. DOI:10.1145/1414004.1414029

Eduard P. Enoiu, Adnan Cauevic, Daniel Sundmark, and Paul Pettersson.
2016. A controlled experiment in testing of safety-critical embedded
software. In *2016 IEEE International Conference on Software Testing,
Verification and Validation (ICST),* 11-15 April, Chicago, IL, USA.
IEEE. 1-11.

Yang Wang and Stefan Wagner. 2018. Combining STPA and BDD for safety
analysis and verification in agile development. In *Proceedings of the
40th International Conference on Software Engineering: Companion
Proceeedings (ICSE '18)*, 286–287. DOI:10.1145/3183440.3194973

Evrim Itir Karac, Burak Turhan, and Natalia Juristo. 2019. A Controlled
Experiment with Novice Developers on the Impact of Task Description
Granularity on Software Quality in Test-Driven Development. *IEEE
Transactions on Software Engineering.* DOI: 10.1109/TSE.2019.2920377
</standard>

---
<sup>[9](#myfootnote9)</sup> e.g., in an experiment where control group applies Test-Last (TL) with Object 1 while treatment group applies Test-Driven-Development (TDD) with Object 2, the experimental object is confounded with the treatment.  
<sup>[10](#myfootnote10)</sup> visual methods of checking assumptions are often as good as or better than statistical tests  
<sup>[11](#myfootnote11)</sup> e.g. dropouts affecting balance between treatment and control group  
<sup>[12](#myfootnote12)</sup> Quasi-experiments are appropriate for pilot studies or when assignment is beyond the researcher’s control (e.g. assigning students to two different sections of a course). Simply claiming that a study is “exploratory” is not sufficient justification. 