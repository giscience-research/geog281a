# __Standard Topological Foundation__

Spatial analysis involves a wide range of decisions. In the previous lesson, we focused on only one of the earliest and most fundamental of these: scale. However, spatial analysis is not only concerned with values at locations: it is fundamentally about relationships between locations. Once scale has been established, the question left for us in order to carry out the analysis becomes how observations are connected across space: whether nearby places are similar, whether patterns cluster or disperse, and how such structures can be formally described.

Like all spatial concepts introduced earlier in the course, spatial relationships must be represented within GISystems. In fact, their representation draws on many topics we have covered so far, including the underlying conceptions of space (Week 3) and the computational models used to encode geographic information (Week 4). Understanding how spatial relationship should be properly represented matters in our analysis. Almost any GIS query incorporate spatial relationships to define constraints on what is selected, analyzed, or displayed. Questions such as “What is adjacent to this feature?”, “What lies within this boundary?”, or “What overlaps with this region?” all depend on how spatial relationships are defined. The importance of spatial relationships also extends well beyond GIS. Any field that works with spatial data, such as surveying engineering, computer-aided design, robotics, or very large-scale integrated circuit design, relies on formal ways of describing how objects relate to one another in space.

<video width="860" height="700" controls>
  <source src="../../assets/sr.mp4" type="video/mp4">
</video>

__Figure 1__: Understanding spatial relationships is crucial when creating vector artworks in adobe illustrator.


<video width="860" height="700" controls>
  <source src="../../assets/sr2.mp4" type="video/mp4">
</video>

__Figure 2__: Spatial relationships are also fundamental in architectural design, where the arrangement of spaces and their connections determine the functionality and aesthetics of a building.

In this lesson, we begin by examining how spatial relationships, particularly topological relationships, are encoded in conventional GISystems. We then consider the limitations of these approaches and explore alternative ways of representing spatial structure. Notably, some of these alternatives are themselves closely tied to scale and to how humans understand space across different levels of resolution.

## __Understanding Point-Set Topology__

Egenhofer and Franzosa (1991) present a prominent framework for defining topological spatial relations that is based purely on topology and does not rely on distance. Instead of measuring how far apart objects are, this framework focuses on how they are connected or related through their structure. In their formulation, spatial relationships between two objects are described through the intersections of their interiors and boundaries. Through considering whether these intersections are empty or non-empty, a total of 16 mutually exclusive topological configurations can be identified. Under certain constraints on spatial objects and the underlying topological space, this set reduces to 9 fundamental relations, which form the basis of many GIS implementations. To understand this framework, we begin with simple point-set topology.

Point-set topology provides a way to describe spatial objects as sets of points in space (e.g., in the plane or in 3D). A central concept in this framework is the idea of an open set. Informally, an open set does not include its boundary, while a close set includes its boundary. These definitions allow us to distinguish between the “inside,” the “edge,” and the “outside” of spatial objects.

The model of topological spatial relations is built on three fundamental concepts: interiors, closure, and boundary. Any spatial relationship between two objects can be described using only these components.

### __Interior__

The __interior__ of a set $Y$, denoted by $Y^\circ$, is defined as:

$$Y^\circ = \bigcup \{ U \mid U \text{ is open and } U \subseteq Y \}$$

That is, the interior of $Y$ is the union of all open sets contained in $Y$, or equivalently, the largest open set contained within $Y$.

A point $y \in Y$ belongs to the interior if and only if there exists an open set $U$ such that:

$$y \in U \subseteq Y$$

This means that a point is in the interior if you can move a small amount in any direction without leaving the set. Interior points are “safely inside” the object, away from its edges.

### __Closure__

The __closure__ of a set $Y$, denoted by $\overline{Y}$, is defined as:

$$\overline{Y} = \bigcap \{ C \mid C \text{ is closed and } Y \subseteq C \}$$

That is, the closure of $Y$ is the intersection of all closed sets that contain $Y$, or equivalently, the smallest closed set containing $Y$.

A point $y \in \overline{Y}$ if and only if every open set $U$ containing $y$ satisfies:

$$U \cap Y \neq \emptyset$$

This means that closure includes all points that are either inside the set or arbitrarily close to it. This includes both interior points and boundary points.

### __Boundary__

The __boundary__ of a set $Y$, denoted by $\partial Y$, is defined as:

$$\partial Y = \overline{Y} \cap \overline{X - Y}$$

That is, the boundary is the intersection of the closure of $Y$ and the closure of its complement.

A point $y \in \partial Y$ if and only if every open set $U$ containing $y$ satisfies:

$$U \cap Y \neq \emptyset \quad \text{and} \quad U \cap (X - Y) \neq \emptyset$$

This means that boundary points are those that lie exactly at the edge of the set. Any small movement around them will encounter both the inside and the outside of the object.

__In intuitive terms, interior refers to the inside of an object, the boundary refers to its edge, and closure includes both the interior and the boundary.__

The concepts of interior, closure, and boundary are fundamental to the forthcoming discussions of topological spatial relations between sets. Their relationships can be described by the following propositions:

$$Y^\circ \cap \partial Y = \emptyset$$

This proposition states that the interior and the boundary of a set do not overlap.
Essentially, no point can be both “safely inside” the set and “on the edge” at the same time. Interior points are fully contained within the set, while boundary points are exactly those that separate the inside from the outside.

$$Y^\circ \cup \partial Y = Y$$

This proposition states that every point in the set $Y$ must either belong to its interior or its boundary.
Effectively, this means that a set is completely made up of its inside and its edge. There is nothing else in between. Every point in $Y$ is either clearly inside or lies on the boundary.

As a side note here, two topological spaces are said to be topologically equivalent if there exists a bijective function between them that preserves the structure of open sets. More formally, a function $f: X \to Y$ is a homeomorphism if $f$ is bijective, continuous, and $f^{-1}$ is also continuous.

In other words, two spaces are considered the same from a topological perspective if one can be continuously deformed into the other without tearing or gluing. For example, a coffee mug and a donut (torus) are topologically equivalent because they each have one hole.

## __Topological Spatial Relations__

Using the concepts of interior, closure, and boundary, we can define topological spatial relations between two sets $A$ and $B$. These relations are based on the intersections of their interiors and boundaries. Specifically, the relation is defined based on the following four set intersections, where we checkhow the inside and the edge of one object interact with the inside and edge of another.

$$(\partial A \cap \partial B,; A^\circ \cap B^\circ,; \partial A \cap B^\circ,; A^\circ \cap \partial B)$$

Each entry corresponds to:

- $\partial A \cap \partial B$: boundary–boundary intersection
- $A^\circ \cap B^\circ$: interior–interior intersection
- $\partial A \cap B^\circ$: boundary–interior intersection
- $A^\circ \cap \partial B$: interior–boundary intersection

Each of these intersections can either be empty or non-empty. By assigning a value of 0 (empty) or 1 (non-empty) to each component, we obtain a binary four-tuple representation:

$$(r_1, r_2, r_3, r_4), \quad r_i \in \{0,1\}$$

Since each of the four intersections has two possible states (empty or non-empty), there are $2^4 = 16$ possible topological spatial relations.

For example, a relation represented as $(1,0,0,0)$ means that the boundary of $A$ intersects with the boundary of $B$ (non-empty), but the interiors do not intersect, and there are no boundary-interior intersections. This particular configuration corresponds to the case where $A$ and $B$ are adjacent but do not overlap, meaning they touch at their edges but do not share any interior points.

<div align="center">
    <img src="../../assets/sr-topo.png" alt="mapscale" width="500" height="200">
</div>

__Figure 3__ illustrates the 16 possible binary topological spatial relations. Each small diagram represents one configuration, labeled $r_0$ through $r_{15}$, based on whether each of the four intersections is empty or non-empty. It shows that some relations represent objects that are completely separate (no intersections), some represent objects that touch at their boundaries, some represent containment (one object entirely inside another), and others represent partial overlap between interiors.

However, it should be noted that when restricted to real geographic regions, only 9 of the 16 possible topological relations actually occur. These correspond to intuitive spatial relationships such as disjoint, touch, equal, inside, contains, overlap, and cover / covered by. The key idea is that while all 16 relations are logically possible in abstract topology, some are geometrically impossible and assume that boundaries can interact with interiors in ways that contradict how regions behave in continuous space.

For example, consider this situation: the boundary of $A$ touches the interior of $B$,
but the interior of $A$ does not overlap with the interior of $B$. In notation:

$$\partial A \cap B^\circ \neq \emptyset$$

$$A^\circ \cap B^\circ = \emptyset$$

If a boundary point of $A$ lies inside $B$, then that point is surrounded by a small area that is fully inside $B$ (because it is in the interior of $B$), but boundary points of $A$ are arbitrarily close to interior points of $A$. That means some points from the interior of $A$ must also fall inside $B$, which contradicts the second condition. Therefore, this configuration cannot occur in real geographic space. This is one of the reasons why only 9 of the 16 theoretical relations are observed in practice.

We can also imagine $B$ as a filled circle, and suppose a point on the edge of $A$ lies inside that circle. Because the interior of $B$ includes a small area around that point, any slight movement from the boundary of $A$ inward will place points of $A$ inside $B$. Therefore, it is impossible for the above conditions to hold simultaneously.

<div align="center">
    <img src="../../assets/sr-topo9.png" alt="mapscale" width="500" height="400">
</div>

__Figure 4__: The 9-intersection model of topological relations between two polygons

This contradiction eventually eliminates several of the 16 possible configurations. Only 9 topological spatial relations remain valid for real spatial regions. These form the basis of standard models such as the 9-intersection model used in GIS.

Although this framework is theoretical, it has direct practical implications. It underlies how GISystems define, store, and compute spatial relationships, and is widely regarded as a foundational component of spatial data modeling.

## __The DE-9IM model in GIS__

Since the 1990s, various models for representing topological spatial relations have been developed. One of the most widely used is the DE-9IM (Dimensionally Extended 9-Intersection Model), which categorizes spatial relationships based on the intersections between the interiors, boundaries, and exteriors of two spatial objects $A$ and $B$. The DE-9IM extends the earlier __9-intersection__ model proposed by Egenhofer and Franzosa (1991). It can be understood as the applied version of the theoretical framework introduced earlier that translates abstract topological relationships into a standard representation used in GIS software.

For each intersection, the dimension is recorded using the following values:

- $-1$ : empty intersection
- $0$ : point (0-dimensional)
- $1$ : line (1-dimensional)
- $2$ : area (2-dimensional)

Given two spatial objects $A$ and $B$, the DE-9IM is defined as the following matrix:

$$
\begin{pmatrix}
\dim(A^\circ \cap B^\circ) & \dim(A^\circ \cap \partial B) & \dim(A^\circ \cap B^{-}) \\
\dim(\partial A \cap B^\circ) & \dim(\partial A \cap \partial B) & \dim(\partial A \cap B^{-}) \\
\dim(A^{-} \cap B^\circ) & \dim(A^{-} \cap \partial B) & \dim(A^{-} \cap B^{-})
\end{pmatrix}
$$

This means that the spatial relationship between two objects is determined by examining how each part of $A$ (interior, boundary, exterior) intersects with each part of $B$. In other words, for any object (either $A$ or $B$), space is divided into three parts: interior, boundary, and exterior. Then, DE-9IM asks (1) Does the interior of $A$ overlap with the interior of $B$? (2) Does the boundary of $A$ touch the boundary of $B$? (3) Does part of $A$ lie outside of $B$?

While the DE-9IM matrix can theoretically take on $4^9 = 262{,}144$ different values from a combinatorial perspective, only a limited subset of these correspond to valid spatial configurations for 2D geometries. The number of possible relations depends on the types of spatial objects involved:

- Region–region: 12 possible relations
- Line–region: 31 possible relations
- Line–line: 48 possible relations

If more complex geometries are considered, such as regions with holes or multiple disconnected components, the number of possible relationships increases further. To date, the total number of relationships expressible under the DE-9IM framework for such complex features has not been fully determined.

<div class="image-row">
  <a href="../../assets/DM28_Fig1.png" class="zoomable">
    <img src="../../assets/DM28_Fig1.png">
  </a>

  <a href="../../assets/DM28_Fig2.png" class="zoomable">
    <img src="../../assets/DM28_Fig2.png">
  </a>
</div>

__Figure 5__ illustrate these relationships for simple geometric features. Left: 12 prototype topological relations between simple regions. RIght: the 31 DE-9IM relations between a simple line and a simple region.

All of these representations allow us to describe spatial relationships with a high degree of precision. Rather than simply stating that two objects are “near” or “far,” we can specify exactly how they relate to each other in terms of their interiors, boundaries, and exteriors. This supports consistent analysis and computation in GIS. Neverthless, one thing that we always need to be mindful of during analysis is that these representations are abstractions: they depend on how space is conceptualized, how objects are defined, and how geometry is modeled in the first place. They require careful interpretation when applied to real-world geographic phenomena.

