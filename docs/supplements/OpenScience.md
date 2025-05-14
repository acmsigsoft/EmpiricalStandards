# Open Science
The practice of maximizing the accessibility and transparency of science

## Application
The open science supplement applies to all research.

## Principle

Artifacts related to a study and the paper itself should, in principle, be made available on the Internet:

- without any barrier (e.g. paywalls, registration forms, request mechanisms),
- under an appropriate [open license](https://pantonprinciples.org/) that specifies purposes for re-use and re-purposing,
- properly [archived and preserved](https://en.wikipedia.org/wiki/Research_data_archiving),

provided that there are no ethical, legal, technical, economical, or practical barriers preventing their disclosure.

## Specific Attributes

### Desirable Attributes
- [ ]  includes a section named _data availability_ (typically after conclusion)
- [ ] EITHER: links to supplementary materials   
  OR explains why materials cannot be released (reasons for limited disclosure of data should be trusted)
- [ ] includes supplementary materials such as: raw, deidentified or transformed data, extended proofs, analysis scripts, software, virtual machines and containers, or qualitative codebooks.
- [ ] archives supplementary materials on preserved digital repositories such as [zenodo.org](https://zenodo.org/), [figshare.com](http://figshare.com/), [softwareheritage.org](https://www.softwareheritage.org/), [osf.io](https://osf.io/), or institutional repositories
- [ ] releases supplementary material under a clearly-identified open license such as [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/) or [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)


## General Criteria

Rather than evaluating reproducibility or replicability in principle, reviewers should focus on the extent to which artifacts that can be released, are released.

## Invalid Criticisms

Researchers should not complain that a study involves artifacts which— for good reasons—cannot be released.

## Examples of Acceptable Deviations

- dataset is not released because it cannot be safely deidentified (e.g. interview transcripts; videos of participants)
- source code is not released because it is closed-source and belongs to industry partner

## Notes

- authors are encouraged to self-archive their pre- and post-prints in open and preserved repositories
- open science is challenging for qualitative studies; reviewers should welcome qualitative studies which open their artifacts even in a limited way
- personal or institutional websites, version control systems (e.g. GitHub), consumer cloud storage (e.g. Dropbox), and commercial paper repositories (e.g. ResearchGate; Academia.edu) do not offer properly archived and preserved data.

## Suggested Readings

Noemi Betancort Cabrera, Elke C Bongartz, Nora Dörrenbächer, Jan Goebel, Harald Kaluza, & Pascal Siegers. 2020. White Paper on implementing the FAIR principles for data in the Social, Behavioural, and Economic Sciences (No. 274). RatSWD Working Paper. [https://www.econstor.eu/handle/10419/229719](https://www.econstor.eu/handle/10419/229719)

Carlos Diego Nascimento Damasceno. 2022. Guidelines for Quality Management of Research Artifacts in Model-Driven Engineering. _MOdeling LAnguages (blog)_. Retrieved July 17, 2022 from [https://modeling-languages.com/guidelines-for-quality-management-of-research-artifacts-in-model-driven-engineering/#](https://modeling-languages.com/guidelines-for-quality-management-of-research-artifacts-in-model-driven-engineering/#)

Daniel Graziotin. 2020. SIGSOFT open science policies. Retrieved July 12, 2020 from [https://github.com/acmsigsoft/open-science-policies/blob/master/sigsoft-open-science-policies.md](https://github.com/acmsigsoft/open-science-policies/blob/master/sigsoft-open-science-policies.md)

Daniel Graziotin. 2018. How to disclose data for double-blind review and make it archived open data upon acceptance
Retrieved Feb 24, 2024 from [https://github.com/dgraziotin/disclose-data-dbr-first-then-opendata](https://github.com/dgraziotin/disclose-data-dbr-first-then-opendata)

Daniel Méndez, Daniel Graziotin, Stefan Wagner, and Heidi Seibold. 2019. Open science in software engineering. _arXiv_. [https://arxiv.org/abs/1904.06499](https://arxiv.org/abs/1904.06499)

GitHub. 2016. Making Your Code Citable. Retrieved July 12, 2020 from [https://guides.github.com/activities/citable-code/](https://guides.github.com/activities/citable-code/). (How to automatically archive a GitHub repository to Zenodo)

Figshare. How to connect Figshare with your GitHub account. Retrieved July 12, 2020 from [https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account) (How to automatically archive a GitHub repository to Figshare)

## Examplar Artifacts
Below are example artifacts for different types of software engineering research to aid in preparing reusable and functional research artifacts.

#### Method: Experiments (System Evaluations, etc) and Quasi-Experiments

Chen, M., Tan, T., Pan, M., & Li, Y. (2025, March). PacDroid: A Pointer-Analysis-Centric Framework for Security Vulnerabilities in Android Apps. In 2025 IEEE/ACM 47th International Conference on Software Engineering (ICSE) (pp. 744-744). IEEE Computer Society. (Artifact). Zenodo. [https://doi.org/10.5281/zenodo.14863334](https://doi.org/10.5281/zenodo.14863334)

T. R. Schorlemmer, K. G. Kalu, L. Chigges, et al., “Signing in four public software package registries: Quantity, quality, and influencing factors,” in 2024 IEEE Symposium on Security and Privacy (SP), Los Alamitos, CA, USA: IEEE Computer Society, May 2024. (Artifact) Github [https://github.com/PurdueDualityLab/signature-adoption](https://github.com/PurdueDualityLab/signature-adoption)
 
#### Method: Empirical Measurements (Non-human studies)
Miao Miao, Austin Mordahl, Dakota Soles, Alice Beideck, Shiyi Wei, "An Extensive Empirical Study of Nondeterministic Behavior in Static Analysis Tools", in 2025 IEEE/ACM 47th International Conference on Software Engineering (ICSE). (Paper)(Artifact) Github [https://github.com/UTD-FAST-Lab/NDSAStudy](https://github.com/UTD-FAST-Lab/NDSAStudy)

Xinchen Wang, Ruida Hu, Cuiyun Gao, Xin-Cheng Wen, Yujia Chen, and Qing Liao. 2024. ReposVul: A Repository-Level High-Quality Vulnerability Dataset. In Proceedings of the 2024 IEEE/ACM 46th International Conference on Software Engineering: Companion Proceedings (ICSE-Companion '24). Association for Computing Machinery, New York, NY, USA, 472–483. (Paper) https://doi.org/10.1145/3639478.3647634. (Artifact) Github [https://github.com/Eshe0922/ReposVul](https://github.com/Eshe0922/ReposVul)

 
#### Method: Human Studies (Interviews, Surveys, etc)

Bianca Trinkenreich, Ricardo Britto, Marco A. Gerosa, and Igor Steinmacher. 2022. An empirical investigation on the challenges faced by women in the software industry: a case study. In Proceedings of the 2022 ACM/IEEE 44th International Conference on Software Engineering: Software Engineering in Society (ICSE-SEIS '22). Association for Computing Machinery, New York, NY, USA, 24–35. (Paper) https://doi.org/10.1145/3510458.3513018 (Artifact)Figshare. [https://figshare.com/s/d1c3bd386083fa55104a](https://figshare.com/s/d1c3bd386083fa55104a)

Kalu, K. G., Singla, T., Okafor, C., Torres-Arias, S., & Davis, J. C. (2025, August). An industry interview study of software signing for supply chain security. In 34th USENIX Security Symposium (USENIX Security 25). USENIX Association. Seattle, WA, USA. (Paper)  (Artifact) Zenodo. [https://doi.org/10.5281/zenodo.14660194](https://doi.org/10.5281/zenodo.14660194)

