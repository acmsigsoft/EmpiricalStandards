# Repository Mining
<standard name="Repository Mining">   

*A study that quantitatively analyzes a dataset extracted from a platform hosting of structured or semi-structured text (e.g a source code repository)*    
    
## Application    
    
The standard applies to software engineering studies that: 
    - use automated techniques to extract data from large-scale data repositories such as source code repositories, mailing list archives, bug tracking systems, Q&A forums and chat communication platforms
    - quantitatively analyze the contents mined from the repositories

If the study focuses on predictive modeling (e.g. machine learning) consider the **Data Science Standard**. If the subject systems are a few context-rich repositories, consider the **Case Study Standard**. If the analysis is predominately qualitative, refer to methodological guidelines for qualitative content analysis or discourse analysis (standard TBD).  

## Specific Attributes

### Essential Attributes
<checklist name="Essential">

- [ ] explains why repository mining is appropriate for the proposed research problem
- [ ] defines unit(s) of analysis or observation
    - research questions must be clearly stated
- [ ] describes and justifies the selection criteria of the sources (i.e., where the repositories will be mined from). It must include:
    - sources types considered, and what information is available in them
    - a statement of purpose on why this source provides a set of reasons or goals for collecting the data/repositories (e.g., why choose one version control over another). Consider: number of repositories to obtain and their suitability for the study, the data quality, terms and conditions that may limit access to information, and other factors of influence (e.g., enabling future works)
    - describes how the repositories are searched, including use of third-party tools, APIs, languages of choice (e.g., both programming language, and natural language if relevant)
    - describes how the search may pose a threat to the validity (e.g., need to sample the results, the search algorithm may be obscure, the search string may produce false positive or omit relevant repositories)
- [ ] describes and justifies how the repositories are selected
    - describes the nature of the repositories being selected
    - describes the timing of the search (e.g., some search algorithm may produce different results based on stars, commits, etc.)
    - describes the inclusion and exclusion criteria (e.g., number of stars, availability of tests, minimum lines of code and relevant code quality aspects for repository selection, project structure, type of repositories)
    - describes how the inclusion and exclusion criteria was validated (e.g., by manually inspecting the results of the automated search)
    - describes the procedure for the acquisition (e.g., first selecting repositories and then downloading, or all completed together)
- [ ] describes dataset characteristics including data sources, size of the selected repositories, and dataset attributes relevant to the study at hand (e.g., number of commit messages)
- [ ] describes data preprocessing steps
- [ ] if the data obtained is too large to be processed in its entirety
    - explains the reason of the constraint (e.g., unfeasibility of a manual study, processing limitations, scope limitations)
    - explains how this was narrowed
    - if samples were used, details the calculation, if it was randomly selected or not
    - mitigates possible threats to the validity of the study (e.g., generalizability), steps taken, and includes the threat. May explain future works that continue or validate the sample
- [ ] if manual annotations are carried out:
    - uses multiple annotators; reports the number of annotators
    - describes the annotators (e.g. demographics, experience, training),
    - describes in detail the annotation procedure (e.g. what types of questions were asked to the annotators),
    - assesses inter-rater reliability (see the Inter-Rater Reliability Supplement)
- [ ] if predictive modeling is used, complies with the [Data Science Standard](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/DataScience.md)
- [ ] describes and justifies measures or metrics used to quantify a characteristic or phenomenon. Provides a reasonable construct validity for the considered measures (e.g., are the used measures proxy metrics? Or, do they actually measure what they supposed to measure?)
- [ ] describes and justifies the evaluation metrics (such as precision and recall) used
- [ ] discusses assumptions involved, either concerning problem space or solution space including method design and evaluation, in the study

</checklist>

### Desirable Attributes
<checklist name="Desirable">

- [ ] provides supplemental materials (e.g. complete dataset, tool(s) used to download, select, pre-process, and post-process the selected repositories)
- [ ] uses probability sampling (see the [Sampling Supplement](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/Supplements/Sampling.md))
- [ ] triangulates across data sources, informants or researchers
- [ ] annotators reflect on their own possible biases
- [ ] qualitative analysis of scenarios where the data collection or analysis tools were ineffective

</checklist>

### Extraordinary Attributes
<checklist name="Extraordinary">

- discusses ethical issues in mining of software repositories<sup>[1](#footnote1)</sup> (e.g., data privacy)
- performs testing (e.g., unit testing) to avoid bugs in the proposed tool

</checklist>

## General Quality Criteria
Internal validity, external validity, construct validity, reliability.

## Examples of Acceptable Deviations
- studies that focus on specific ecosystems (such as Apache) may choose specific repositories
- obfuscating some details of the dataset due to ethical concerns 

## Antipatterns
- limiting a study to quantitative description; failing to test, build or extend theory
- unvalidated, uni-dimensional operationalizations of multidimensional constructs (e.g. using github stars as a proxy for popularity) 
- using open-source repositories without any filtering criteria; i.e., convenience sampling<sup>[2](#footnote2)</sup>.
- in a study where *all* the commits of a project need to be analyzed, only the GitHub repository is considered; a GitHub repository does not necessarily contain all commits of a project<sup>[3](#footnote3)</sup>.
- conclusions must be derived in the context of the selected repositories; deriving generic conclusions applicable to the selected repositories but necessarily to a larger generic set is an antipattern
- insufficient details about the applied processing steps of the selected repositories

## Invalid Criticisms
- more data, sources, or repositories required without appropriate justification
- study doesn’t use qualitative analysis or data
- a different source should have been used when the selected source(s) are justified
- complaining about intentional obfuscation of repository details to protect participant's identities
- in manual studies, requiring the disclosure of the time required for completion


## Suggested Readings
- Daniel Barros, Flavio Horita, Igor Wiese, and Kanan Silva. 2021. A Mining Software Repository Extended Cookbook: Lessons learned from a literature review. In Brazilian Symposium on Software Engineering (SBES '21).
- Weiyi Shang, Bram Adams, and Ahmed E. Hassan. 2010. An experience report on scaling tools for mining software repositories using MapReduce. In Proceedings of the IEEE/ACM international conference on Automated software engineering (ASE '10).
- V. Cosentino, J. L. C. Izquierdo and J. Cabot, "Findings from GitHub: Methods, Datasets and Limitations," 2016 IEEE/ACM 13th Working Conference on Mining Software Repositories (MSR), 2016, pp. 137-141.
- Munaiah, N., Kroh, S., Cabrey, C. et al. Curating GitHub for engineered software projects. Empir Software Eng 22, 3219–3253 (2017).
- Sebastian Baltes, Paul Ralph. 2021. Sampling in Software Engineering Research: A Critical Review and Guidelines. arXiv eprint 2002.07764.
- Eirini Kalliamvakou, Georgios Gousios, Kelly Blincoe, Leif Singer, Daniel M. German, and Daniela Damian. 2014. The promises and perils of mining GitHub. In Proceedings of the 11th Working Conference on Mining Software Repositories (MSR 2014).
- A. E. Hassan, "The road ahead for Mining Software Repositories," 2008 Frontiers of Software Maintenance, 2008, pp. 48-57.
- V. Thakur, M. Kessentini and T. Sharma, "QScored: An Open Platform for Code Quality Ranking and Visualization," 2020 IEEE International Conference on Software Maintenance and Evolution (ICSME), 2020, pp. 818-821.
- Georgios Gousios. 2013. The GHTorent dataset and tool suite. In Proceedings of the 10th Working Conference on Mining Software Repositories (MSR '13). IEEE Press, 233–236.
- Gold, N.E., Krinke, J. Ethics in the mining of software repositories. Empirical Software Engineering 27, 17 (2022). https://doi.org/10.1007/s10664-021-10057-7
- Vidoni, M., A Systematic Process for Mining Software Repositories: Results From a Systematic Literature Review. Information and Software Technology 144 (2022). https://doi.org/10.1016/j.infsof.2021.106791

## Exemplars
- M. Beller, G. Gousios and A. Zaidman, "Oops, My Tests Broke the Build: An Explorative Analysis of Travis CI with GitHub," 2017 IEEE/ACM 14th International Conference on Mining Software Repositories (MSR), 2017, pp. 356-367.
- Georgios Gousios, Eirini Kalliamvakou, and Diomidis Spinellis. 2008. Measuring developer contribution from software repository data. In Proceedings of the 2008 international working conference on Mining software repositories (MSR '08).
- Moritz Beller, Alberto Bacchelli, Andy Zaidman, and Elmar Juergens. 2014. Modern code reviews in open-source projects: which problems do they fix? In Proceedings of the 11th Working Conference on Mining Software Repositories (MSR 2014).
- Davide Spadini, Maurício Aniche, and Alberto Bacchelli. 2018. PyDriller: Python framework for mining software repositories. In Proceedings of the 2018 26th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2018).
- M. Ortu, B. Adams, G. Destefanis, P. Tourani, M. Marchesi and R. Tonelli, "Are Bullies More Productive? Empirical Study of Affectiveness vs. Issue Fixing Time," 2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 2015, pp. 303-313.

---
<footnote><sup>[1](#footnote1)</sup>Gold, N.E., Krinke, J. Ethics in the mining of software repositories. Empir Software Eng 27, 17 (2022). https://doi.org/10.1007/s10664-021-10057-7</footnote><br>
<footnote><sup>[2](#footnote2)</sup>Sebastian Baltes, Paul Ralph. 2021. Sampling in Software Engineering Research: A Critical Review and Guidelines. arXiv eprint 2002.07764.</footnote><br>
<footnote><sup>[3](#footnote3)</sup>Eirini Kalliamvakou, Georgios Gousios, Kelly Blincoe, Leif Singer, Daniel M. German, and Daniela Damian. 2014. The promises and perils of mining GitHub. In Proceedings of the 11th Working Conference on Mining Software Repositories (MSR 2014).</footnote><br>


</standard>
