# Simulation (Quantitative)
<standard name="Simulation">



*<desc>A study that involves developing and using a mathematical model that imitates a real-world system's behavior, which often entails problem understanding, data collection, model development, verification, validation, design of experiments, data analysis, and implementation of results.</desc>*



## Application

The standard applies to research studies that use simulation to understand, assess or improve a system or process and its behavior. Use this standard for _in silico_ simulations, i.e., studies representing everything using computational models. For _in virtuo_ simulations, i.e., human participants manipulating simulation models, use the **Experiments (with human participants) Standard**. For simulations used to assess a new or improved technological artifact, also consider the **Engineering Research** standard.

## Specific Attributes

### Essential Attributes
<checklist name="Essential">

<intro>

- [ ] justifies that simulation is a suitable method for investigating the problem (or research question, etc.)

<method>

- [ ] describes the simulation model (conceptual, implementation, or hybrid abstraction levels), including input parameters and response variables
- [ ] describes the underlying simulation approach<sup>[1](#myfootnote1)</sup>)
- [ ] describes simulation packages or tools used to develop and run the simulation model, including version numbers, and computational environments
- [ ] describes the data used for model calibration, the calibration procedures, and contextual information
- [ ] describes how the simulation model was verified and validated at different abstraction levels<sup>[2](#myfootnote2)</sup>
- [ ] describes the study protocol, including independent variables, scenarios, number of runs per scenario (in case of using stochastic simulation), and steady-state or terminating conditions
- [ ] analyzes validity threats considering the supporting data and the simulation model<sup>[3](#myfootnote3)</sup>
- [ ] clearly explicates the assumptions of the simulation model

<results>

<discussion>

<other>    

</checklist>
    
### Desirable Attributes
<checklist name="Desirable">

- [ ] provides supplementary materials including the raw data (for real data) or generation mechanism (for synthetic data) used for model calibration, all simulation models and source code, analysis scripts
- [ ] characterizes reference behaviors for the definition of simulation scenarios with representative and known values or probability distributions for input parameters<sup>[4](#myfootnote4)</sup> 
- [ ] separates conceptual and implementation levels of the simulation model
- [ ] reports sensitivity analysis for input parameters or factors
- [ ] clearly distinguishes evidence-based results from interpretations and speculation<sup>[5](#myfootnote5)</sup>
</checklist>
    
### Extraordinary Attributes
<checklist name="Extraordinary">

- [ ] describes how stakeholders were involved in developing and validating the simulation model<sup>[6](#myfootnote6)</sup>
- [ ] provides a modular view of the simulation model, allowing reuse in different contexts<sup>[7](#myfootnote7)</sup>
</checklist>

## General Quality Criteria

Conclusion validity, construct validity, internal validity (if examining causal relationships), external validity, and reproducibility.

## Antipatterns

- Overfitting<sup>[8](#myfootnote8)</sup>
the simulation model to reproduce a reference behavior.
- Use of non-standard experimental designs<sup>[9](#myfootnote9)</sup>
without justification.
- Using a single run instead of multiple runs to experiment with stochastic models.

## Examples of Acceptable Deviations

- If insufficient data is available (or too costly to collect) to calibrate the model, assumptions can be used to implement parts of the model. These assumptions, however, must be explained and justified.
- When the translation from a conceptual to implementation model is straightforward, authors may present them together.
- If the simulation approach used is very common in software engineering (e.g. discrete-event simulation, system dynamics), it is sufficient to indicate which approach is used, citing appropriate references, rather than explaining in full how the approach works.

## Invalid Criticisms

- The mere presence of assumptions in the model is not a valid basis for criticism _as long as_ the assumptions are documented and justified, and their implications for the validity of the simulation are sufficiently addressed. All models make assumptions.
- Claiming that the model is too abstact without explaining why the level of abstraction is inadequate for the purposes of the study. 
- Claiming that the study is invalid because it uses generated data, secondary data or approximations based on expert opinion, _when no appropriate primary data is available_. 

## Suggested Readings

Nauman Bin Ali, Kai Petersen. A consolidated process for software process simulation: State of the art and industry experience. In: _38th Euromicro Conference on Software Engineering and Advanced Applications_, 2012, IEEE, pp 327–336.  

Nauman Bin Ali, Kai Petersen, Claes Wohlin. A systematic literature review on the industrial use of software process simulation. _Journal of Systems and Software_, 97, 2014, 65–85.  

Dietmar Pfahl. Process Simulation: A Tool for Software Project Managers? In: Günther Ruhe, Claes Wohlin (Eds.) _Software Project Management in a Changing World._ Springer-Verlag Berlin Heidelberg, 2014, 425-446.  

Ivo Babuska, and J. Tinsley Oden. Verification and validation in computational engineering and science: basic concepts. _Computer methods in applied mechanics and engineering_, 193, 36, 2004, 4057–4066.  

Breno Bernard Nicolau de França, Nauman Bin Ali. The Role of Simulation-Based Studies in Software Engineering Research. In: Felderer M., Travassos G. (eds) _Contemporary Empirical Methods in Software Engineering_. Springer, Cham. 2020. https://doi.org/10.1007/978-3-030-32489-6\_10.  

Breno Bernard Nicolau de França, Guilherme Horta Travassos. Experimentation with dynamic simulation models in software engineering: planning and reporting guidelines. _Empirical Software Engineering_, 21, 3, 2016, 1302–1345.  

Breno Bernard Nicolau de França, Guilherme Horta Travassos. (2015). Simulation Based Studies in Software Engineering: A Matter of Validity. _CLEI Electronic Journal_, 18(1), 5.  

Houston DX, Ferreira S, Collofello JS, Montgomery DC, Mackulak GT, Shunk DL. Behavioral characterization: finding and using the influential factors in software process simulation models. _Journal of Systems and Software_, 59, 3, 2001, 259– 270, DOI https://doi.org/10.1016/S0164-1212(01)00067-X.  

Kleijnen JPC, Sanchez SM, Lucas TW, Cioppa TM. State-of-the-art review: A user&#39;s guide to the brave new world of designing simulation experiments. _INFORMS Journal on Computing_, 17, 3, 2005, 263–289. DOI 10.1287/ijoc.1050.0136.  

Law AM. _Simulation modeling and analysis_. 5th ed., 2015, McGraw-Hill, New York.  

Madachy RJ. _Software Process Dynamics_, 2008, Wiley-IEEE Press.

## Exemplars

Ali NB, Petersen K, de França BBN (2015) Evaluation of simulation-assisted value stream mapping for software product development: Two industrial cases. _Information &amp; Software Technology_ 68:45–61 [an example of a simulation-based study in industrial settings].  

Concas, Giulio, Maria Ilaria Lunesu, Michele Marchesi, and Hongyu Zhang. &quot;Simulation of software maintenance process, with and without a work‐in‐process limit.&quot; _Journal of software: Evolution and Process_ 25, no. 12 (2013): 1225-1248. [an example of model description and discussion of threats to validity].  

Garousi V, Khosrovian K, Pfahl D (2009) A customizable pattern-based software process simulation model: design, calibration, and application. _Software Process: Improvement and Practice_ 14(3):165–180, DOI 10.1002/spip.411. [an example of a complete report of a simulation-based study].  

Smith, Neil, Andrea Capiluppi, and Juan F. Ramil. &quot;A study of open source software evolution data using qualitative simulation.&quot; _Software Process: Improvement and Practice_ 10, no. 3 (2005): 287-300. [an example of a simulation study using a unusual simulation approach: qualitative simulation].  

---
<footnote><sup>[1](#myfootnote1)</sup> e.g. discrete-event simulation, system dynamics, agent-based simulation</footnote><br>
<footnote><sup>[2](#myfootnote2)</sup> Some verification and validation procedures may be applied to the model at the conceptual level (e.g., validating variables and relationships) down to an implementation level (e.g., using tests, reproducing reference behaviors, or performing simulated experiments).</footnote><br>
<footnote><sup>[3](#myfootnote3)</sup> Simulation studies are prone to several validity threats, including non-representative simulation scenarios, insufficient verification and validation, using different datasets (contexts) for model calibration and experimentation, and others (de França and Travassos, 2015).</footnote><br>
<footnote><sup>[4](#myfootnote4)</sup> Reference behaviors represent a real-world model (often based on actual measurement of a system or process), which is characterized by data distribution or series of model variables. Usually, these models are used for validating simulation outcomes. For instance, an effort and schedule baseline for software project simulation.</footnote><br>
<footnote><sup>[5](#myfootnote5)</sup> Simply separating results and discussion into different sections is typically sufficient. No speculation in the results section.</footnote><br>
<footnote><sup>[6](#myfootnote6)</sup> Apart from the developers of the simulation model, stakeholders could be data providers (for model calibration), domain experts (who may have hypotheses about causal relationships between model variables) and users of the simulation model. All of these stakeholders could, for example, be involved in checking the plausibility of the model output (face validity check).</footnote><br>
<footnote><sup>[7](#myfootnote7)</sup> Understanding simulation models as software, they may become too large and difficult to understand in a single view. So, the idea is to have a composite model, in which each module concerns a particular set of variables. The following book presents an entire model on software projects in a modular perspective: Abdel-Hamid, T. and Madnick, S.E., 1991. Software project dynamics: an integrated approach. Prentice-Hall, Inc.</footnote><br>
<footnote><sup>[8](#myfootnote8)</sup> For instance, implementing a specific model capable of only producing desired outcomes.</footnote><br>
<footnote><sup>[9](#myfootnote9)</sup> Houston et al. (2001) discusses some usual experimental design for software process simulation, such as (fractional) factorial designs. For a more general view on experimental designs for simulation, we suggest Kleijnen et al. (2005).</footnote><br>

</standard>
