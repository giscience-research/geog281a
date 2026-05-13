# __Rethinking Boundaries__

We talked about the DE-9IM model as a precise way to conceptualize spatial relationships. However, it is important to recognize that this precision rests on the key assumption that the objects themselves, and their boundaries, are already well-defined. In practice, this is not always the case. Since geographic objects are often constructed through measurement and representation decisions, the spatial relationships we compute are not only a function of geometry, but also of __how boundaries are defined in the first place__. This leads to an important question: __what kinds of boundaries are we actually working with and how do perhaps different conceptualizations of boundaries?__

In this part of the lesson, we shift our attention to the fundamentals of boundaries, examining their theoretical and conceptual foundations. In particular, we consider boundaries from both an ontological perspective and from the perspective of how we use them to understand and organize the world.

## __Bona Fide and Fiat Boundaries__

Smith and Varzi (2000) begins with a simple way to introduce the concept of boundaries. Objects such as a person, the moon, or a lump of cheese can be divided into parts. They have insides (interiors) as well as edges (boundaries). This is easy to comprehend and visualize: everything has a natural inside, and an edge separating it from the outside.

However, a more subtle question arises when we consider the interior of these objects. Are there boundaries within them? At first glance, it may seem that there is no real division, but in fact there can be. For example, the human body contains organs, and the separations between these organs can be understood as boundaries. At the same time, we sometimes divide objects purely in thought (for example, “left half” and “right half”), even when no physical difference exists. It is important to recognize that these two kinds of boundaries are not the same.

Some boundaries arise from real physical differences, such as the separation between organs in the human body; these are called __bona fide boundaries__. Yet, we also impose boundaries even when no physical difference exists, such as dividing a perfectly homogeneous object into parts in our minds; these are called __fiat boundaries__. In fact, many boundaries do not come directly from the world itself. Below, Smith and Varzi (2000) provide some ways to help us think through the two kinds of boundaries.

### __Fiat Boundaries and Fiat Objects__

We are particularly interested in fiat boundaries because they are created by humans, which means they are often messy and fuzzy in practice. Not surprisingly, there are different types of fiat boundaries. Some exist in the __social world__, such as those drawn by real-estate developers or international boundary commissioners; these can be compared to claims, obligations, and other kinds of social objects. There are also __non-social fiat boundaries__, such as anatomical divisions (e.g., upper versus lower femur), as well as boundaries created through geometric or conceptual operations, such as drawing a circle or splitting a sphere. In addition, some fiat boundaries have precise mathematical definitions, such as the equator or the center of mass.

<div class="image-row">
  <a href="../../assets/sr-gerry.jpg" class="zoomable">
    <img src="../../assets/sr-gerry.jpg">
  </a>

  <a href="../../assets/sr-brain.jpg" class="zoomable">
    <img src="../../assets/sr-brain.jpg">
  </a>
</div>

__Figure 1:__ Left: The Gerrymander, a famous example of a social fiat boundary. Right: A brain scan showing figurative anatomical divisions, an example of a non-social fiat boundary.

Importantly, it is the act of drawing a fiat boundary that creates what we call a fiat object. This is a crucial point: __when you draw a boundary, you are not just describing an object but actively creating it__. For example, the shores of the North Sea may be bona fide (naturally constructed), but we conceive of the North Sea itself as a fiat object because the North Sea does not simply exist as a clearly bounded object in the world; rather, it is something we define. Similarly, consider census tracts: they have no physical boundaries on the ground, yet they are treated as real units and assigned identifiers in analysis. All these fiat objects that we create may even be discontinuous or scattered, demonstrating that objects do not need to be physically unified to be treated as coherent entities.

### __Boundaries and Cognition__

But why do we have these boundaries in the first place? Beyond bona fide boundaries, fiat boundaries are not only socially constructed but also __cognitively produced__. Humans perceive and understand the world by imposing boundaries, even when no clear physical divisions exist. Language plays a key role in this process, as different ways of describing the same material reality can produce different objects. For example, the distinction between “cow” and “cows” depends on how boundaries are conceptually imposed. Smith emphasizes that vagueness arises from these conceptual boundaries instead of from the physical world itself, meaning that many of the objects we perceive are shaped by how we think.

### __Problems of Contact and Separation__

In addition to the different ways boundaries are conceptualized, another important issue concerns how boundaries relate to contact and separation. A boundary demarcates two entities, which are then said to be “in contact.” But how should this relation of contact be understood? This question helps us further unpack the difference between bona fide and fiat boundaries.

We can think about it this way: if a boundary separates two things, then those two things are “touching” along that boundary. Standard topology explains contact using the distinction between open and closed sets. However, this leads to counterintuitive results, such as assigning a shared boundary to only one of two adjacent regions. Admitting boundaries implies a distinction between closed and open entities, meaning that one region includes the boundary while the other does not. This asymmetry feels problematic, especially in geographic contexts.

<div class="image-row">
  <a href="../../assets/sr-bl.png" class="zoomable">
    <img src="../../assets/sr-bl.png">
  </a>

  <a href="../../assets/sr-vt.jpg" class="zoomable">
    <img src="../../assets/sr-vt.jpg">
  </a>
</div>

__Figure 2__: Left: A national border passing through a doorway in Blgium and Netherland illustrates the paradox of contact for fiat boundaries: two countries meet along a line that has no physical thickness, yet is treated as a real separator. Are the spaces on either side truly “in contact,” or are they divided by two coinciding boundaries occupying the same location? Right: A similar issue arise between US and Canda border in Vermont, where the boundary is marked by a line on the floor of a library. Both examples show that boundaries can simultaneously separate and connect spaces,

This framework works reasonably well for bona fide boundaries, but it breaks down for fiat boundaries, which are not based on physical discontinuities. As an example, consider state borders. On a map, we see a single line representing the boundary between California and Nevada. However, conceptually, California has its boundary and Nevada has its boundary. These occupy the same location, but they are not the same entity.  Similarly, the equator does not belong exclusively to either the Northern or Southern Hemisphere; instead, each hemisphere has its own boundary, and these boundaries occupy the same location. This idea of coinciding boundaries challenges the assumptions of standard topology and motivates the need for a different framework to understand spatial relationships involving fiat objects.

## __Constructing Formal Theory__

Because these two types of boundaries behave differently, we need two different ontological frameworks. Fiat boundaries can coincide, belong to multiple objects, and do not correspond to physical breaks in the world. As a result, __standard topology (which most GIS systems rely on) is not sufficient to capture their behavior__. To simplify Smith’s conceptualization:

For bona fide (physical) boundaries, the theory closely follows standard topology. Objects have clearly defined interiors and boundaries, and contact is defined through shared boundaries or adjacency. Formally, one can define a boundary operator $b(x)$ and a closure operator $c(x) = x + b(x)$, and then define contact (external connection) as

$$EC(x, y) := C(x, y) \land \neg O(x, y)$$

meaning that two entities are in contact if they are connected but do not overlap. This framework assumes a single, well-defined boundary and aligns with classical geometric reasoning, including models such as the 9-intersection model.

In contrast, for fiat (human-defined) boundaries, the authors introduce a different topology, because these boundaries do not correspond to physical discontinuities. Here, a boundary is treated as part of the object it bounds (e.g., $B^*(x, y) \rightarrow x \leq y$), and, crucially, different objects can have distinct boundaries that coincide in the same location (denoted $x \approx y$). In this system, connection is not based on sharing a single boundary, but on the coincidence of boundaries. That is, two adjacent regions are connected when their respective fiat boundaries occupy the same place. The key insight is that while bona fide topology assumes a single, objective boundary structure, fiat topology allows for multiple, overlapping boundary entities tied to different objects.

## __Engaging with the Plurality__

The distinction of fiat and bona fide boundaries leads to a broader discussion on their use.

GIS operates under a strong assumption that spatial objects must be represented as clean, well-defined polygons. Boundaries are expected to be complete, non-overlapping, and free of gaps so that they align with dominant approach in GIScience, where polygons are modeled as topological point sets, and spatial relationships are derived from precise set-theoretic definitions. Yet, as O’Sullivan emphasizes, this technical treatment risks overlooking a more fundamental issue. Fiat objects exist because of acts of human decision through laws, political decrees, and cognitive processes. From this perspective, spatial units are not given; they are defined, can include gap and intersect itself if needed be. This implies that many of the spatial relationships formalized by Egenhofer and Franzosa cannot occur under these constraints.

Nevertheless, this apparent misalignment between fiat boundaries with GIS does not suggest that boundaries should be abandoned. Boundaries remain essential because they structure everyday experience and define the objects we rely on, such as countries, regions, and administrative units. Indeed, many spatial concepts only make sense once boundaries are in place, even if those boundaries are constructed.

__The point here is not to reject existing models, but to recognize their limits and to adopt a more flexible approach__. There is no single universal ontology of space. Spatial reasoning must be pluralistic. Essentially, this means __using classical topology when dealing with physical, continuous phenomena, and using fiat-based or mereotopological reasoning when working with human-defined regions and boundaries created through demarcation__.

<div style="text-align: center;">
  <a href="../../assets/sr-pb.png" class="zoomable">
    <img src="../../assets/sr-pb.png" style="width: 80%;">
  </a>
</div>

__Figure 3__: This example of Point Breeze in Philadelphia shows how multiple boundary systems coexist over the same space. The brown lines represent census tracts while the yellow dashed line represents the neighborhood boundary. These boundaries do not align perfectly because they are based on different logics and purposes rather than a single “correct” definition of space. In practice, both are necessary: census tracts make spatial patterns measurable and comparable in GIS, while neighborhood boundaries capture meaning, identity, and lived experience. Thisillustrates the need for pluralistic spatial reasoning.

This perspective also helps us better understand the limitations of standard GIS models such as the 9-intersection framework. While these models rely on precise, point-based topology, they struggle to handle issues such as boundary ownership, coincidence, and the constructed nature of adjacency. As a result, there is increasing interest in moving beyond purely geometric representations toward qualitative spatial reasoning, which better reflects how humans conceptualize topological relationships and how boundaries actually function in practice.

## __Towards Naïve Geography Thinking__

In essence, this line of reasoning aligns closely with what Mark and Egenhofer (1995) advocate in developing Naïve Geography. Egenhofer’s work can be understood as translating Smith’s insight into the domain of GIScience. Naïve Geography recognizes that people reason about space using flexible, qualitative, and sometimes inconsistent concepts, especially when dealing with fiat boundaries such as political regions. As a result, topology becomes a way of capturing common-sense spatial relations such as adjacency, containment, and overlap.

This perspective is especially reflected in the following arguments from Mark and Egenhofer (1995).

> While many spatial inferences may appear trivial to us, they are extremely difficult to formalize so that they could be implemented on a computer system. Current methods to derive spatial and temporal information about geographic space are limited; therefore, we see a big gap between what a human user wants to do with a GIS, and the spatial concepts offered by the GIS. Today's GISs do not sufficiently support common-sense reasoning; however, in order to make them useful for a wider range of people, and in order to allow for prediction or forecasting, it will be necessary to incorporate people's concepts about space and time and to mimic human thinking; therefore, we will focus on common- sense geographic reasoning, reasoning as it is performed by people, reasoning whose outcome makes intuitive sense to people, reasoning that needs little explanation.

This emphasis on human reasoning is also reflected later in the paper in how boundaries are understood in particular. There is no single, uniform view of what a boundary is or how it is established, even if one could agree on a model for physical entities. For example, national boundaries may have multiple interpretations, even when neighboring countries agree on the extent of their territories. Conventionally, political subdivisions are modeled as partitions of space, where a boundary separates one nation’s land from another. However, each side may interpret the boundary differently, viewing it as belonging to their own territory. In this sense, the boundary between two neighboring countries may be understood as a pair of boundaries. Smith (1994) further suggests that such boundaries may even be asymmetric, for instance, when one country recognizes a boundary that the other does not. Similar issues arise in other contexts of course.

Taken together, all these arguments highlight that modeling geographic space requires both an ontological distinction between types of boundaries and a representational framework that aligns with how humans actually understand and use those boundaries.
