# Information Visualization 

Diagrams that map quantitative values to visual objects their visual
attributes to aid understanding

## Application 

This crosscutting guideline applies to visualizations of quantitative
data. Graphical visualization consists of diagrams that map quantitative
values to visual objects (e.g. segments, points, circles) and to their
visual attributes (e.g. length, position, size, color). Their goal is to
support the reader in a data understanding task. It does not apply to:

-   Software visualization, such as showing structure or architecture of
    a software product.
-   Diagrams not encoding quantitative values, e.g. UML activity
    diagrams, BPMN diagrams, flow charts.
-   Tables that encode data in textual format.

## Attributes 

- [ ]   proportionality
    -   the values/measures are reported in a uniformly proportional way:
        the ratio of two values is equal to the geometrical ratio on paper (or screen) of the corresponding visual attributes (length, area, slope, etc.) \[lie factor\]
    -   the visual attributes provide an accurate perception of the proportion, according to the attribute ranking:
        -   position along a common scale
        -   position along identical scales
        -   length
        -   angle/slope
        -   area
    -   diagrams are rendered in 2D and refrain from 3D perspectives that might alter the perception of dimensions
    -   encoding of ordinal measures through colors use saturation and lightness and avoid rainbow palettes


- [ ]   utility

    -   all the elements in the diagram convey useful information or support clarity  
    -   the diagram does not contain chartjunk or over-designed elements that interfere with perception or understanding 
    -   the background is light and uniform
    -   there are no decorative 3D effects
    -   bright and saturated colors are used solely for emphasis
    -   grids are light and do not obscure data
    -   annotations are less prominent than data

- [ ]   clarity

    -   the diagram layout and text annotation support the understanding of the data and make the visualization as much self-contained as possible
        -   the title (or figure caption) concisely conveys what is the content of the visualization and the intended message
        -   text annotations guide the reader in understanding the message
    -   direct labeling is used instead of a separate legend especially when there are more than two color codes
    -   color encoding of categorical measures is limited to at most 5 distinct levels; more colors are too difficult to discriminate
    -   when data points are very dense, appropriate techniques are applied to mitigate overplotting
    -   axes and the relative tick marks are labelled
    -   the size of text is large enough to make it readable.
    -   image format is preferably vectorial, if a raster format is used it must have sufficient resolution.

- [ ]   diagram design

    -   the diagram contains at most two axes unless a surface (function of two variables) is the standard representation
    -   use of logarithmic scales is explicitly highlighted
    -   data objects (e.g. bars) are sorted in a meaningful way (e.g. ascending, descending or grouped) to ease comparison
    -   non-interactive visualization should serve a single understanding task
    -   the type of visualization is appropriate for the visual understanding task that it is intended to support (Table 1)
    -   *(optional)* several data series should usually be reported using multiple small diagrams rather than in a single crowded diagram

### Table 1: When to use which visualization

| Understanding task | Commonly used type of visualization                                                            |   
|--------------------|------------------------------------------------------------------------------------------------|
| Comparison         | Bar plot, Dot plot, Heatmap, Strip plot, Isotype                                               |  
| Correlation        | Scatter plot, Bubble chart, Slope chart, Dumbbell plot, Diverging bars                         |   
| Deviation          | Bullet graph, Gauge                                                                            |   
| Distribution       | Histogram, Frequency polygon, Cumulative density, Quantile-quantile plot, Boxplot, Violin plot |   
| Geo location       | Choroplet map, Cartogram                                                                       |   
| Part-to-whole      | Bar plot, Stacked bars, Treemap, Waffle, Pie                                                   |  
| Ranking            | Bar plot, Dot plot, Lollypop                                                                   | 
| Time series        | Line plot, Bar plot, Streamgraph                                                               | 

## Anti-patterns 

-   using truncated bars to exaggerate differences, compromising
    proportionality instead of using other representations (e.g. dot
    plots)
-   using pie charts for more than 5 categories and/or without direct
    labelling of the slices
-   using dual vertical scales that are difficult to read and lend
    themselves to ambiguity due to the arbitrary selection of axis
    ranges
-   using any 3D effect or decoration that may alter perception

## Suggested Readings 

Colin Ware. 2000. Information Visualization: Perception for Design.
Morgan Kaufmann Publishers, Inc., San Francisco, California.

David Borland and R. M. Taylor Ii. 2007. Rainbow Color Map (Still)
Considered Harmful. *IEEE Computer Graphics and Applications*. 27, 2,
14–17.

Financial Times Visual Journalism Team. Visual Vocabulary. Retrieved
July 12, 2020 from <https://ft.com/vocabulary>

Claus O. Wilke. Fundamentals of Data Visualization, O'Reilly, 2019.
Retrieved July 12, 2020 from <https://serialmentor.com/dataviz/>

Simon Fear. Publication quality tables in LATEX. 2020. Retrieved July
12, 2020 from
<http://mirrors.ctan.org/macros/latex/contrib/booktabs/booktabs.pdf>
