# Repository Mining
<standard name="Repository Mining">

The standard applies to software engineering studies that mine large-scale software repositories, mailing list archives, bug tracking systems, Q&A forums, and chat communications. These studies include empirical analysis of software repositories and automatic techniques for extracting information from software repositories.

- If the study focuses on machine learning, consider the **Data Science Standard**.
- If the subject systems are a few context-rich repositories, consider the **Case Study Standard**.

## Specific Attributes

### Essential Attributes
<checklist name="Essential">

- [ ] Explains why repository mining is appropriate for the proposed research problem
- [ ] Defines unit(s) of analysis or observation
- [ ] Justifies the selection of the datasets that were studied including specific selection criteria (e.g., number of stars, availability of tests, minimum lines of code and relevant code quality aspects for repository selection)
- [ ] Justifies that the above-mentioned selection criteria is appropriate for the study
- [ ] Describes dataset characteristics; it includes data sources, size of the selected repositories, and dataset attributes relevant to the study at hand (e.g., number of commit messages)
- [ ] Describes data preprocessing steps
- [ ] If manual annotations are carried out:
    - uses multiple annotators; reports the number of annotators
    - describes the annotators (e.g. demographics, experience, training),
    - describes in detail the annotation procedure (e.g. what types of questions were asked to the annotators),
    - assesses inter-rater reliability (see the Inter-Rater Reliability Supplement)
- [ ] If predictive modeling is used:
    - describes the heuristics or rules (if applicable),
    - justifies the modeling approach used.
    - EITHER: discusses state-of-art baselines (and their strengths, weaknesses and limitations)
    - OR: explains why no state-of-art baselines exist
    - OR: provides a compelling argument that direct comparisons are impractical
- [ ] Describes and justifies measures or metrics used to quantify a characteristic or phenomenon. Provides a reasonable construct validity for the considered measures (e.g., are the used measures proxy metrics? Or, do they actually measure what they supposed to measure?)
- [ ] describes and justifies the evaluation metrics (such as precision and recall) used
- [ ] discusses assumptions involved, either concerning problem space or solution space including method design and evaluation, in the study

</checklist>

### Desirable Attributes
<checklist name="Desirable">

- [ ] Provides supplemental materials (e.g., interview guide(s), coding schemes, coding examples, decision rules, list of heuristics)
- [ ] Triangulates across data sources, informants or researchers
- [ ] Reflects on their own possible biases
- [ ] Offers a comprehensive public replication package including dataset(s) and tool(s) to download, select, pre-process, and post-process the selected repositories
- [ ] Qualitative analysis of scenarios where the automatic tool didn’t work well.

</checklist>

### Extraordinary Attributes
<checklist name="Extraordinary">
- Considers and discusses ethical issues in mining of software repositories<sup>[1](#footnote1)</sup>  (e.g., data privacy).
- Performs testing (e.g., unit testing) to avoid bugs in the proposed tool.

</checklist>

## General Quality Criteria
Internal validity, external validity, and construct validity.

## Examples of Acceptable Deviations
- Studies that focus on specific ecosystems (such as Apache) may choose specific repositories.

## Antipatterns
- Use open-source repositories without any filtering criteria i.e., Convenience sampling<sup>[2](#footnote2)</sup>.
- Repository filtering criteria is not discussed in the manuscript.
- In a study where *all* the commits of a project need to be analyzed, only the GitHub repository is considered. A GitHub repository does not necessarily contain all commits of a project<sup>[3](#footnote3)</sup>.
- Conclusions must be derived in the context of the selected repositories. Deriving generic conclusions applicable to the selected repositories but necessarily to a larger generic set is an antipattern.
- Insufficient details about the applied processing steps of the selected repositories.

## Invalid Criticisms
- More data (or more repositories) required without appropriate justification.
- Study doesn’t use qualitative analysis/data.


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
- Gold, N.E., Krinke, J. Ethics in the mining of software repositories. Empir Software Eng 27, 17 (2022). https://doi.org/10.1007/s10664-021-10057-7

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
