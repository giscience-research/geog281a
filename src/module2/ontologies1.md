# __Spatial Ontologies - Space__

Near the end of the previous lesson, we considered O’Sullivan's encouragement us to slow down and interrogate seemingly simple words like near, related, or distant. 
At first glance these terms feel obvious and objective. 
However, once we look closely, these terms turn out to be surprisingly slippery. 
For example, is _near_ measured in meters, in minutes, in social connection, or in accessibility? 
The answer depends on the context and question being studied. 
What counts as _near_ for walking is different from driving, and what counts as connected socially is different from geographically adjacent. Boundaries are often fuzzy, porous, or contested rather than crisp and fixed<sup><a class="sidenote-ref" href="#sn-1">1</a></sup>. 
This ambiguity raises a deeper concern: 

> If basic spatial concepts such as distance, boundary, or region are not fixed and absolute, then how a individual chooses to __represent__ spatial concepts and even space itself matters a great deal to interpretation and analysis.

<div class="sidenote" id="sn-1">
<strong>1.</strong> These types of fuzzy boundaries are usually <a href="https://www.columbia.edu/~av72/papers/Ppr_2000.pdf">Fiat Boundaries</a>, but even the seemingly clear distinction of Bona Fide Boundaries can quickly collapse when studying geographic phenomena or changing scale.
</div>

Nonetheless, GISystems often give users the impression that maps and spatial data are neutral mirrors of reality. 
However, recall that Fisher (1998) argues, GIS does not simply record the world, but __re-presents__ it through particular technical and conceptual assumptions. 
Every representation simplifies: it foregrounds some features, hides others, and encodes specific ways of seeing. 
Crisp lines replace fuzzy edges, continuous processes become discrete objects, and lived places become points or polygons. 
These simplifications feel natural precisely because they are embedded in the tools we use, which makes the decisions that sit behind them easy to overlook. 
Yet these decisions can matter profoundly, because they shape what questions we can ask, what patterns we can detect, and what kinds of explanations become possible. 
If these assumptions remain unquestioned, we risk mistaking a particular technical representation for reality itself.

Recognizing these issues changes a question about __representation__ to a question about __spatial ontology__. 
Ontology, simply put, concerns what exists and how those things are structured<sup><a class="sidenote-ref" href="#sn-2">2</a></sup>. 
In the context of GIScience, ontologists ask what we believe space actually is and what kinds of entities populate it. 
With this in mind, it makes sense to begin with the most fundamental concept in both geography and GIScience: the notion of space itself.

<div class="sidenote" id="sn-2">
<strong>2.</strong> <a href="https://gistbok-topics.ucgis.org/FC-03-001">Foundational Ontologies</a> introduce hierarchies of concepts and relationships between those concepts at a general level. Foundational ontologies are then used as the basis for domain specific ontologies, such as the geospatial. Geospatial ontologies can also be examined from a philosophical or computer science perspective.
</div>

## __Introducing Location and Space__

Contemporary GISystems are explicitly built on a notion of space defined primarily through __location__. 
Geographic data is typically represented within these using a simple tuple, often written as: 

$$\langle S, A \rangle \text{where } S=(x,y[,z,t]), A=\{a_1,\dots,a_n\}$$

where $S$ specifies coordinates in space and time, and $A$ represents a collection of attributes. This so-called "geoatom" treats every geographic fact as a combination of where something is and what it is. 
Within this framework, space functions as a fixed referencing system or container filled with precisely located objects.

This representation seems intuitive because the technologies we are familair with - GPS, digital maps, and nearly all GIS operations - depend on it. 
However, questions can be raise
 1) _What are the possibilities and also the limitations of this representations_ 
 2) _Are alternative foundations are possible? What might they be built upon?_

## __Conceptions of Space__

Building on work by Harvey and Whitehead, geographers have long argued that this coordinate-based view is only one way of conceptualizing space. 
A classic distinction identifies three broad perspectives on the nature of space: absolute, relative, and relational space. 

__Absolute Space__ conceives of space as an empty, neutral container within which objects are placed. 
Things exist independently, and coordinates simply specify their positions. 
This view is deeply embedded in Western scientific thinking and underlies most GIS software. 
Raster grids, vector features, map projections, and cadastral boundaries all assume a stable frame of reference in which phenomena can be precisely located. 
While this model is enormously useful for measurement and administration, it also tends to privilege objects over processes and contributes to the perception of maps as neutral and authoritative.

__Relative Space__ complicates the absolute portrait of space by shifting attention away from fixed coordinates toward relationships among things.
From this perspective, distance is not limited to Euclidean meters; it may instead be measured in travel time, cost, energy, accessibility, or social interaction. 
Two places that are close on a map may be functionally distant if transportation is slow, while distant places may effectively be near if they are well connected. 
Space, in this sense, depends on how movement and interaction occur. 
Relative space therefore recognizes that multiple distance metrics coexist and that different observers experience space differently<sup><a class="sidenote-ref" href="#sn-3">3</a></sup>.

<div class="sidenote" id="sn-3">
<strong>3.</strong> It is worth noting that the boundary between absolute and relative perspectives is not sharp. Any absolute map already implies relationships, and many relative measures are computed using underlying coordinates. The two views are intertwined in practice. </div>

__Relational Space__ takes this shift even further. 
Rather than treating space as a container, relational thinking argues that space is produced through processes and interactions. 
Entities do not simply occupy space; they emerge from networks of social, economic, political, and material relations. 
From this perspective, objects are not isolated units but bundles of relationships, and space itself is continually made and remade over time.

Bringing all three conceptualizations of space together, we may recognize that the boundaries between the three is provisional and contingent rather than fixed. 
To put it simply, relative space can be thought of as more or less fixed structures in which things are embedded in relation to one another and are in this sense not so different from absolute space. 
But at the same time, relative space to the extent that their measures of relation are contingent on movement, flows, perceptions, and so on associated with processes, approximate to the relational spaces of those processes. 
In this case, relative spaces can be either absolute, relational, or perhaps even both.

!!! summary "The major takeaway is that whatever we make of these abstract ideas about space, it is important to emphasize that these three conceptualizations are just conceptualizations. As ever with models of any kind, no model is correct, but all we need for them to be useful and each of these models has its use, which we will briefly list next."

## __Situating Space in GIScience__

If geography offers richer ontologies, however, what kind of space does GIS actually implement in practice? 
Despite the theoretical diversity of the field of geography, most GIS platforms overwhelmingly default to an absolute, coordinate-based model. 
Whether we use raster or vector data, select projections, or debate data structures, we typically remain within the same underlying assumption that space is a fixed geometric container. 
This design choice works well for many applications, but it also creates practical limitations.

To O’Sullivan’s point, because GIS tools assume absolute space, they often struggle when we try to work in alternative spatial logics. 
In many cases, GISystems can display these spaces but cannot easily analyze within them.

### __Cartogram__

Cartograms illustrate this tension clearly (__Figure 1__). 
It is relatively straightforward to distort areas according to population, travel time, or some other metric, creating a map where size reflects something other than physical area. 
Yet once such a transformation is created, standard GIS tools often treat it as an awkward exception. 
Projections may be unrecognized, layers may not align, and routine operations become difficult. 
Effectively, the software assumes that only conventional coordinate systems are legitimate spaces.

<div class="image-row">
  <a href="../../assets/cartogram1.jpg" class="zoomable">
    <img src="../../assets/cartogram1.jpg">
  </a>

  <a href="../../assets/cartogram2.jpg" class="zoomable">
    <img src="../../assets/cartogram2.jpg">
  </a>
</div>

__Figure 1__: [Graphical Cartograms in ArcGIS Pro](https://www.esri.com/arcgis-blog/products/arcgis-pro/mapping/graphical-cartograms-in-arcgis-pro)

### __Historical Basemap__

Similarly, when working with historical basemaps, we are often required to georeference and warp older maps into modern projections, even when those historical representations better reflect the spatial understanding of their time (__Figure 2__). 
The logic of contemporary GISystems prioritizes geometric accuracy over interpretive meaning, reinforcing the dominance of absolute space. 
As an example, the maps below shows a historical map in its original form and when overlayed with modern street labels when adjusted to modern projections. 

<div class="image-row">
  <a href="../../assets/hist2.png" class="zoomable">
    <img src="../../assets/hist2.png">
  </a>

  <a href="../../assets/hist1.png" class="zoomable">
    <img src="../../assets/hist1.png">
  </a>
</div>

__Figure 2__: [Historical Basemap from Philadelphia in the 1960s](https://www.philageohistory.org/tiles/viewer/)

## __Towards Relative and Relational Space__

Fortunately, although GIS platforms are built around absolute coordinates, much of spatial analysis already operates in implicitly relative or relational ways. 
In many workflows, what matters is not where things sit in a fixed reference frame, but how they relate to one another. 
Spatial statistics, for instance, frequently rely on spatial weights matrices that encode contiguity, nearest neighbors, or distance bands. 
These matrices define who influences whom, allowing analysis to proceed based on relationships rather than raw coordinates. 
Similarly, point pattern analysis characterizes clustering or dispersion using nearest-neighbor distances, largely ignoring absolute position and focusing instead on inter-point relationships. 
Even certain data structures incorporate adjacency directly, treating neighborhood relations as first-class information rather than something recalculated from geometry. 
These approaches reveal that, in practice, we often think relationally even while our tools remain anchored in absolute space.

Several concrete examples help make this shift visible!

### __Voronoi Polygons__

Voronoi polygons provide a clear and intuitive example of how GIScience can move beyond absolute, coordinate-based space (__Figure 3__). 
Rather than defining regions using fixed administrative boundaries or arbitrary grid cells, Voronoi polygons partitions space according to proximity relationships: every location is assigned to whichever feature it is closest to. 
In this formulation, space becomes something structured by distances between entities. 
What matters is not a point’s absolute coordinates, but its relation to neighboring points. 
This makes Voronoi models especially useful for problems like service areas, facility location, clustering, or neighborhood definition, where “closeness” is more meaningful than geometric position. 
Conceptually, Voronoi polygons demonstrate that many spatial questions are inherently relational—regions emerge from interactions among features rather than being pre-given.

<div style="text-align:center;">
  <img src="../../assets/voronoi.gif" style="width:100%">
</div>

__Figure 3__: One of the many [algorithms](https://medium.com/data-science/the-fascinating-world-of-voronoi-diagrams-da8fc700fa1b) of constructing voronoi polygons to achieve rounder aspects and more evenly spaced points.

### __Relational Database__

At the level of data infrastructure, tools such as PostGIS illustrate a complementary shift toward a more relational ontology of space. 
Traditional GIS formats tend to treat geometries as independent objects stored in isolation—points, lines, and polygons each tied to coordinates in a fixed reference system. 
In contrast, PostGIS extends a relational database so that spatial features live alongside tables describing their attributes and, crucially, their relationships to other features. 
Spatial joins, adjacency queries, and intersection operations allow space to be modeled not simply as "where things are" but as "how things connect."

  <a href="../../assets/postgres.png" class="zoomable" style="width:100%;">
    <img src="../../assets/postgres.png"
         style="width:100%; object-fit:cover; object-position:center;">
  </a>

__Figure 4__: A spatial join in PostGIS

For example, in the above analysis, we are not simply mapping census block groups or bus stops as independent features. 
Instead, we are drawing on multiple datasets within a database, then using a spatial join `ST_Within` to ask which block groups fall within 800 meters of each stop, from which we then aggregate population counts to estimate how many people each stop serves (__Figure 4__). 
In other words, the analysis is defined not by where features are in absolute coordinates, but by how they relate to one another through proximity and accessibility.

### __Network Analysis__

Another good example is network analysis models, which push spatial thinking even further toward a fully relational conception of space by replacing continuous geometric distance with explicitly defined connections among entities. 
In a network, locations are not primarily defined by their coordinates but by their position within a graph of nodes and edges—who is connected to whom, and at what cost. 
Distance becomes travel time, impedance, or flow rather than Euclidean separation. 
For example, the "distance" between two neighborhoods might be shorter along a subway line than across a river, even if their straight-line separation is small. 
In this sense, the structure of the network itself creates the space of analysis. 
In general, the reality is that any time we define neighborhoods, whether through contiguity, k-nearest neighbors, or distance bands, we are implicitly constructing a custom relative space tailored to the question at hand.

To finish this part of lesson on spatial ontologies, let's look at the implementation of a fun model, cellular automata, which is also raised by O'Sullivan for making this relational logic even more explicit by introducing dynamics over time. 

<div class="embed-wrapper">

  <div class="embed-toolbar">
    <button onclick="refreshFrame('lifeFrame')">↻ Refresh</button>
  </div>

  <iframe
    id="lifeFrame"
    src="https://csci467-s23.github.io/sketchbook-emilyzhou112/sketches/GameOfLife/"
    loading="lazy">
  </iframe>

</div>

In these models, each cell’s state changes based solely on the states of its neighbors, meaning that the attribure space is defined entirely by local interactions rather than global coordinates. 
Conway’s Game of Life is a classic example: patterns emerge, move, and evolve not because of their absolute position on the grid, but because of simple relational rules about adjacency. 
The “geography” of the system is therefore produced by interactions among neighbors, not by the underlying lattice itself. Below is a computer simulation of Conway's Game of Life that you can explore. 
The full example is [here](https://csci467-s23.github.io/sketchbook-emilyzhou112/sketches/GameOfLife/)

!!! summary "Taken together, all these examples suggest that GIScience should not commit to a single "true" conception of space. Different questions demand different spatial logics. Rather than treating space as fixed and universal, it is more productive to see it as context-dependent and constructed through practice. We should always choose representations that better match the phenomena we seek to understand. Recognizing that fact is the first step toward building more thoughtful, critical, and creative forms of GIScience."

---

Reference:

*Fisher, P., & Unwin, D. J. (2005). Re-presenting geographical information systems. In P. Fisher & D. J. Unwin (Eds.), Re-presenting GIS (pp. 1–14). John Wiley & Sons.*

*O’Sullivan, D. (2024). Location and space. In Computing geographically: Bridging GIScience and geography (pp. 17–44). Guilford Publications.*


