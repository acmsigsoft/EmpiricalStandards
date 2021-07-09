# Benchmarking (of Software Systems)
<standard name="Benchmarking (of Software Systems)">

A study in which a software system is assessed using a standard tool (i.e. a benchmark) for competitively evaluating and comparing methods, techniques or systems "according to specific characteristics such as performance, dependability, or security” (Kistowski et al. 2015).          

## Application 

This standard applies to empirical research that meets the following conditions.

-   investigates software systems within a defined context with an automated, repeatable procedure
-   studies the software system’s quality of service under a specific workload or usage profile

If the benchmark experiments primarily study software systems, use this standard. 
For experiments with human participants, see the **Experiments (with Human Participants) Standard**.
For simulation of models of the software systems, see the **Simulation (Quantitative) Standard**.
If the study is conducted within a real-world context, see the **Case Study and Ethnography Standard**.
Benchmarking is often used with Engineering Research (see the **Engineering Research (AKA Design Science) Standard**)

## Specific Attributes
### Essential Attributes
<checklist name="Essential">

<method>        
        
- [ ]   EITHER: justifies the selection of an existing, publicly available or standard benchmark (in terms of relevance, timeliness, etc.)  
        OR: defines a new benchmark, including:   
        (i)   the quality to be benchmarked (e.g., performance, availability, scalability, security),  
        (ii)  the metric(s) to quantify the quality,   
        (iii) the measurement method(s) for the metric (if not obvious),   
        (iv)  the workload, usage profile and/or task sample the system under test is subject to (i.e. what the system is doing when the measures are taken)
        and justifies the design of the benchmark (in terms of relevance, timeliness, etc.)
- [ ]   describes the experimental setup for the benchmark in sufficient detail to support independent replication (or refers to such description in supplementary materials)
- [ ]   specifies the workload or usage profile in sufficient detail to support independent replication (or refers to such description in supplementary materials)
- [ ]   allows different configurations of a system under test to compete on their merits without artificial limitations

<other>        
        
- [ ]   provides confidence that a benchmark result is accurate
- [ ]   draws statistically grounded conclusions, e.g., by means of appropriate statistical methods, sufficiently long execution duration and sufficient number of experiment repetitions
- [ ]   avoids roadblocks for users to run the benchmark in their test environments
- [ ]   reuses existing benchmark design components from established benchmarks or discusses why new components are introduced

</checklist>
    
### Desirable Attributes
<checklist name="Desirable">
    
- [ ]   provides supplementary materials including datasets, analysis scripts and (for novel benchmarks) extended documentation  
- [ ]	reports on independent replication of the benchmark results
- [ ]	reports on a large community that uses the benchmark
- [ ]	reports on an independent organization that maintains the benchmark
- [ ]	uses or creates open source benchmarks

</checklist>
    
### Extraordinary Attributes
<checklist name="Extraordinary">

- [ ] provides empirical evidence for the relevance of a benchmark, e.g., using a Systematic Review
- [ ] provides empirical evidence for the usability of a benchmark, e.g., using Action Research

</checklist>
     
## General Quality Criteria 

Fairness of measurements, reproducibility of results across experiment repetitions, benchmarking the *right* aspects, using a realistic benchmark with a representative workload

## Examples of Acceptable Deviations 

-   The article reports on problems with executing benchmark runs.
-   The article compares methods, techniques, or tools by running an existing benchmark and, hence, does not report on properties such as relevance, fairness or usability of the benchmark itself.

## Antipatterns 

-   Tailoring the benchmark for a specific method, technique or tool, which is evaluated with the benchmark.
-   Using benchmarking experiments that are irrelevant for the problem studied to obfuscate weaknesses in the proposed approach
-   Insufficient repitions or duration to assess stability of results 
-   Collecting aggregated measurements instead of persisting all raw results and running an offline analysis

## Invalid Criticisms 

-   The benchmark is not widely used. It should be sufficient to start the development process of a new benchmark with a small group of researchers as an offer to a larger scientific community. Such a proto-benchmark<footnote><sup>[1](#myfootnote1)</sup> can act as a template to further the discussion of the topic and to initialize the consensus process.
-   No independent replication of the benchmark results is reported.
-   There is no independent organization that maintains the benchmark.

## Suggested Readings

David Bermbach, Erik Wittern, and Stefan Tai. 2017. Cloud service benchmarking: Measuring Quality of Cloud Services from a Client Perspective. Springer. DOI: [10.1007/978-3-319-55483-9](https://doi.org/10.1007/978-3-319-55483-9)

Susan Elliott Sim, Steve Easterbrook, and Richard C. Holt. 2003. Using benchmarking to advance research: a challenge to software engineering. In 25th International Conference on Software Engineering. IEEE. DOI: [10.1109/icse.2003.1201189](https://doi.org/10.1109/icse.2003.1201189)

Jim Gray (Ed.). 1993. The Benchmark Handbook for Database and Transaction Systems (2nd ed.). Morgan Kaufmann.

Wilhelm Hasselbring. 2021. Benchmarking as Empirical Standard in Software Engineering Research. In Proceedings of the 25th International Conference on Evaluation and Assessment in Software Engineering (EASE 2021). 365-372. DOI: [10.1145/3463274.3463361](https://doi.org/10.1145/3463274.3463361)

Jóakim v. Kistowski, Jeremy A. Arnold, Karl Huppler, Klaus-Dieter Lange, John L. Henning, and Paul Cao. 2015. How to Build a Benchmark. In Proceedings of the 6th ACM/SPEC International Conference on Performance Engineering. DOI: [10.1145/2668930.2688819](https://doi.org/10.1145/2668930.2688819)

Samuel Kounev, Klaus-Dieter Lange, and Jóakim von Kistowski. 2020. Systems Benchmarking for Scientists and Engineers. Springer. DOI: [10.1007/978-3-030-41705-5](https://doi.org/10.1007/978-3-030-41705-5)

Walter F. Tichy. 1998. Should computer scientists experiment more? Computer 31, 5 (May 1998), 32–40. DOI: [10.1109/2.675631](https://doi.org/10.1109/2.675631)

Walter F. Tichy. 2014. Where’s the Science in Software Engineering? Ubiquity Symposium: The Science in Computer Science. Ubiquity 2014 (March 2014), 1–6.  DOI: [10.1145/2590528.2590529](https://doi.org/10.1145/2590528.2590529)


## Exemplars

Sören Henning and Wilhelm Hasselbring. 2021. Theodolite: Scalability Benchmarking
of Distributed Stream Processing Engines in Microservice Architectures.
Big Data Research 25 (July 2021), 1–17. DOI: [10.1016/j.bdr.2021.100209](https://doi.org/10.1016/j.bdr.2021.100209)

Guenter Hesse, Christoph Matthies, Michael Perscheid, Matthias Uflacker, and Hasso Plattner. 2021. ESPBench: The Enterprise Stream Processing Benchmark. In ACM/SPEC International Conference on Performance Engineering (ICPE '21). ACM, 201–212. DOI: [10.1145/3427921.3450242](https://doi.org/10.1145/3427921.3450242)

Martin Grambow, Erik Wittern, and David Bermbach. 2020. Benchmarking the Performance of Microservice Applications. ACM SIGAPP Applied Computing Review, vol 20, issue 3, 20-34. DOI: [10.1145/3429204.3429206](https://doi.org/10.1145/3429204.3429206)
    
Joakim von Kistowski, Simon Eismann, Norbert Schmitt, Andre Bauer, Johannes Grohmann, and Samuel Kounev. 2018. TeaStore: A Micro-Service Reference Application for Benchmarking, Modeling and Resource Management Research. In 2018 IEEE 26th International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems (MASCOTS). IEEE, 223–236. DOI: [10.1109/mascots.2018.00030](https://doi.org/10.1109/mascots.2018.00030)

Christoph Laaber, Joel Scheuner, and Philipp Leitner. 2019. Software microbenchmarking in the cloud. How bad is it really?. Empirical Software Engineering 24, 2469–2508. DOI: [10.1007/s10664-019-09681-1](https://doi.org/10.1007/s10664-019-09681-1)

Jan Waller, Nils C. Ehmke, and Wilhelm Hasselbring. 2015. Including Performance Benchmarks into Continuous Integration to Enable DevOps. SIGSOFT Softw. Eng. Notes 40, 2 (March 2015), 1–4. DOI: [10.1145/2735399.2735416](https://doi.org/10.1145/2735399.2735416)

---

<footnote><sup>[1](#myfootnote1)</sup> Susan Elliott Sim, Steve Easterbrook, and Richard C. Holt. 2003. Using benchmarking to advance research: a challenge to software engineering. In 25th International Conference on Software Engineering. IEEE. DOI: 10.1109/icse.2003.1201189.</footnote><br>

</standard>
