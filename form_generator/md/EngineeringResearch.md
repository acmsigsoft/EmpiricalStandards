# Engineering Methods {#engineering-methods .SectionTitle}

## Engineering Research (AKA Design Science) {#engineering-research-aka-design-science .Standard.Title}

Research that invents and evaluates technological artifacts

### Application {#application-1 .Standard.Heading}

This standard applies to manuscripts that propose and evaluate
technological artifacts, including algorithms, models, languages,
methods, systems, tools, and other computer-based technologies. This
standard is not appropriate for:

-   evaluations of pre-existing engineering research approaches
    (consider the Experiments Standard)

-   experience reports of applying pre-existing engineering research
    approaches

### Specific Attributes

+----------------+----------------------------------------------------+
| **Importance** | **Attribute**                                      |
+----------------+----------------------------------------------------+
| Essential      | -   describes the proposed artifact in adequate    |
|                |     detail[^4]                                     |
|                |                                                    |
|                | -   justifies the need for, usefulness of, or      |
|                |     relevance of the proposed artifact[^5]         |
|                |                                                    |
|                | -   conceptually evaluates the artifact; discusses |
|                |     its strengths, weaknesses and limitations[^6]  |
|                |                                                    |
|                | -   EITHER: discusses state-of-art alternatives    |
|                |     (and their strengths, weaknesses and           |
|                |     limitations)\                                  |
|                |     OR: explains why no state-of-art alternatives  |
|                |     exist\                                         |
|                |     OR: provides compelling argument that direct   |
|                |     comparisons are impractical                    |
|                |                                                    |
|                | -   Empirically evaluates the proposed artifact    |
|                |     using:\                                        |
|                |     **action research**, in which the researchers  |
|                |     intervene a real organization using the        |
|                |     artifact,\                                     |
|                |     a **case study** in which a real organization  |
|                |     uses the artifact without researcher           |
|                |     intervention,\                                 |
|                |     a **controlled experiment** in which human     |
|                |     participants use the artifact,\                |
|                |     a **simulation** in which the artifact is used |
|                |     in an artificial environment, or\              |
|                |     another method for which a clear and           |
|                |     convincing rationale is provided               |
|                |                                                    |
|                | -   clearly indicates the empirical methodology    |
|                |     being used (e.g. action research, controlled   |
|                |     experiment)                                    |
|                |                                                    |
|                | -   EITHER: empirically compares the artifact to   |
|                |     one or more state-of-the-art alternative       |
|                |     artifacts\                                     |
|                |     OR: empirically compares the artifact to one   |
|                |     or more state-of-the-art benchmarks\           |
|                |     OR: provides a clear and convincing rationale  |
|                |     for why comparative evaluation is impractical  |
|                |                                                    |
|                | -   assumptions (if any) are explicit; do not      |
|                |     contradict each other or the contribution's    |
|                |     goals; plausibly hold for the evaluation       |
|                |     subjects                                       |
|                |                                                    |
|                | -   uses notation consistently (if any notation is |
|                |     used)                                          |
|                |                                                    |
|                | -   complies with the **Ethics (Engineering        |
|                |     Research)** supplement                         |
+----------------+----------------------------------------------------+
| Desirable      | -   reviews the theoretical basis of the artifact  |
|                |                                                    |
|                | -   provides correctness arguments of the key      |
|                |     analytical and theoretical contributions (e.g. |
|                |     theorems, complexity analyses, mathematical    |
|                |     proofs)                                        |
|                |                                                    |
|                | -   includes one or more running examples to       |
|                |     elucidate the artifact                         |
|                |                                                    |
|                | -   evaluates the artifact in an industry-relevant |
|                |     context (e.g. widely used open-source          |
|                |     projects, professional programmers)            |
|                |                                                    |
|                | -   provides a replication package including       |
|                |     datasets and analytical scripts and EITHER a   |
|                |     comprehensive description of the artifact OR   |
|                |     source code if artifact is virtual             |
|                |                                                    |
|                | -   justifies any items missing from replication   |
|                |     package based on practical or ethical grounds. |
+----------------+----------------------------------------------------+
| Extraordinary  | -   contributes to our collective understanding of |
|                |     design practices or principles                 |
|                |                                                    |
|                | -   presents ground-breaking innovations with      |
|                |     obvious real-world benefits                    |
+----------------+----------------------------------------------------+

### General Quality Criteria {#general-quality-criteria-1 .Standard.Heading}

-   Comprehensiveness of proposed artifact description

-   Appropriateness of evaluation methods to the nature, goals, and
    assumptions of the contribution

-   Relationship of innovativeness to rigorousness: less innovative
    artifacts require more rigorous evaluations

### Antipatterns

-   overstates the novelty of the contribution

-   omits details of key conceptual aspects while focusing exclusively
    on incidental implementation aspects

-   evaluation consists *only* of eliciting users' opinions of the
    artifact

-   evaluation consists *only* of quantitative performance data that is
    not compared to established benchmarks or alternative solutions (see
    related point in "Invalid Criticism")

### Invalid Criticisms

-   The paper does not report as ambitious an empirical study as other
    predominately empirical papers. The more innovative the artifact and
    more comprehensive the conceptual evaluation, the less we should
    expect from the empirical study.

-   Too few experimental subjects (e.g. the source code used to evaluate
    a static analysis technique) if few subjects are available in the
    contribution's domain or the experimental evaluation is part of a
    more comprehensive validation strategy (e.g. formal arguments).
    Other criteria, such as the variety, realism, availability, and
    scale of the subjects, should also be considered to assess the
    quality of the evaluation.

-   No replication package, if there are clear, convincing practical or
    ethical reasons preventing artifact disclosure.

-   The artifact is not experimentally compared with related approaches
    *that are not publicly available*. In other words, before saying
    "you should have compared this against X, make sure X is actually
    available and functional.

-   This is not the first known solution to the identified problem. The
    novelty of the paper can be in how it achieves scalability, better
    performance on specific classes of problems, applicability to
    realistic systems, stronger theoretical guarantees, or other aspects
    of improvement. Proposed artifacts should outperform existing
    artifacts on *some* dimension(s).

-   The contribution is not technically complicated. What matters is
    that it works. Unnecessary complexity is undesirable.

### Suggested Readings[^7]

Richard Baskerville, Jan Pries-Heje, and John Venable. 2009. Soft design
science methodology. In *Proceedings of the 4th International Conference
on Design Science Research in Information Systems and Technology
(DESRIST '09).* Association for Computing Machinery, New York, NY, USA,
Article 9, 1--11. DOI: 10.1145/1555619.1555631

Carlo Ghezzi. 2020. *Being a researcher - an informatics perspective*.
Springer Nature.

Alan Hevner and Samir Chatterjee. 2010. *Design Research in Information
Systems*. Integrated Series in Information Systems. Springer, 22, (Mar.
2010), 145-156. DOI:
[10.1007/978-1-4419-5653-8_11](https://doi.org/10.1007/978-1-4419-5653-8_11)

Alan R. Hevner, Salvatore T. March, Jinsoo Park and Sudha Ram. 2004.
Design Science in Information Systems Research. *MIS Quarterly*, 28, 1
(Mar. 2004), 75--105. DOI:10.2307/25148625.

Roel Wieringa. 2014. *Design science methodology for information systems
and software engineering.* Springer*.*

### Exemplars

Kihong Heo, Hakjoo Oh and Hongseok Yang. 2019. Resource-aware Program
Analysis via Online Abstraction Coarsening. In *Proceedings of the 41st
International Conference on Software Engineering.*

Jianhui Chen, Fei He. 2018. Control Flow-Guided SMT Solving for Program
Verification. In *Proceedings of the 33rd International Conference on
Automated Software Engineering*.

Calvin Loncaric, Michael D. Ernst and Emina Torlak. 2018. Generalized
Data Structure Synthesis. In *Proceedings of the 40th International
Conference on Software Engineering.*

Nikolaos Tsantalis, Davood Mazinanian and Shahriar Rostami Dovom. 2017.
Clone Refactoring with Lambda Expressions. In *Proceedings of the 39th
International Conference on Software Engineering.*

August Shi, Suresh Thummalapenta, Shuvendu Lahiri, Nikolaj Bjorner and
Jacek Czerwonka. (2017) Optimizing Test Placement for Module-Level
Regression Testing. In *Proceedings of the 39th International Conference
on Software Engineering.*

Magnus Madsen, Frank Tip, Esben Andreasen, Koushik Sen, and Anders
Møller. 2016. Feedback-Directed Instrumentation for Deployed JavaScript
Applications. In *Proceedings of the 38th International Conference on
Software Engineering.*

*\
*