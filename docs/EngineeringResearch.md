# Engineering Research (AKA Design Science) 
<standard name="Engineering Methods">

*Research that invents and evaluates technological artifacts*

## Application 

This standard applies to manuscripts that propose and evaluate
technological artifacts, including algorithms, models, languages,
methods, systems, tools, and other computer-based technologies. This
standard is not appropriate for:

-   evaluations of pre-existing engineering research approaches
    (consider the **Experiments** Standard)
-   experience reports of applying pre-existing engineering research
    approaches

## Specific Attributes

### Essential Attributes
<checklist name="Essential">

<intro>

- [ ]   describes the proposed artifact in adequate detail<sup>[1](#myfootnote1)</sup>
- [ ]   justifies the need for, usefulness of, or relevance of the proposed artifact<sup>[2](#myfootnote2)</sup>
- [ ]   conceptually evaluates the proposed artifact; discusses its strengths, weaknesses and limitations<sup>[3](#myfootnote3)</sup>

<method>

- [ ]   Empirically evaluates the proposed artifact using:  
  [action research](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/ActionResearch.md), in which the researchers intervene in a real organization using the artifact,  
  a [case study](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/CaseStudy.md) in which the researchers obsevere a real organization using the artifact,  
  a [controlled experiment](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/Experiments.md) in which human participants use the artifact,  
  a [quantitative simulation](https://github.com/acmsigsoft/EmpiricalStandards/blob/master/docs/QuantitativeSimulation.md) in which the artifact is assessed (usually against a competing artifact) in an artificial environment,  
  a [benchmarking study](https://github.com/acmsigsoft/EmpiricalStandards/edit/master/docs/Benchmarking.md), in which the artifact is assessed using one or more benchmarks, or  
  another method for which a clear and convincing rationale is provided
- [ ]   clearly indicates which of the above empirical methodology is used
- [ ]   EITHER: discusses state-of-art alternatives (and their strengths, weaknesses and limitations)   
    OR: explains why no state-of-art alternatives exist   
    OR: provides compelling argument that direct comparisons are impractical
- [ ]   EITHER: empirically compares the artifact to one or more state-of-the-art alternatives   
    OR: empirically compares the artifact to one or more state-of-the-art benchmarks  
    OR: provides a clear and convincing rationale for why comparative evaluation is impractical

<results>


<discussion>


<other>
	
- [ ]   assumptions (if any) are explicit, plausible and do not contradict each other or the contribution's goals
- [ ]   uses notation consistently (if any notation is used)
	

</checklist>
    
### Desirable Attributes
<checklist name="Desirable">

- [ ]   provides supplementary materials including source code (if the artifact is software) or a comprehensive description of the artifact (if not software), and any input datasets (if applicable)
- [ ]   justifies any items missing from replication package based on practical or ethical grounds
- [ ]   discusses the theoretical basis of the artifact
- [ ]   provides correctness arguments for the key analytical and theoretical contributions (e.g. theorems, complexity analyses, mathematical proofs)
- [ ]   includes one or more running examples to elucidate the artifact
- [ ]   evaluates the artifact in an industry-relevant context (e.g. widely used open-source projects, professional programmers)	

</checklist>
    
### Extraordinary Attributes
<checklist name="Extraordinary">

- [ ]   contributes to our collective understanding of design practices or principles
- [ ]   presents ground-breaking innovations with obvious real-world benefits
</checklist>
    
## General Quality Criteria 

-   Comprehensiveness of proposed artifact description
-   Appropriateness of evaluation methods to the nature, goals, and
    assumptions of the contribution
-   Relationship of innovativeness to rigorousness: less innovative
    artifacts require more rigorous evaluations

## Antipatterns

-   overstates the novelty of the contribution
-   omits details of key conceptual aspects while focusing exclusively
    on incidental implementation aspects
-   evaluation consists *only* of eliciting users' opinions of the
    artifact
-   evaluation consists *only* of quantitative performance data that is
    not compared to established benchmarks or alternative solutions (see
    related point in "Invalid Criticism")

## Invalid Criticisms

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

### Suggested Readings <sup>[4](#myfootnote4)</sup>

Richard Baskerville, Jan Pries-Heje, and John Venable. 2009. Soft design
science methodology. In *Proceedings of the 4th International Conference
on Design Science Research in Information Systems and Technology
(DESRIST '09).* Association for Computing Machinery, New York, NY, USA,
Article 9, 1–11. DOI: 10.1145/1555619.1555631

Carlo Ghezzi. 2020. *Being a researcher: An informatics perspective*.
Springer, Cham.

Alan Hevner and Samir Chatterjee. 2010. *Design Research in Information
Systems*. Integrated Series in Information Systems. Springer, 22, (Mar.
2010), 145–156. DOI:
[10.1007/978-1-4419-5653-8_11](https://doi.org/10.1007/978-1-4419-5653-8_11)

Alan R. Hevner, Salvatore T. March, Jinsoo Park and Sudha Ram. 2004.
Design Science in Information Systems Research. *MIS Quarterly*, 28, 1
(Mar. 2004), 75–105. DOI:10.2307/25148625.

Roel Wieringa. 2014. *Design science methodology for information systems
and software engineering.* Springer, Berlin.

## Exemplars

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

---
<footnote><sup>[1](#myfootnote1)</sup> e.g., does the paper describe the overall workflow of the solution, showing how different techniques work together? Are algorithmic contributions presented in an unambiguous way? Are the key parts of a formal model presented explicitly? Are the novel components of the solution clearly singled out?</footnote><br>
<footnote><sup>[2](#myfootnote2)</sup> i.e., is the problem the proposed approach tries to solve specific to a certain domain? If so, why? Why are state-of-the-art approaches not good enough to deal with the problem? How can the technical contribution be beneficial?</footnote><br>
<footnote><sup>[3](#myfootnote3)</sup> e.g., time complexity of an algorithm; theoretical.</footnote><br>
<footnote><sup>[4](#myfootnote4)</sup> Note: Learning by building innovative artifacts is called engineering research. Some of the following readings incorrectly refer to engineering research as “design science” because the information systems community misappropriated that term circa 2004. Design science has referred to the study of designers and their processes since at least the 1940s, and still does outside of the information systems community.</footnote><br>
</standard>
