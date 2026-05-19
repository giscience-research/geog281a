# __Anatomy of Spatial Uncertainty__

n the first part of the lesson, we treated uncertainty as a broad condition of geographic knowledge.
We asked why GIScience can never fully escape uncertainty, and why uncertainty is not simply a problem of bad data or technical error.
Now we need to slow down and ask a more operational question: __what kind of uncertainty are we actually dealing with?__ 
In this second part, we move from uncertainty as a general condition to __uncertainties as specific forms, sources, and effects__

## __From Uncertainty to Uncertainties__

> A first step is to recognize that uncertainty is not one thing. Different uncertainties have different causes and therefore require different ways of thinking about them. Treating every uncertainty as “error” can be misleading, because not all uncertainty comes from inaccurate measurement.

This is the point of Fisher’s conceptual model of uncertainty in spatial data.
The model begins with a deceptively simple question: is the geographic phenomenon we are trying to map clearly defined?
More specifically, are both the __class of objects__ and the __individual objects__ clearly separable?
For example, do we know what counts as a soil type, a forest, a neighborhood, or a flood zone?
Also, can we clearly identify individual instances of those things on the ground? 
Below, we provide a brief deconstruction of this model.

<div style="text-align: center;">
  <a href="../../assets/U-Fisher.png" class="zoomable">
    <img src="../../assets/U-Fisher.png" style="width: 50%;">
  </a>
</div>

__Figure 1__: Fisher’s conceptual model of uncertainty in spatial data

### __Well-Defined Objects and Error__

In Fisher’s diagram, a __well-defined geographic object__ is one whose class and individual instances can be clearly separated.
Census geographies are a good example.
Even if census boundaries are not perfect, the units themselves are formally defined, and their relationships to larger administrative units are usually explicit.
Land ownership is another example, especially in legal systems where parcels are defined through cadastral boundaries. 
These objects are often well defined because they are created by human institutions to organize space.
Their uncertainty usually comes from errors in measurement, recording, implementation, or representation, rather than from confusion over what the object is.

When a geographic object is well defined, uncertainty can often be treated as __error__.
Error assumes that there is a true value or true condition, and that our data deviate from it in some way.
A location may be recorded slightly away from its true position.
An elevation value may be measured too high or too low.
A land-cover class may be assigned incorrectly.
In these cases, uncertainty can often be described probabilistically because the object and the target value are clear.

<div style="text-align: center;">
  <a href="../../assets/U-ErrorType.png" class="zoomable">
    <img src="../../assets/U-ErrorType.png" style="width: 50%;">
  </a>
</div>

__Figure 2__: Common reasons of a database being error in GIS. 

There are several ways to think about probability in this context.

- One is __measurement error:__ if we repeatedly measure the same property, the measurements may vary around a true value.
- Another is __frequency:__ for example, a flood with a given return period can be described in terms of the probability of that flood level occurring.
- A third is __expert judgment__, where probability represents an informed assessment of likelihood.

Again, these forms of probability are useful when the thing being measured is already clearly defined.
But they are less helpful when the problem is that we are unsure what the object is or where it begins and ends.

### __Poorly Defined Objects__
A __poorly defined geographic object__ is one whose class, boundary, or individual instances are not so easily separated.
This is exemplified in indigenous territories, behavioral neighborhoods, soils, vegetation, and woodland types.
These objects may be meaningful to the people or experts who use them, but they may not be marked, fixed, sharply bounded, or universally defined.

### __Vagueness__
When either the class of object or the individual object is poorly defined, however, uncertainty becomes more complicated.
The problem is no longer simply that we measured something incorrectly but that the thing itself is difficult to define or separate.
This brings us the concept of __vagueness__. 
Vagueness is different from error in that with error, the class is clear but the measurement may be wrong.
For vagueness, the class itself has fuzzy edges.

<div class="image-row">
  <a href="../../assets/U-urban.jpg" class="zoomable">
    <img src="../../assets/U-urban.jpg">
  </a>

  <a href="../../assets/U-treeline.jpg" class="zoomable">
    <img src="../../assets/U-treeline.jpg">
  </a>
</div>

__Figure 3__: When does urban become rural? The urban-rural boundary is often treated as a line in GIS, but on the ground it may appear as a gradual transition of density, land use, infrastructure, and activity. Similarly, snow cover and tree density often change gradually with elevation, yet GIS classifications may require a single boundary such as snow/no snow or forest/non-forest.

It is helpful here to refer back to the classic sorites paradox: one grain of sand is not a heap, and adding one grain at a time does not clearly create a heap, but eventually we would all agree that there is a heap.
The problem is that there is no obvious threshold and many geographic categories work in the same way.

This is also why fuzzy set theory is useful.
Instead of forcing every location into a Boolean yes/no category, fuzzy approaches allow partial membership.
A place can be more or less forest-like, more or less urban, more or less suitable, or more or less part of a soil class.
Fisher notes that fuzzy membership can be identified in different ways.
A data-driven approach might search for patterns in the data, such as through fuzzy clustering.
An expert-driven approach might define membership through rules or formulas specified by researchers or domain experts.

### __Ambiguity__

Another possible problem for poorly-defined objects is __ambiguity__.
Ambiguity occurs when there is confusion or disagreement over how categories should be defined or interpreted, often because different classification systems are being used.

Fisher identifies two forms of ambiguity: __discord__ and __non-specificity__.
Discord occurs when an object is clearly defined but is assigned to different classes under different classification schemes or interpretations.
A simple geographic example would be conflicting territorial claims, where the same piece of land is understood differently by different political actors.
In environmental data, discord can appear when one soil classification system places a profile in one class, while another national or international classification system places it in a different class.

Non-specificity occurs when assigning an object to a class at all is open to interpretation. This can happen when evidence is incomplete, categories overlap, or the classification scheme does not map neatly onto the phenomenon. For example, one agency’s definition of a flood zone, wetland, land-cover type, or soil class may not correspond directly to another agency’s definition. This does not necessarily mean one classification is wrong. It may mean that each classification was designed for a different purpose, scale, or institutional context.

<div style="text-align: center;">
  <a href="../../assets/U-Soil.png" class="zoomable">
    <img src="../../assets/U-Soil.png" style="width: 100%;">
  </a>
</div>

__Figure 4__:  Drawing on Fisher's examples, classification depends on the scheme -  A soil profile may be assigned to different classes under different national or international classification systems. The problem is not simply error; each system may define soil categories differently

The key lesson here is also that different uncertainties require different responses.

- If we are dealing with error, we may need accuracy assessment, probability models, or error propagation.
- If we are dealing with vagueness, we may need fuzzy boundaries or membership values.
- If we are dealing with ambiguity, we may need clearer definitions, metadata, ontology, or explicit comparison between classification systems.

## __Where Uncertainty Enters__

Beyond understanding different kinds of uncertainty, we still need to situate them within the research process.
In the first part of the lesson, we briefly introduced uncertainty as something staged and cumulative, now we return to that framework by Longley et al. more carefully.

As a reminder:

```
Conception → Measurement and Representation → Analysis
```

### __Conception__

The first stage is conception, where GIS users must decide what kind of phenomenon they are studying and what counts as an object, unit, boundary, or category, before they start data collection.
There are two especially important ways that uncertainty enters at the conception stage: through the unit of analysis and through vagueness or ambiguity in defining the problem.

__Unit of analysis:__ We have already encountered this issue in our lesson on scale.
Unlike some sciences that work with relatively clear natural units, GIS often deals with phenomena whose units must be constructed.
This means that the choice of unit of analysis is often partly subjective.
The Openshaw example from the scale lesson makes this issue especially clear.
In that activity, the relationship between variables changed depending on the scale and configuration of the zones.
The data points themselves did not change, but the units used to summarize them did. The uncertainty here is not only measurement error.
It comes from the conceptual decision to treat one zoning system as the appropriate representation of the phenomenon.

__Vagueness and ambiguity in defining the problem:__ Uncertainty also enters when the phenomenon we want to study is vague or ambiguous, which is where Fisher’s typology becomes useful again.
If we were to conduct the Openshaw analysis ourselves, these issues would appear immediately.
We would have to decide what variables to compare, what spatial units to use, what scale of aggregation makes sense, and whether the boundaries we choose are meaningful for the process we are trying to understand.
Are counties the right units? Are smaller zones more appropriate?
Should zones be contiguous?
Should they reflect administrative boundaries, functional relationships, or purely experimental groupings? Each decision shapes the analysis before the analysis technically begins.

<div style="text-align: center;">
  <a href="../../assets/U-OS.png" class="zoomable">
    <img src="../../assets/U-OS.png" style="width: 100%;">
  </a>
</div>

__Figure 5:__ Recall the workflow we construct together about Openshaw's experiment. Some uncertainty comes from standard data issues, such as the voting data, census data, and county geometries used as inputs. But other uncertainty enters through researcher decisions: how neighbors are defined, how many zones are created, whether aggregation is spatially contiguous or non-spatial, and how many iterations are run.

### __Measurement and Representation__

Moving into the second stage, uncertainty arise in how we measure and represent spatial phenomenon in GIS.
Many of these discussion connect back to earlier parts of the course, especially our discussions of fields and objects, raster and vector data, scale, classification, and cartographic generalization.
We will revisit some of them here and connect them to uncertainty.

__Data Models__: The conceptual models we use in GIS impose different filters on reality.
The object view treats the world as composed of discrete entities: points, lines, polygons, parcels, roads, buildings, census tracts, or administrative areas.
This view makes many powerful GIS operations possible, but it also requires us to define the nature and extent of geographic individuals in advance.
We have to decide where an object begins and ends, how objects nest inside larger zones, and whether their boundaries are crisp enough to be represented as lines or polygons.

The field view, by contrast, treats geographic variation as continuous across space.
Elevation, temperature, air pollution, population density, or probability surfaces are examples.
Raster models are efficient and convenient, but their cell boundaries usually have no direct relationship to real-world features.
The grid is imposed on the world.

Neither raster nor vector representation solves uncertainty automatically.
They simply organize it differently.
A coastline, for example, might be represented as a crisp line, as a zone within which the true coastline may fall, or as a probability field showing the likelihood that each location is land. Each representation makes a different claim about what the coastline is and how its uncertainty should be understood.

<div class="image-row">
  <a href="../../assets/U-coastline1.png" class="zoomable">
    <img src="../../assets/U-coastline1.png">
  </a>

  <a href="../../assets/U-coastline2.png" class="zoomable">
    <img src="../../assets/U-coastline2.png">
  </a>
</div>

__Figure 6:__ Illustration of the coastline example described here.

__Statistical Models of Uncertainty__: For nominal data, uncertainty often appears as misclassification.
A parcel recorded as agriculture may actually be grassland. A land-cover class derived from aerial photography may differ from what is observed on the ground.
A remotely sensed image may classify a pixel as forest when field observation suggests shrubland. One common way to assess this kind of uncertainty is through a confusion matrix.
A confusion matrix compares the class recorded in the database with the class verified in the field.
Correct classifications appear along the diagonal of the matrix, while off-diagonal entries show where one class has been confused with another.
This allows us to see not only how much error exists, but which categories are most often mistaken for each other.

For interval or ratio data, uncertainty appears as the difference between a measured value and a true value.
Elevation, distance, temperature, income, and pollution concentration are examples. Note the difference between accuracy from precision.
A measurement can be precise in the sense that repeated measurements are consistent, but still inaccurate if they are biased.
Precision can also refer to the number of digits used to report a value, which can create a false sense of certainty.
One common measure for continuous error is RMSE, or root mean square error.
RMSE summarizes the average magnitude of errors and is often used for data such as digital elevation models.
The chapter also introduces the Gaussian or normal distribution as a common model for measurement error.
In a DEM, for example, an elevation value of 350 meters does not mean the true elevation is exactly 350 meters.
It means the true value may fall within a range around that measurement, depending on the error model.

__Positional Error__: A particularly important form of measurement uncertainty in GIS is positional error. 
For example, imagine a square whose corner coordinates are collected with GPS. GIS software may calculate the area of that square to many decimal places.
But if the GPS coordinates themselves are uncertain, then most of those decimal places are meaningless.
The output appears precise, but the precision is produced by the software, not by the quality of the original measurement.
This is a recurring problem in GIS: the final result often looks more certain than the input data allow.
A polygon area, a buffer boundary, a shortest path, or an overlay result may appear exact, but it inherits the uncertainty of the measurements used to produce it.

### __Analysis of Geographic Phenomena__

__Internal and external validation__: One way to assess uncertainty in analysis is through validation.
We can think about this in two broad ways: internal validation and external validation.
Internal validation uses the GIS workflow itself to test how sensitive results are to analytical choices.
For example, in the Openshaw example, we might change the scale of aggregation, shift point locations within plausible error bounds, use alternative zoning systems, or simulate multiple possible versions of the input data.
If the result remains similar across these variations, we may have more confidence in it.
If the result changes substantially, then the analysis is sensitive to uncertainty in the workflow.
External validation compares GIS results against other data sources or independent evidence.
If a modeled flood-risk area corresponds with observed flood reports, insurance claims, or field observations, that gives us one kind of support.
If a predicted hotspot corresponds with independent incident data, that can increase confidence in the result.
However, external validation also has limits.
The “independent” dataset may have its own uncertainty, or it may share lineage with the dataset being validated. So external validation helps assess plausibility, but it does not produce perfect certainty.

| Type of validation        | Main question                                                     | Example                                                                                             |
| ------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Internal validation  | Does the result change if we alter choices within the workflow?   | Openshaw: change scale, zoning, grouping, number of zones, or iterations                            |
| Reproducibility check | Can we regenerate the same result from the same data and code?    | Rerun the same GIS analysis with the same workflow                                                  |
| Robustness check     | Does the conclusion hold across reasonable alternative workflows? | Try different neighborhood definitions, model specifications, or aggregation units                  |
| External validation*  | Does the result agree with independent evidence?                  | Compare flood-risk maps with observed flood reports, or predicted hotspots with later incident data |

__Ecological Fallacy and MAUP__: A second analytical problem is the ecological fallacy.
This occurs when we use aggregate data to make claims about individuals.
For example, if we find that census tracts with higher unemployment also have higher rates of a particular demographic group, we cannot automatically conclude that individuals in that demographic group are more likely to be unemployed.
The ecological fallacy is therefore a problem of interpretation.
The data may be correctly measured at the aggregate level, and the map may be technically accurate, but the inference drawn from it may still be wrong.
This is another way uncertainty enters analysis. Closely related to the ecological fallacy is the modifiable areal unit problem.
This connects directly back to the Openshaw activity from the scale lesson.
The underlying county-level data did not change, but the correlation between variables changed as the data were aggregated into different zoning systems and scales, which demonstrate that spatial analysis is also about the geography through which those variables are summarized.

Griffith and colleagues extend this point to neighborhood analysis.
Many studies treat census tracts or block groups as neighborhoods, assigning everyone within the same areal unit to the same social and physical environment.
But people living in the same tract may experience very different neighborhoods depending on their exact location, mobility, social networks, and daily activity spaces.
This creates neighborhood assignment error: the spatial unit used in the analysis may not match the lived geography of the process being studied.

__Overlaying and Integrating Data from Different Sources__: A final analytical issue is the uncertainty created when GIS integrates data from multiple sources.
GIS is powerful precisely because it allows us to overlay different layers, but each layer may have a different lineage, scale, classification system, positional accuracy, date of collection, and intended use.
When these layers are overlaid, their uncertainties interact.This is why data integration requires attention to lineage and fitness for use. 
here did each dataset come from? At what scale was it created? What was it designed to represent?
How current is it? What categories does it use? Does it share a source with another layer? Are positional errors likely to align or conflict?


<div style="text-align: center;">
  <a href="../../assets/U-vt.png" class="zoomable">
    <img src="../../assets/U-vt.png" style="width: 100%;">
  </a>
</div>

__Figure 7__: Again, this point also connects to the Vermont flood-risk example. FEMA flood zones and Vermont River Corridor data do not simply provide two versions of the same boundary. They represent different conceptions of flood risk: inundation risk in one case, river corridor processes such as erosion and channel movement in the other. Similarly, ACS mobile-home data and E911 point data represent mobile home locations in different ways and at different levels of precision. When these datasets are combined, the result depends on how those different definitions, scales, and measurement histories are reconciled. Here is a clearer visualization of the problem with different river corridor datasets. 

## __Effects of Uncertainty__

A natural next step here is to ask what uncertainty does once it enters our analytical workflow.
Why does it matter? What kinds of problems does it create for maps, spatial patterns, models, aggregation, and decision-making?

### __Uncertainty and Visualization__

One major issue is that uncertainty is difficult to visualize.
Maps are very good at showing spatial patterns, but they are often much less effective at showing how reliable those patterns are.
This is why uncertainty visualization has been a major GIScience research topic since the late 1980s, especially through research on spatial data quality and the visualization of spatial information quality.

Many methods have been proposed for mapping uncertainty, but relatively few have become standard practice in common GIS software.
This gap matters because map readers often look for differences across places: high and low values, clusters, boundaries, gradients, and outliers.
But if the underlying estimates have large errors, apparent differences on the map may not be statistically meaningful.

For example, the Atlas of United States Mortality attempted to help readers interpret geographic variation by including error bars.
Later work on American Community Survey data explored ways to incorporate margins of error into choropleth maps, including bivariate legends that show both the estimate and its reliability.
The goal is not only to map where values are high or low, but to help readers ask whether those differences are reliable enough to support interpretation.

### __Uncertainty in Spatial Patterns and Models__

Uncertainty also affects spatial pattern detection and spatial modeling.
Spatial analysts often use tools such as spatial autocorrelation, hot spot detection, cold spot detection, clustering, and regression models to identify and explain spatial patterns.
But many of these methods assume that the observed data are accurate enough to analyze directly.

That assumption is not always safe.
Sampling error, measurement error, locational error, and model specification error can all affect the values we map and model.
If those errors are substantial, then they should be reflected in confidence intervals, cluster detection, spatial statistics, and model evaluation.
Otherwise, we may treat uncertain patterns as if they were more stable or meaningful than they really are. The same issue applies to spatial models.

### __Spatial Metadata for Data Quality__

Finally, uncertainty needs to be documented.
If uncertainty affects maps, patterns, models, and decisions, then spatial databases should include information about data quality, not just data values.

This is the idea of spatial metadata: metadata that describe the quality of each attribute for each geographic feature.
Some datasets already do this in limited ways. For example, American Community Survey data include margins of error for estimates, which helps users assess sampling uncertainty.
But many datasets still document only certain kinds of uncertainty, while leaving others unclear.
Sampling error may be reported, but aggregation error, locational error, classification uncertainty, lineage, or model uncertainty may be much harder to find.

---

References:

*Longley, P. A., M. F. Goodchild, D. J. Maguire, and D. W. Rhind. 2008. Geographical information systems and science 2nd ed. Chichester: Wiley. (only chapter 6: Uncertainty, pages 127-153)*

*Griffith, D. A., Wong, D. W., & Chun, Y. (2015). Uncertainty-related research issues in spatial analysis. In W. Shi, B. Wu, & A. Stein (Eds.), Uncertainty modelling and quality control for spatial data (pp. 3–11).*

*Fisher, P. F. (2005). Models of uncertainty in spatial data. In P. A. Longley, M. F. Goodchild, D. J. Maguire, & D. W. Rhind (Eds.), Geographical information systems: Principles, techniques, management and applications (Abridged ed., pp. 191–205). Wiley.*
