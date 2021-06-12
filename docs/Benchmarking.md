# Benchmarking
<standard name="Benchmarking">

*In empirical software engineering research, benchmarks can be used for comparing different methods, techniques and tools.*

## Application 

This standard applies to empirical research that meets the following conditions.

-   investigates software systems within a defined context with an automated, repeatable procedure
-   studies the software system’s quality, given defined synthetic workloads
-   compares different artifacts that are the result of applying the **Engineering Research (AKA Design Science) Standard**

If the benchmark experiments primarily study software systems, use this standard. 
For experiments with human participants, see the **Experiments (with Human Participants) Standard**.
For simulations of models of the software systems, see the **Simulation (Quantitative) Standard**.
If the study is conducted within a real-world context, see the **Case Study and Ethnography Standard**.


## Specific Attributes
### Essential Attributes
<checklist name="Essential">

- [ ]   justifies the relevance of the benchmark
- [ ]   describes the experimental setup for the benchmark with sufficient detail
- [ ]   specifies the synthetic workload with sufficient detail
- [ ]   allows different test configurations to compete on their merits without artificial limitations
- [ ]   provides confidence that a benchmark result is accurate
- [ ]   avoids roadblocks for users to run the benchmark in their test environments
- [ ]   provides a replication package including datasets and analytical scripts (for the **Engineering Research (AKA Design Science) Standard** this a desirable attribute, for benchmarks this is an essential attribute)

</checklist>
    
### Desirable Attributes
<checklist name="Desirable">
    
- [ ]	reports on independent replication of the benchmark
- [ ]	reports on a large community that uses the benchmark
- [ ]	reports on an independent organization that maintains the benchmark.

</checklist>
    
### Extraordinary Attributes
<checklist name="Extraordinary">

- [ ]	tbd

</checklist>
     
## General Quality Criteria 

tbd

## Examples of Acceptable Deviations 

-   The article reports on problems with executing benchmark runs.

## Antipatterns 

-   Tailoring benchmarks toward a specific method, technique or tool, which is evaluated with the benchmark.

## Invalid Criticisms 

-   There is no large community that uses the benchmark. It should be sufficient to start the development process of a new benchmark with a small group of researches as an offer to a larger scientific community. Such a proto-benchmark<footnote><sup>[1](#myfootnote1)</sup> can act as a template to further the discussion of the topic and to initialize the consensus process.
-   No independent replication of the benchmark is reported.
-   The exists no independent organization that maintains the benchmark.

## Suggested Readings

David Bermbach, Erik Wittern, and Stefan Tai. 2017. Cloud service benchmarking. Springer.

Susan Elliott Sim, Steve Easterbrook, and Richard C. Holt. 2003. Using benchmarking to advance research: a challenge to software engineering. In 25th International Conference on Software Engineering. IEEE. DOI: 10.1109/icse.2003.1201189

Jim Gray (Ed.). 1993. The Benchmark Handbook for Database and Transaction Systems (2nd ed.). Morgan Kaufmann.

Jóakim v. Kistowski, Jeremy A. Arnold, Karl Huppler, Klaus-Dieter Lange, John L. Henning, and Paul Cao. 2015. How to Build a Benchmark. In Proceedings of the 6th ACM/SPEC International Conference on Performance Engineering. DOI: 10.1145/2668930.2688819

Samuel Kounev, Klaus-Dieter Lange, and Jóakim von Kistowski. 2020. Systems Benchmarking for Scientists and Engineers. Springer.

Walter F. Tichy. 1998. Should computer scientists experiment more? Computer 31, 5 (May 1998), 32–40. DOI: 10.1109/2.675631

Walter F. Tichy. 2014. Where’s the Science in Software Engineering? Ubiquity Symposium: The Science in Computer Science. Ubiquity 2014 (March 2014), 1–6. DOI: 10.1145/2590528.2590529


## Exemplars

Sören Henning and Wilhelm Hasselbring. 2021. Theodolite: Scalability Benchmarking
of Distributed Stream Processing Engines in Microservice Architectures.
Big Data Research 25 (July 2021), 1–17. DOI: 10.1016/j.bdr.2021.100209

Joakim von Kistowski, Simon Eismann, Norbert Schmitt, Andre Bauer, Johannes Grohmann, and Samuel Kounev. 2018. TeaStore: A Micro-Service Reference Application for Benchmarking, Modeling and Resource Management Research. In 2018 IEEE 26th International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems (MASCOTS). IEEE, 223–236. DOI: 10.1109/mascots.2018.00030

Jan Waller, Nils C. Ehmke, and Wilhelm Hasselbring. 2015. Including Performance Benchmarks into Continuous Integration to Enable DevOps. SIGSOFT Softw. Eng. Notes 40, 2 (March 2015), 1–4. DOI: 10.1145/2735399.2735416

---

<footnote><sup>[1](#myfootnote1)</sup> Susan Elliott Sim, Steve Easterbrook, and Richard C. Holt. 2003. Using benchmarking to advance research: a challenge to software engineering. In 25th International Conference on Software Engineering. IEEE. DOI: 10.1109/icse.2003.1201189.</footnote><br>

</standard>
