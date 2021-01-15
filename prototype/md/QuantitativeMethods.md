# Quantitative Methods

## Experiments (with Human Participants)

#### *A study in which an intervention is deliberately introduced to observe its effects on some aspects of reality under* controlled conditions

> Application
>
> This standard applies to controlled experiments and quasi-experiments
> that meet all of the following conditions:

-   manipulates one or more independent variables

-   controls many extraneous variables

-   applies each treatment independently to several experimental units

-   involves human participants

> In true experiments, experimental units are randomly allocated across
> treatments; quasi-experiments lack random assignment. Experiments
> include between-subjects, within-subjects and repeated measures
> designs. For experiments without human participants, see the
> **Exploratory Data Science Standard** or the **Engineering Research
> Standard**.
>
> S[pecific Attributes]{.ul}

##### Importance Attribute

> Essential  describes how characteristics of phenomenon under
> investigation relate to experimental constructs

-   states formal hypotheses

-   justifies use of one-sided hypotheses (if any) based on face
    > validity or previous work

-   describes independent, dependent and extraneous variables; how
    > extraneous vars are controlled

-   describes the research design and protocol including *treatments,
    > materials*, *tasks*, *design* (e.g. 2x2 factorial), *participant
    > allocation*, *period and sequences* (for crossover designs), and
    > logistics

-   design and protocol *appropriate* (not optimal) for stated research
    > questions and hypotheses

-   EITHER: uses random assignment; explains logistics (e.g. how random
    > numbers were generated) OR: justifies why random assignment is
    > impractical or unethical (compelling reason needed); and mitigates
    > unequal groups threat to validity (e.g. using pre-test/post-test
    > and matched subjects design)

-   describes experimental objects (e.g. real or toy system) and their
    > characteristics (e.g. size, type);

-   justifies selection of experimental objects; checks for
    > object-treatment confounds^8^

-   describes and justifies how the dependent variable is measured
    > (including units, instruments)

-   describes how independent and dependent variables are measured

-   describes participants (e.g. age, gender, education, relevant
    > experience or preferences)

-   reports distribution-appropriate descriptive and inferential
    > statistics; enumerates and checks assumptions^9^; justifies tests
    > used

-   reports effects sizes with confidence intervals (if using
    > frequentist approach)

-   EITHER: shares raw, de-identified data

> OR: explains why sharing raw data is impractical or unethical

-   discusses construct, conclusion internal and external validity

-   discusses alternative interpretations of results

> Desirable  justifies hypotheses and Bayesian priors (if applicable)
> based on previous studies and theory

-   discusses alternative experimental designs and why they were not
    > used (e.g. validity trade-offs)

-   includes visualizations of data distributions

-   cites statistics papers to support any nuanced issues or unusual
    > approaches

-   explains deviations between design and execution, and their
    > implications^10^

-   includes supplementary material: complete, algorithmic research
    > protocol, task materials, de- identified dataset, analyses scripts

-   named experiment design (e.g. simple 2-group, 2x2 factorial,
    > randomized block)

-   presents a-priori power analysis and sufficient *n* for expected
    > effect sizes.

-   analyzes construct validity of dependent variable

-   uses and reports manipulation checks

-   pre-registration of hypotheses and design where venue allows

> 8 e.g., in an experiment where control group applies Test-Last (TL)
> with Object 1 while treatment group applies Test-Driven- Development
> (TDD) with Object 2, the experimental object is confounded with the
> treatment.
>
> 9 visual methods of checking assumptions are often as good as or
> better than statistical tests
>
> 10 e.g. dropouts affecting balance between treatment and control group
>
> Extraordinary  reports multiple experiments or replications in
> different cultures or regions

-   uses multiple methods of data collection; data triangulation

-   longitudinal data collection with appropriate time-series analysis

### General Quality Criteria

> Conclusion validity, construct validity, internal validity,
> reliability, objectivity, reproducibility

### Invalid criticisms

-   participants are students---appropriateness of participant
    > characteristics should be judged based on the context, desired
    > level of control, trade-off choices between internal and external
    > validity, and the specifics of the technology (i.e. method,
    > technique, tool, process, etc.) under evaluation; the choice must
    > be explained in the paper

-   low external validity

-   the experiment is a replication

-   the reviewer would have investigated the topic in any other way than
    > an experiment

### Antipatterns

-   using bad proxies for dependent variables (e.g. task completion time
    > as a proxy for task complexity)

-   quasi-experiments without a good reason^11^

-   treatments or response variables are poorly described

-   inappropriate design for the conditions under which the experiment
    > took place

-   data analysis technique used does not correspond to the design
    > chosen or data characteristics (e.g. using an independent samples
    > t-test on paired data)

-   validity threats are simply listed without linking them to results

-   hypotheses are missing

### Suggested Reading

> Nathaniel L. Gage and Julian C. Stanley. 1963. Experimental and
> Quasi-experimental Designs For Research. Chicago: R. McNally. Andreas
> Jedlitschka, Marcus Ciolkowski, and Dietmar Pfahl. 2008. Reporting
> Experiments in Software Engineering. *Guide to Advanced*
>
> *Empirical Software Engineering*. 201-228.
>
> Natalia Juristo and Ana M. Moreno. 2001. *Basics of Software
> Engineering Experimentation*. Springer Science & Business Media. Claes
> Wohlin, Per Runeson, Martin Höst, Magnus C. Ohlsson, Björn Regnell,
> and Anders Wesslén. 2012. *Experimentation in Software*
>
> *Engineering*. Springer Science & Business Media.
>
> Martín Solari, Sira Vegas, and Natalia Juristo. 2018. Content and
> structure of laboratory packages for software engineering experiments.
>
> *Information and Software Technology.* 97, 64-79.
>
> Sira Vegas, Cecilia Apa, and Natalia Juristo. 2015. Crossover designs
> in software engineering experiments: Benefits and perils. *IEEE
> Transactions on Software Engineering*. IEEE 42, 2 (2015), 120-135.
>
> Vigdis By Kampenes, Tore Dybå, Jo E. Hannay, and Dag IK Sjøberg. 2009.
> A systematic review of quasi-experiments in software engineering.
> *Information and Software Technology*. 51, 1 (2009), 71-82.
>
> Davide Falessi, Natalia Juristo, Claes Wohlin, Burak Turhan, Jürgen
> Münch, Andreas Jedlitschka, and Markku Oivo, Empirical Software
> Engineering Experts on the Use of Students and Professionals in
> Experiments, *Empirical Software Engineering.* 23, 1 (2018), 452- 489.
>
> Robert Feldt, Thomas Zimmermann, Gunnar R. Bergersen, Davide Falessi,
> Andreas Jedlitschka, Natalia Juristo, Jürgen Münch et al.
>
> 2018\. Four commentaries on the use of students and professionals in
> empirical software engineering experiments. *Empirical Software
> Engineering*. 23, 6 (Nov. 2018), 3801-3820.
>
> Kitchenham, Barbara, Lech Madeyski, David Budgen, Jacky Keung, Pearl
> Brereton, Stuart Charters, Shirley Gibbs, and Amnart Pohthong. 2017.
> Robust statistical methods for empirical software engineering.
> *Empirical Software Engineering*. 22, 2 (2018), 579-
>
> 630\.
>
> Andreas Zeller, Thomas Zimmermann, and Christian Bird. 2011. Failure
> is a four-letter word: a parody in empirical research. In *Proceedings
> of the 7th International Conference on Predictive Models in Software
> Engineering (Promise '11).* Association for Computing Machinery, New
> York, NY, USA, Article 5, 1--7. DOI: 10.1145/2020390.2020395

### Exemplars

> Dag IK Sjøberg, Aiko Yamashita, Bente CD Anda, Audris Mockus, and Tore
> Dybå. 2012. Quantifying the Effect of Code Smells on Maintenance
> Effort. *IEEE Transactions on Software Engineering*. 39, 8 (Dec.
> 2012), 1144-1156. DOI: 10.1109/TSE.2012.89.
>
> 11 Quasi-experiments are appropriate for pilot studies or when
> assignment is beyond the researcher's control (e.g. assigning students
> to two different sections of a course). Simply claiming that a study
> is "exploratory" is not sufficient justification.
>
> Ayse Tosun, Oscar Dieste, Davide Fucci, Sira Vegas, Burak Turhan,
> Hakan Erdogmus, Adrian Santos et al. 2017. An industry experiment on
> the effects of test-driven development on external quality and
> productivity. *Empirical Software Engineering*. *22*, 6 (Dec. 2016),
> 2763-2805.
>
> Kai Petersen, Kari Rönkkö, and Claes Wohlin. 2008. The impact of time
> controlled reading on software inspection effectiveness and
> efficiency: a controlled experiment. In Proceedings of the Second
> ACM-IEEE international symposium on Empirical software engineering and
> measurement (ESEM '08). Association for Computing Machinery, New York,
> NY, USA, 139--148.
>
> DOI:10.1145/1414004.1414029
>
> Eduard P. Enoiu, Adnan Cauevic, Daniel Sundmark, and Paul Pettersson.
> 2016. A controlled experiment in testing of safety-critical embedded
> software. In *2016 IEEE International Conference on Software Testing,
> Verification and Validation (ICST),* 11-15 April, Chicago, IL, USA.
> IEEE. 1-11.
>
> Yang Wang and Stefan Wagner. 2018. Combining STPA and BDD for safety
> analysis and verification in agile development. In Proceedings of the
> 40th International Conference on Software Engineering: Companion
> Proceeedings (ICSE '18). Association for Computing Machinery, New
> York, NY, USA, 286--287. DOI:10.1145/3183440.3194973
>
> Evrim Itir Karac, Burak Turhan, and Natalia Juristo. 2019. A
> Controlled Experiment with Novice Developers on the Impact of Task
> Description Granularity on Software Quality in Test-Driven
> Development. *IEEE Transactions on Software Engineering.*

## Questionnaire Surveys

#### *A study in which a sample of respondents answer a series of questions. Questions are typically answered* through a computerized or paper form and mostly structured

> Application
>
> This guideline applies to studies in which:

-   a sample of participants answer, predefined, mostly closed-ended
    > questions (typically online or on paper)

-   researchers systematically analyze participants' answers

> Surveys can be descriptive, exploratory or confirmatory. Confirmatory
> surveys can test individual propositions or complex theories. This
> standard does not apply to questionnaires comprising predominately
> open-ended questions^12^, literature surveys (see the **Systematic
> Review Standard**), longitudinal or repeated measures studies (see the
> **Longitudinal Studies Standard**), or the demographic questionnaires
> typically given to participants in controlled experiments (see the
> **Experiments Standard**).
>
> Specific Attributes

##### Section Attribute

> Essential  identifies the target population & defines the sampling
> strategy (see the **Sampling Supplement**)

-   provides questionnaire instrument (e.g. as supplemental file)

-   EITHER: provides study artifacts; i.e., instrument(s), code books,
    > analysis scripts and dataset(s) (addressing potential anonymity
    > and confidentiality issues)

> OR: describes in detail study artifacts and justifies why they are not
> provided

-   the questionnaire design matches the research aims (i.e. questions
    > are mapped to research objectives) and the target population
    > (wording and format of the questions)

-   describes how participants were selected, including invitations and
    > incentives

-   step-by-step, systematic, replicable description of data collection
    > and analysis

-   describes how responses were managed/monitored, including
    > contingency actions for non-responses and drop-outs

-   EITHER: measures constructs using (or adapting) validated scales

> OR: analyzes construct validity (e.g. content, convergent,
> discriminant, predictive) ex post

-   explains handling of missing data (e.g. imputation, weighting
    > adjustments, discarding)

-   acknowledges generalizability threats; discusses how respondents may
    > differ from target population

-   analyzes response rates

> Desirable  characterizes the target population including demographic
> information (e.g. culture, knowledge)

-   defines and estimates the size of the population strata (if
    > applicable)

-   accounts for the principles of research ethics (e.g. informed
    > consent, re-identification risk)

-   explains and justifies instrument design and choice of scales (e.g.
    > by research objectives or by analogy to similar studies).

-   validates whether the items, layout, duration, and technology are
    > appropriate (e.g. using pilots, test- retest, or expert and
    > non-expert reviews).

-   reports how the instrument has evolved through the validation
    > process (if at all)

-   applies techniques for improving response rates (e.g. incentives,
    > reminders, targeted advertising)

-   analyzes response bias (quantitatively)

-   discusses possible effect of incentives (e.g. on voluntariness,
    > response rates, response bias) if used

-   describes the stratification of the analysis (if stratified sampling
    > is used)

-   clearly distinguishes evidence-based results from interpretations
    > and speculation^13^

> Extraordinary  provides feasibility check of the anticipated data
> analysis techniques

-   reports on the scale validation in terms of dimensionality,
    > reliability, and validity of measures

> 12 There is currently no standard for predominately open-ended
> questionnaire surveys. One exemplar readers could draw from is: Daniel
> Graziotin, Fabian Fagerholm, Xiaofeng Wang, and Pekka Abrahamsson.
> 2018. \"What happens when software developers are (un)happy.\"
> *Journal of Systems and Software* 140, 32-47.
>
> 13 Simply separating results and discussion into different sections is
> typically sufficient. No speculation in the results section.

### General Quality Criteria

> Survey studies should address quantitative quality criteria such as
> **internal validity**, **construct validity**, **external validity**,
> **reliability** and **objectivity** (see **Glossary**).

### Variations

-   **Descriptive surveys** provide a detailed account of the properties
    > of a phenomenon or population.

-   **Exploratory surveys** generate insights, hypotheses or models for
    > further research.

-   **Confirmatory surveys** testing formal (e.g. causal) propositions
    > to explain a phenomenon.

### Invalid Criticism

-   Not reporting response rate for open public subscription surveys
    > (i.e. surveys open to the anonymous public so that everyone with a
    > link---typically broadcasted among social networks---can
    > participate).

-   Failure to release full data sets despite the data being sensitive.

-   Claiming the sample size is too small without justifying why the
    > sample size is insufficient to answer the research questions.

-   Criticizing the relevance of a survey on the basis that responses
    > only capture general people's perceptions.

-   The results are considered hardly surprising or controversial.

-   The results do not accord with the reviewer's personal experience or
    > previous studies.

### Suggested Readings

> Don Dillman, Jolene Smyth, and Leah Christian. 2014. Internet, phone,
> mail, and mixed-mode surveys: the tailored design method. John Wiley &
> Sons.
>
> Mark Kasunic. 2005. Designing an effective survey. Carnegie-Mellon
> Univ Pittsburgh PA Software Engineering Inst.
>
> Jefferson Seide Molléri, Kai Petersen, and Emilia Mendes. *An
> empirically evaluated checklist for surveys in software engineering.*
>
> Information and Software Technology*.* 119 (2020).
>
> Stefan Wagner, Daniel Mendez, Michael Felderer, Daniel Graziotin,
> Marcos Kalinowski. Challenges in Survey Research. In: Contemporary
> Empirical Methods in Software Engineering, *Springer,* 2020.
>
> Paul Ralph and Ewan Tempero. 2018. Construct Validity in Software
> Engineering Research and Software Metrics. In Proceedings of the 22nd
> International Conference on Evaluation and Assessment in Software
> Engineering 2018 (EASE'18). Association for Computing Machinery, New
> York, NY, USA, 13--23. DOI:10.1145/3210459.3210461
>
> Marco Torchiano, Daniel Méndez, Guilherme Horta Travassos, and Rafael
> Maiani de Mello. 2017. Lessons learnt in conducting survey research.
> In *Proceedings of the 5th International Workshop on Conducting
> Empirical Studies in Industry (CESI '17)*, 33--39.
>
> DOI:10.1109/CESI.2017.5
>
> Torchiano Marco and Filippo Ricca. Six reasons for rejecting an
> industrial survey paper. In *2013 1st International Workshop on
> Conducting Empirical Studies in Industry (CESI).* (2013), 21-26.

### Exemplars

> Stefan Wagner, Daniel Méndez Fernández, Michael Felderer, Antonio
> Vetrò, Marcos Kalinowski, Roel Wieringa, Dietmar Pfahl, Tayana Conte,
> Marie-Therese Christiansson, Desmond Greer, Casper Lassenius, Tomi
> Männistö, Maleknaz Nayebi, Markku Oivo, Birgit Penzenstadler, Rafael
> Prikladnicki, Guenther Ruhe, André Schekelmann, Sagar Sen, Rodrigo
> Spínola, Ahmed Tuzcu, Jose Luis De La Vara, and Dietmar Winkler. 2019.
> *Status Quo in Requirements Engineering: A Theory and a Global Family
> of Surveys.* ACM Trans. Softw. Eng. Methodol. 28, 2, Article 9 (April
> 2019), 48 pages. DOI:10.1145/3306607
>
> D. Méndez Fernández, Stefan Wagner, Marcos Kalinowski, Michael
> Felderer, Priscilla Mafra, Antonio Vetrò, Tayana Conte et al. Naming
> the Pain in Requirements Engineering: Contemporary Problems, Causes,
> and Effects in Practice. In *Empirical software engineering*. 22, 5
> (2016), 2298---2338.
>
> Jingyue Li, Reidar Conradi, Odd Petter Slyngstad, Marco Torchiano,
> Maurizio Morisio, and Christian Bunse. A State-of-the-Practice Survey
> on Risk Management in Development with Off-The-Shelf Software
> Components. In *IEEE Transactions on Software Engineering*. 34, 2
> (2008), 271-286.

## Systematic Reviews

#### *A study that appraises, analyses, and synthesizes primary or secondary literature to provide a complete,* exhaustive summary of current evidence regarding one or more specific topics or research questions

> Application

-   Applies to studies that systematically find and analyze existing
    > literature about a specified topic

-   Applies both to secondary and tertiary studies

-   Does not apply to ad-hoc literature reviews, case surveys or
    > advanced qualitative synthesis methods (e.g. meta- ethnography)

> Specific Attributes

##### Section Attribute

> Essential  step-by-step, systematic, replicable description of search
> process including search terms^14^

-   defines clear inclusion and exclusion criteria

-   specifies the data extracted from each primary study^15^; explains
    > relationships to research questions

-   describes in detail how data were extracted and synthesized (can be
    > qualitative or quantitative)

-   describes coding scheme(s) and their use

-   clear chain of evidence from the extracted data to the answers to
    > the research question(s)

-   presents conclusions or recommendations for
    > practitioners/non-specialists

-   identifies method (e.g. systematic review, meta-analysis, mapping
    > study, narrative synthesis, etc.)

> Desirable  provides replication package including protocol, search
> terms, search results, selection process results; complete dataset,
> analysis scripts; examples of coding, decision rules or edge cases

-   mitigates sampling bias and publication bias, using some combination
    > of: (i) manual and keyword automated searches; (ii) backward and
    > forward snowballing searches; (iii) checking profiles of prolific
    > authors in the area; (iv) searching both formal databases (e.g.
    > ACM Digital Library) and indexes (e.g. Google Scholar); (v)
    > searching for relevant dissertations; (vi) searching pre-print
    > servers (e.g. arXiv); (iiv) soliciting unpublished manuscripts
    > through appropriate listservs or social media; (iiiv) contacting
    > known authors in the area.

-   demonstrates that the search process is sufficiently rigorous for
    > the systematic review goals^16^

-   assesses quality of primary studies; explains how quality was
    > assessed

-   assesses coverage using funnel plots or percentage of known papers
    > found

-   (positivist reviews), uses 2+ independent analysts; analyzes
    > inter-rater reliability (e.g. KALPHA)

-   (interpretivist reviews) reflects on how researcher's biases may
    > have affected their analysis

-   consolidates results using tables, diagrams, or charts; PRISMA flow
    > diagram (cf. Moher et al. 2009)

-   performs analysis through an existing or new conceptual framework
    > (qualitative synthesis)

-   uses meta-analysis methods appropriate for primary studies; does not
    > use vote counting

-   integrates results into prior theory or research; identifies gaps,
    > biases, or future directions

-   presents results as practical, evidence-based guidelines for
    > practitioners, researchers, or educators

> Extraordinary  two or more researchers independently undertaking the
> preliminary search process before finalizing the search scope and
> search keywords

-   contacted primary study authors to ensure interpretations were
    > correct, and elicit additional details not found in the papers
    > such as access to raw data

### Examples of Acceptable Deviations

-   No attempts to mitigate publication bias in a study explicitly
    > examining a specific venue's (e.g. CACM or ICSE) coverage of a
    > given topic.

-   Using probability sampling on primary studies when there are too
    > many to analyze (i.e. thousands).

-   No recommendations for practitioners in a study of a methodological
    > issue (e.g. representative sampling).

### Anti-Patterns

-   A laundry-list description of the studies (A found X, B found Y,
    > ...), rather than a synthesis of the findings.

> 14 Searches can be manual or automated or a combination of both
>
> 15 Primary studies are the studies that are being reviewed. In a
> tertiary study, the "primary studies" are themselves reviews.
>
> 16 e.g. formal meta-analysis of experiments has higher requirements
> for completeness than mapping studies of broad topic areas

-   Relying on characteristics of the publication venues as a proxy for
    > the quality of the primary studies instead of assessing primary
    > studies' quality explicitly.

-   Reviewing an area in which there are too few high-quality primary
    > studies to draw reliable conclusions.

### Suggested Readings

> Moher D, Liberati A, Tetzlaff J, Altman DG, The PRISMA Group (2009).
> *P*referred *R*eporting *I*tems for *S*ystematic Reviews and *M*eta-
> *A*nalyses: The PRISMA Statement. PLoS Med 6, 7: e1000097.
> doi:10.1371/journal.pmed1000097
>
> Michael Borenstein and Larry V. Hedges and Julian P.T. Higgins and
> Hannah R. Rothstein. 2009. *Introduction to Meta-Analysis.* John Wiley
> & Sons Ltd.
>
> Daniela S. Cruzes and Tore Dybå. 2010. Synthesizing evidence in
> software engineering research. In Proceedings of the 2010 ACM-IEEE
> International Symposium on Empirical Software Engineering and
> Measurement (ESEM '10). Association for Computing Machinery, New York,
> NY, USA, Article 1, 1--10. DOI:10.1145/1852786.1852788
>
> Barbara Kitchenham and Stuart Charters. 2007. Guidelines for
> performing Systematic Literature Reviews in Software Engineering.
> Matthew B. Miles and A. Michael Huberman and Jonny Saldana. 2014.
> Qualitative Data Analysis: A Methods Sourcebook. Sage
>
> Publications Inc.
>
> Kai Petersen, Robert Feldt, Shahid Mujtaba, and Michael Mattsson.
> 2008. Systematic mapping studies in software engineering. In *12th
> International Conference on Evaluation and Assessment in Software
> Engineering (EASE).* (Jun. 2008), 1-10.