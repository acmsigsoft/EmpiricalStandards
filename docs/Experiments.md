# Experiments (with Human Participants) 
<standard name="Experiments (with Human Participants)">



*<desc>A study in which an intervention is deliberately introduced to observe
its effects on some aspects of reality under controlled conditions</desc>*


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

<intro>


<method>
    
- [ ]	states formal hypotheses
- [ ]	uses two-sided hypotheses OR justifies use of one-sided hypotheses based on face validity or previous work
- [ ]	describes the dependent variable(s) and justifies how they are measured (including units, instruments)
- [ ]	describes the independent variable(s) and how they are manipulated or measured
- [ ]	describes extraneous variables and how they are controlled, or not    
- [ ]	justifies sample size (e.g. using power analysis) 
- [ ]	describes how characteristics of the phenomenon under investigation relate to experimental constructs
- [ ]	describes the research design and protocol including treatments, materials, tasks, design (e.g. 2x2 factorial), participant allocation, period and sequences (for crossover designs), and logistics
- [ ]	EITHER: uses random assignment and explains logistics (e.g. how random numbers were generated)   
    OR: provides compelling justification for not using random assignment and explains how unequal groups threat to validity is mitigated (e.g. using pre-test/post-test and matched subjects design)
- [ ]	describes experimental objects (e.g. real or toy system) and their characteristics (e.g. size, type)
- [ ]	justifies selection of experimental objects; acknowledges object-treatment confounds, if any<sup>[1](#myfootnote1)</sup>
- [ ]	design and protocol appropriate (not optimal) for stated research questions and hypotheses 

<results>

- [ ]	describes participants (e.g. age, gender, education, relevant experience or preferences)
- [ ]	reports distribution-appropriate descriptive and inferential statistics; justifies tests used
- [ ]	reports effects sizes with confidence intervals (if using frequentist approach)

<discussion>

- [ ]	discusses construct, conclusion, internal, and external validity
- [ ]	discusses alternative interpretations of results

<other>    

</checklist>
     
### Desirable Attributes
<checklist name="Desirable">

- [ ]	provides supplementary material such as complete, algorithmic research protocol; task materials; raw, de-identified dataset; analysis scripts
- [ ]	justifies hypotheses and Bayesian priors (if applicable) based on previous studies and theory
- [ ]	discusses alternative experimental designs and why they were not used (e.g. validity trade-offs)
- [ ]	includes visualizations of data distributions
- [ ]	cites statistics research to support any nuanced issues or unusual approaches
- [ ]	explains deviations between design and execution, and their implications<sup>[2](#myfootnote2)</sup>
- [ ]	named experiment design (e.g. simple 2-group, 2x2 factorial, randomized block)
- [ ]	analyzes construct validity of dependent variable
- [ ]	reports manipulation checks
- [ ]	pre-registration of hypotheses and design (where venue allows)
- [ ]	clearly distinguishes evidence-based results from interpretations and speculation<sup>[3](#myfootnote3)</sup>
</checklist>
     
### Extraordinary Attributes
<checklist name="Extraordinary">

- [ ]	reports multiple experiments or replications in different cultures or regions
- [ ]	uses multiple methods of data collection; data triangulation
- [ ]	longitudinal data collection with appropriate time-series analysis (see the [Longitudinal Studies Standard](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/Longitudinal.md))
</checklist>

## General Quality Criteria 

Conclusion validity, construct validity, internal validity, reliability,
objectivity, reproducibility

## Antipatterns 

-   using bad proxies for dependent variables (e.g. task completion time
    as a proxy for task complexity)
-   quasi-experiments without a good reason<sup>[4](#myfootnote4)</sup>
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
-   not enough participants (unless supported by power analysis)

## Exemplars

Eduard P. Enoiu, Adnan Cauevic, Daniel Sundmark, and Paul Pettersson. 2016. A controlled experiment in testing of safety-critical embedded software. In *2016 IEEE International Conference on Software Testing, Verification and Validation (ICST),* 11-15 April, Chicago, IL, USA. IEEE. 1-11.
    
Evrim Itir Karac, Burak Turhan, and Natalia Juristo. 2019. A Controlled
Experiment with Novice Developers on the Impact of Task Description
Granularity on Software Quality in Test-Driven Development. *IEEE
Transactions on Software Engineering.* DOI: 10.1109/TSE.2019.2920377
    
Rahul Mohanani, Burak Turhan, and Paul Ralph, 2019. Requirements framing affects design creativity. _IEEE Transactions on Software Engineering_. DOI:10.1109/TSE.2019.2909033
    
Kai Petersen, Kari Rönkkö, and Claes Wohlin. 2008. The impact of time
controlled reading on software inspection effectiveness and efficiency:
a controlled experiment. In *Proceedings of the Second ACM-IEEE
International Symposium on Empirical Software Engineering and
Measurement (ESEM '08)*, 139–148. DOI:10.1145/1414004.1414029

Dag IK Sjøberg, Aiko Yamashita, Bente CD Anda, Audris Mockus, and Tore
Dybå. 2012. Quantifying the Effect of Code Smells on Maintenance Effort.
*IEEE Transactions on Software Engineering*. 39, 8 (Dec. 2012),
1144–1156. DOI: 10.1109/TSE.2012.89.

Ayse Tosun, Oscar Dieste, Davide Fucci, Sira Vegas, Burak Turhan, Hakan
Erdogmus, Adrian Santos et al. 2017. An industry experiment on the
effects of test-driven development on external quality and productivity.
*Empirical Software Engineering*. *22*, 6 (Dec. 2016), 2763–2805.


Yang Wang and Stefan Wagner. 2018. Combining STPA and BDD for safety
analysis and verification in agile development. In *Proceedings of the
40th International Conference on Software Engineering: Companion
Proceeedings (ICSE '18)*, 286–287. DOI:10.1145/3183440.3194973


## Suggested Reading

Donald Campbell and Julian C. Stanley. 1963. Experimental and Quasi-experimental Designs For Research. Chicago: R. McNally.

Andreas Jedlitschka, Marcus Ciolkowski, and Dietmar Pfahl. 2008. Reporting Experiments in Software Engineering. _Guide to Advanced Empirical Software Engineering_. 201-228.

Natalia Juristo and Ana M. Moreno. 2001. Basics of Software Engineering Experimentation. Springer Science & Business Media.

Davide Falessi, Natalia Juristo, Claes Wohlin, Burak Turhan, Jürgen Münch, Andreas Jedlitschka, and Markku Oivo, Empirical Software Engineering Experts on the Use of Students and Professionals in Experiments, _Empirical Software Engineering_. 23, 1 (2018), 452-489.

Robert Feldt, Thomas Zimmermann, Gunnar R. Bergersen, Davide Falessi, Andreas Jedlitschka, Natalia Juristo, Jürgen Münch et al. 2018. Four commentaries on the use of students and professionals in empirical software engineering experiments. _Empirical Software Engineering_. 23, 6 (Nov. 2018), 3801-3820.

Vigdis By Kampenes, Tore Dybå, Jo E. Hannay, and Dag IK Sjøberg. 2009. A systematic review of quasi-experiments in software engineering. _Information and Software Technology_. 51, 1 (2009), 71-82.

Kitchenham, Barbara, Lech Madeyski, David Budgen, Jacky Keung, Pearl Brereton, Stuart Charters, Shirley Gibbs, and Amnart Pohthong. 2017. Robust statistical methods for empirical software engineering. _Empirical Software Engineering_. 22, 2 (2018), 579-630.

Martín Solari, Sira Vegas, and Natalia Juristo. 2018. Content and structure of laboratory packages for software engineering experiments. _Information and Software Technology_. 97, 64-79.

Claes Wohlin, Per Runeson, Martin Höst, Magnus C. Ohlsson, Björn Regnell, and Anders Wesslén. 2012. Experimentation in Software Engineering. Springer Science & Business Media.

Sira Vegas, Cecilia Apa, and Natalia Juristo. 2015. Crossover designs in software engineering experiments: Benefits and perils. _IEEE Transactions on Software Engineering_. IEEE 42, 2 (2015), 120-135.

Andreas Zeller, Thomas Zimmermann, and Christian Bird. 2011. Failure is a four-letter word: a parody in empirical research. In Proceedings of the _7th International Conference on Predictive Models in Software Engineering (Promise ’11)_. Association for Computing Machinery, New York, NY, USA, Article 5, 1–7. DOI: 10.1145/2020390.2020395


---
<footnote><sup>[1](#myfootnote1)</sup> For example, in an experiment where the control group applies Test-Driven Development (TDD) with Object 1 while the treatment group applies Test-Last-Development (TDD) with Object 2, the experimental object is confounded with the treatment.</footnote><br>
<footnote><sup>[2](#myfootnote2)</sup> e.g. dropouts affecting balance between treatment and control group.</footnote><br>
<footnote><sup>[3](#myfootnote3)</sup> Simply separating results and discussion into different sections is typically sufficient. No speculation in the results section.</footnote><br>
<footnote><sup>[4](#myfootnote4)</sup> Quasi-experiments are appropriate for pilot studies or when assignment is beyond the researcher’s control (e.g. assigning students to two different sections of a course). Simply claiming that a study is “exploratory” is not sufficient justification.</footnote><br>
</standard>
