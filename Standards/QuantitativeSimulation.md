# Simulation (Quantitative)

*A simulation-based study (SBS) involves developing and using a mathematical model that imitates a real-world system&#39;s behavior. SBS&#39;s often entail problem understanding, data collection, model development, verification and validation, design of experiments, data analysis, and implementation of results.*

## Application

The standard applies to research studies that use simulation to understand, assess or improve a system or process and its behavior. Use this standard for _in silico_ simulations, i.e., studies representing everything using computational models. For _in virtuo_ simulations, i.e., human participants manipulating simulation models, use the **Experiments (with human participants) Standard**. For simulations that propose a new or improved technological artifact, also consider the **Engineering Research** standard.

## Specific Attributes
### Essential Attributes
- [ ] justifies that simulation is a suitable method for investigating the problem at hand.
- [ ] describes the simulation model (conceptual, implementation, or hybrid abstraction levels), including input parameters and response variables.
- [ ] describes the underlying simulation approach (discrete-event simulation, system dynamics, agent-based simulation, or others<sup>[1](#myfootnote1)</sup>).
- [ ] describes simulation packages or tools used to develop and run the simulation model, as well as their associated versions, and computational environment.
- [ ] describes the data used for model calibration, as well as calibration procedures, along with contextual information.
- [ ] describes how the simulation model was verified and validated at different abstraction levels<sup>[2](#myfootnote2)</sup>.
- [ ] describes the experimental design, including experimental factors, scenarios, number of runs per scenario (in case of using stochastic simulation), and steady-state or terminating conditions.
- [ ] analyzes validity threats<sup>[3](#myfootnote3)</sup>
considering the supporting data and the simulation model.
- [ ] clearly explicates the assumptions in the simulation model.

### Desirable Attributes
- [ ] characterizes reference behaviors<sup>[4](#myfootnote4)</sup>
for the definition of simulation scenarios with representative and known values or probability distributions for input parameters.
- [ ] separates conceptual and implementation levels of the simulation model.
- [ ] provides supplementary materials including raw data (for real data) or generation mechanism (for synthetic data) used for model calibration, all simulation models and source code, and analysis scripts using an open repository.
- [ ] reports sensitivity analysis for input parameters or factors.

### Extraordinary Attributes
- [ ] describes how stakeholders<sup>[5](#myfootnote5)</sup> were involved in developing and validating the simulation model.
- [ ] provides a modular view<sup>[6](#myfootnote6)</sup> of the simulation model, allowing reuse into different contexts.

## General Quality Criteria

Conclusion validity, construct validity, internal validity (if examining causal relationships), external validity, and reproducibility.

## Antipatterns

- Overfitting<sup>[7](#myfootnote7)</sup>
the simulation model to reproduce a reference behavior.
- Use of _non-standard_ experimental designs<sup>[8](#myfootnote8)</sup>
without justification.
- Using a single run instead of multiple runs to experiment with stochastic models.

## Examples of Acceptable Deviations

- If insufficient data is available (or too costly to collect) to calibrate the model, assumptions can be used to implement parts of the model. These assumptions, however, must be explained and justified.
- When the translation from a conceptual to implementation model is straightforward, authors may mix them up.
- If the use of the underlying simulation approach is very common in software engineering, like discrete-event simulation or system dynamics, it is enough to mention and cite it. There is no need for a full description of how the approach works in general.

## Invalid Criticisms

- The mere presence of assumption in the model is an invalid critique. It is sufficient if assumptions are documented and justified, and their implications on the validity of the simulation are sufficiently addressed.
- The model should have an abstraction level adequate for its purpose/goal.
- In case of unavailability of primary data, approximations based on expert opinion or secondary data (from other companies or previous research) are used. Such decisions must be justified and their impact on the validity of the simulation results must be sufficiently considered.

## Suggested Readings

Nauman Bin Ali, Kai Petersen. A consolidated process for software process simulation: State of the art and industry experience. In: 38th Euromicro Conference on Software Engineering and Advanced Applications, 2012, IEEE, pp 327–336.  
Nauman Bin Ali, Kai Petersen, Claes Wohlin. A systematic literature review on the industrial use of software process simulation. _Journal of Systems and Software_, 97, 2014, 65–85.  
Dietmar Pfahl. Process Simulation: A Tool for Software Project Managers? In: Günther Ruhe, Claes Wohlin (Eds.) Software Project Management in a Changing World. Springer-Verlag Berlin Heidelberg, 2014, 425-446.  
Ivo Babuska, and J. Tinsley Oden. Verification and validation in computational engineering and science: basic concepts. _Computer methods in applied mechanics and engineering_, 193, 36, 2004, 4057–4066.  
Breno Bernard Nicolau de França, Nauman Bin Ali. The Role of Simulation-Based Studies in Software Engineering Research. In: Felderer M., Travassos G. (eds) _Contemporary Empirical Methods in Software Engineering_. Springer, Cham. 2020. https://doi.org/10.1007/978-3-030-32489-6\_10.  
Breno Bernard Nicolau de França, Guilherme Horta Travassos. Experimentation with dynamic simulation models in software engineering: planning and reporting guidelines. _Empirical Software Engineering_, 21, 3, 2016, 1302–1345.  
Breno Bernard Nicolau de França, Guilherme Horta Travassos. (2015). Simulation Based Studies in Software Engineering: A Matter of Validity. CLEI Electronic Journal, 18(1), 5.  
Houston DX, Ferreira S, Collofello JS, Montgomery DC, Mackulak GT, Shunk DL. Behavioral characterization: finding and using the influential factors in software process simulation models. _Journal of Systems and Software_, 59, 3, 2001, 259– 270, DOI https://doi.org/10.1016/S0164-1212(01)00067-X.  
Kleijnen JPC, Sanchez SM, Lucas TW, Cioppa TM. State-of-the-art review: A user&#39;s guide to the brave new world of designing simulation experiments. _INFORMS Journal on Computing_, 17, 3, 2005, 263–289. DOI 10.1287/ijoc.1050.0136.  
Law AM. _Simulation modeling and analysis_. Vol 4, 2007, McGraw-Hill New York.  
Madachy RJ. Software Process Dynamics, 2008, Wiley-IEEE Press.

## Exemplars

Ali NB, Petersen K, de França BBN (2015) Evaluation of simulation-assisted value stream mapping for software product development: Two industrial cases. Information &amp; Software Technology 68:45–61 [an example of a simulation-based study in industrial settings].  
Concas, Giulio, Maria Ilaria Lunesu, Michele Marchesi, and Hongyu Zhang. &quot;Simulation of software maintenance process, with and without a work‐in‐process limit.&quot; Journal of software: Evolution and Process 25, no. 12 (2013): 1225-1248. [an example of model description and discussion of threats to validity].  
Garousi V, Khosrovian K, Pfahl D (2009) A customizable pattern-based software process simulation model: design, calibration, and application. Software Process: Improvement and Practice 14(3):165–180, DOI 10.1002/spip.411. [an example of a complete report of a simulation-based study].  
Smith, Neil, Andrea Capiluppi, and Juan F. Ramil. &quot;A study of open source software evolution data using qualitative simulation.&quot; Software Process: Improvement and Practice 10, no. 3 (2005): 287-300. [an example of a simulation study using a unusual simulation approach: qualitative simulation].  

---
[1](#sdfootnote1anc) de França, Breno Bernard Nicolau; Travassos, Guilherme Horta. Are We Prepared for Simulation Based Studies in Software Engineering Yet? _CLEI ELECTRONIC JOURNAL, vol. 16 (1), paper 8._ 2013.  
[2](#sdfootnote2anc) Some verification and validation (V&amp;V) procedures may be applied to the model at the conceptual level (e.g., validating variables and relationships) down to an implementation level (e.g., using tests, reproducing reference behaviors, or performing simulated experiments).  
[3](#sdfootnote3anc) Simulation studies are prone to several validity threats, including non-representative simulation scenarios, no use of V&amp;V procedures, using different datasets (contexts) for model calibration and experimentation, and others (de França and Travassos, 2015),  
[4](#sdfootnote4anc) Reference behaviors represent a real-world model (often based on actual measurement of a system or process), which is characterized by data distribution or series of model variables. Usually, these models are used for validating simulation outcomes. For instance, an effort and schedule baseline for software project simulation.  
[5](#sdfootnote5anc)Apart from the developers of the simulation model, stakeholders could be data providers (for model calibration), domain experts (who may have hypotheses about causal relationships between model variables) and users of the simulation model. All of these stakeholders could, for example, be involved in checking the plausibility of the model output (face validity check).  
[6](#sdfootnote6anc) Understanding simulation models as software, they may become too large and difficult to understand in a single view. So, the idea is to have a composite model, in which each module concerns a particular set of variables. The following book presents an entire model on software projects in a modular perspective: Abdel-Hamid, T. and Madnick, S.E., 1991. Software project dynamics: an integrated approach. Prentice-Hall, Inc.  
[7](#sdfootnote7anc) For instance, implementing a specific model capable of only producing desired outcomes.  
[8](#sdfootnote8anc) Houston et al (2001) discusses some usual experimental design for software process simulation, such as (fractional) factorial designs. For a more general view on experimental designs for simulation, we suggest Kleijnen et al (2005).