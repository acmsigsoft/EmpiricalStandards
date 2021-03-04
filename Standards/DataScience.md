# Exploratory Data Science in SE  
<standard name="Data Science">

*Repository Mining, and other data-centric analysis methods. The topic includes studies that analyze existing software engineering artifacts via data exploration.*

## Application

This standard applies to studies that primarily analyze existing **software engineering artifacts**, defined as "tangible by-products produced during the development of software" [6].  Note that there are very kinds of such by-products including (but not limited to social metrics, descriptions of code, etc).


## Specific Attributes

### Essential
<checklist name="Essential">

- [ ] Discusses motivation. What claims are being investigated, why is it useful/timely to explore this  problem and/or data-scientific analysis method?
- [ ] Discusses data selection methods; e.g., discusses how and why the data was selected and what feature engineering approaches and transformations were applied
- [ ] Discusse how the data was  pre-processed, filtered, and categorized
- [ ] Discusses what (and why) prior work was selected as for the purposes of baseline comparisons.  
- [ ] Presents the experimental rig; e.g. a depiction and/or algorithm pseudocode.
- [ ] Discusses the computing infrastructure used for running experiments (hardware and software), including GPU/CPU models; amount of memory; operating system; names and versions of relevant software libraries and frameworks.  
- [ ] Motivates which particular kinds of  statistics were used to analyse the experimental results   (descriptive or otherwise) 
- [ ] Automated or manual heuristics used in this process must be documented.  
- [ ] Describes the evaluation metrics used (and explains the motivation for choosing these metrics). 	
- Analysis of results goes beyond single-dimensional summaries of performance (e.g., average; median) to include measures of variation, confidence, or other distributional information.
- [ ] Discusses threats to validity identifying construct validity and limitations or technical assumptions (using an appropriate framework either using common standards [7] or a threat to validity appropriate to this study).
</checklist>

### Desirable
### Desirable Attributes
<checklist name="Desirable">

- [ ] Data is processed by multiple learners, of different types, e.g. regression, bayes classifier, decision tree, random forests, SVM (maybe with different kernels); e.g. see [10] for guidance.
- [ ] Data is processed multiple times with different randomly selected training/test examples; results of which are compared via significance tests and effect size tests.
- [ ]- Study carefully selects the hyperparameters that control the data miners (e.g. via are a careful analysis of settings seen in related work; e.g. via some automatic hyperparameter optimizer).
- [ ] Compares against baselines; i.e. reproduces and/or replicates  prior work related work (perhaps with some small improvements or even a “negative” report commenting that it was not possible to achieve reproduction or replication).
- For studies not based on proprietary  data:  a replication package is made available that conforms to SIGSOFT standards for a functional artifact. 
  - And if  data cannot be shared (e.g. an  industrial case study), it is desirable to create a sample dataset that can be shared to illustrate the use of the algorithms.
- Data sanity checks: some non-trivial portion of the data was selected and manually inspected. 
</checklist>

### Extraordinary
<checklist name="Extraordinary">

- [ ] Leverages temporal data via longitudinal (i.e. over large time) analyses when appropriate.
- [ ] Triangulates with qualitative data analysis of selected samples of the data. 
- [ ] Triangulates with other data sources, such as surveys or interviews.
- [ ] Reports findings to, or interacts with, authors of SE artifacts to double check with them.
</checklist>

## Examples of Acceptable Deviations


- Industry-based studies that cannot share their data do not provide a replication package. Nor do such studies
  need to offer detailed internal descriptions of the data (caveat: but enough information  must be offered to assure the reader that this is real data addressing a real problem)
- Using lighter and less precise data processing (e.g. keyword matching or random subsampling) if the scale of data is too large for a precise analysis to be practical.
- Data not shared since it is impractical to share (too large, too sensitive).
- Not using temporal analysis techniques such as time series when the data is not easily converted to time series (e.g. some aspects of source code evolution may not be easily modelled as time series).
- Not all studies need statistics and hypotheses. Some studies can be purely or principally descriptive.
  - Different explanations  have different requirements [8]:
      - For example, summarizing past data might only need some topic modeling regression on past data since the goal of that study is not to predict on figure cases). 
      - But there are other kinds of studies that need extensive evaluation via “hold out sets” (where the available data is divided into multiple train and test sets) since the goal of those studies is to make predictions on as-yet-unseen data.

## Antipatterns

- Use of statistical tests that assume normal distributions (without first checking for normality).
- If using Bayesian statistics, not motivating the priors used in the study. 
- Claims  causation unless an actual intervention took place; (e.g., installing a bot to monitor a repository), or the methodology is adequate to do so.
- Pre-processing changes training and test data; e.g. while it may be useful to adjust training data class distributions via (say) sub-sampling of majority classes, that adjustment should not applied to the test data (since it is important to assess the learner on the kinds of data that might be seen “in the wild”).
-  Unethical data collection or analysis (e.g. harvest personal information unnecessarily).
- Significant tests without effect size tests.
- Reporting a median, without any indication of variance (e.g., a boxplot).
- Multiple trials conducted, but no disclosure or discussion on the variation between trials. 

## Invalid Criticisms 

-  Data is not appropriate for the study. Different domains support so many kinds of data that no researcher
  can study them all. So if a researcher carefully justifies the used of data X from domain D, it may be
	unfair for reviewers to demand the analysis of other data Y from the same domain.
- Does not have a reproduction package. Currently, only 60% of SE papers from FSE,ASE, EMSE etc come with reproduction packages. Hence we say such packages are desirable, but not essential, since the community does not judge them as essential.
- Findings are not actionable: not all studies may have directly actionable findings in the short term.
- "Needs more data" as a generic criticism without a clear, justified reason.
- Study does not use qualitative data.
- Study does not make causal claims, when it cannot.
- Study does not use the most precise data source, unless the data source is clearly problematic for the study at hand. Some data is impractical to collect at scale.
- Study does not analyze data ABC. Apply this criticism with care. Data science is a very broad field and no paper can explore all parts.

## Suggested Readings

1. Hemmati, Hadi, et al. "The msr cookbook: Mining a decade of research." 2013 10th Working Conference on Mining Software Repositories (MSR). IEEE, 2013.
2. Robles, Gregorio, and Jesus M. Gonzalez-Barahona. "Developer identification methods for integrated data from various sources." (2005).
3. Dey, Tapajit, et al. "Detecting and Characterizing Bots that Commit Code." arXiv preprint arXiv:2003.03172 (2020).
4. Hora, Andre, et al. "Assessing the threat of untracked changes in software evolution." Proceedings of the 40th International Conference on Software Engineering. 2018.
5. Herzig, Kim, and Andreas Zeller. "The impact of tangled code changes." 2013 10th Working Conference on Mining Software Repositories (MSR). IEEE, 2013.
6. Berti-Équille, L. (2007). Measuring and Modelling Data Quality for Quality-Awareness in Data Mining.. In F. Guillet & H. J. Hamilton (ed.), Quality Measures in Data Mining , Vol. 43 (pp. 101-126) . Springer . ISBN: 978-3-540-44911-9.
7. Wohlin, C., Runeson, P., Höst, M., Ohlsson, M. C.,, Regnell, B. (2012). Experimentation in Software Engineering.. Springer. ISBN: 978-3-642-29043-5Wohlin’ standard thrrs
8.  Raymond P. L. Buse and Thomas Zimmermann. 2012. Information needs for software development analytics. In Proceedings of the 34th International Conference on Software Engineering (ICSE '12). IEEE Press, 987–996.
9.  https://aaai.org/Conferences/AAAI-21/reproducibility-checklist/
10.  Baljinder Ghotra, Shane McIntosh, and Ahmed E. Hassan. 2015. Revisiting the impact of classification techniques on the performance of defect prediction models. In Proceedings of the 37th International Conference on Software Engineering - Volume 1 (ICSE '15). IEEE Press, 789–800.
11.  Daniel Russo and Klaas-Jan Stol. In press. PLS-SEM for Software Engineering Research: An Introduction and Survey. *ACM Computing Surveys*.  

## Exemplars


1. A. Barua, S. W. Thomas, A. E. Hassan, What are developers talkingabout? an analysis of topics and trends in stack overflow, Empirical Software Engineering 19 (3) (2014) 619–654.
2. Bird, C., Rigby, P. C., Barr, E. T., Hamilton, D. J., German, D. M., & Devanbu, P. (2009, May). The promises and perils of mining git. In 2009 6th IEEE International Working Conference on Mining Software Repositories (pp. 1-10). IEEE.
3. Kalliamvakou, E., Gousios, G., Blincoe, K., Singer, L., Germán, D. M. & Damian, D. E. (2014). The promises and perils of mining GitHub.. In P. T. Devanbu, S. Kim & M. Pinzger (eds.), MSR (p./pp. 92-101), : ACM. ISBN: 978-1-4503-2863-0
4. Herbsleb, J. & Mockus, A. (2003). An Empirical Study of Speed and Communication in Globally Distributed Software Development. IEEE Transactions on Software Engineering, 29, 481-94.2
4. Menzies, T., Greenwald, J., & Frank, A. (2006). Data mining static code attributes to learn defect predictors. IEEE transactions on software engineering, 33(1), 2-13.
5. Menzies, T., & Marcus, A. (2008, September). Automated severity assessment of software defect reports. In 2008 IEEE International Conference on Software Maintenance (pp. 346-355). IEEE.
6. Nair, V., Agrawal, A., Chen, J., Fu, W., Mathew, G., Menzies, T., Minku, L. L., Wagner, M. & Yu, Z. (2018). Data-driven search-based software engineering.. In A. Zaidman, Y. Kamei & E. Hill (eds.), MSR (p./pp. 341-352), : ACM.
7. Rahman, F., & Devanbu, P. (2013, May). How, and why, process metrics are better. In 2013 35th International Conference on Software Engineering (ICSE) (pp. 432-441). IEEE.
8. Tufano, M., Palomba, F., Bavota, G., Oliveto, R., Penta, M. D., Lucia, A. D. & Poshyvanyk, D. (2017). When and Why Your Code Starts to Smell Bad (and Whether the Smells Go Away).. IEEE Trans. Software Eng., 43, 1063-1088.
</standard>
