# __GIScience and Geography__

GISystems have never been “just a tool”.
Different entries into the GIScience-GISystems debate make it clear that 1) GISystems are particular implementations of subsets of selected spatial concepts, 2) those systems and concepts are continually co-evolving, and 3) that coevolution is defined by the practices or individuals working to understand geographic phenomena and act upon them.
Moreover, the spatial concepts implements in a GISystems and the data models, algorithms, defaults, and workflows of that system actively shape what kinds of questions can be asked and what kinds of answers can be produced.

This lesson shifts from asking whether GIS is a science, to examine the closely related set of question: __How has GIScience related to geography over time?__

## __Form or Process__

One tension that has shaped discussions of the relationship between GIScience and geography for decades is the relationship between form versus process.
Goodchild (2004) summarizes this tension well.
While GISystems have developed to be very good at representing spatial forms such as objects and spatial patterns, the intellectual core of geography is focused on processes.
Geographic processes structure how entities change, interact, and unfold across space and time<sup><a class="sidenote-ref" href="#sn-1">1</a></sup>.
As GIS matured, it may have also unintentionally tilted the focus of research within the GIScience toward the analysis of form because its data models, representational frameworks, and map-based metaphors privilege static snapshots over dynamic explanations.
Goodchild highlights the related concern that as a consequence GIScience risks drifting away from geography’s explanatory and exploratory ambitions<sup><a class="sidenote-ref" href="#sn-2">2</a></sup>.

<div class="sidenote" id="sn-1">
<strong>1.</strong> Finding an clear and agreed upon defnition of a geographic process is not simple, but set that aside for now.</div>

<div class="sidenote" id="sn-2">
<strong>2.</strong> This tension sets the stage for later questions about representation, disciplinary boundaries, and the future direction of GIScience.</div>

## __An Evolving Relationship__

Concerns about the representation of form and process in GISystems and their effect on geographic analysis can also be placed within a broader historical account of the evolving relationship between Geography and GIScience.
Goodchild (2019) identifies three overlapping phases of GIScience that this tension can be situated within, to which we speculate about a fourth phase.

- __Phase 1 (1960s-1980s)__: during which there was a strong and largely unproblematic relationship between Geography and GISystems. Geographers dominated education and research, and traditional practices in cartography and remote sensing were deeply embedded in early system design. GISystems moved steadily toward comprehensive handling of geographic information.
- __Phase 2 (1990s-2000s)__: during which two major challenges emerged. First, many geographers began to question the intellectual merits of GISystems, a critique amplified by their widespread adoption in other disciplines. Second, GISystems were increasingly criticized for their social implications, including surveillance, privacy, and military origins. At the same time, research agendas broadened: data models became more complex, social critique entered GIS research, and GIS education expanded beyond geography departments.
- __Phase 3 (2010s-2025)__: during which data science, big data, consumer GIS, and computer science increasingly shape geospatial practice. Geography risks losing influence unless it continues to assert why spatial thinking matters.
- __Phase 4 (2020-future)__: The rapid emergence of artificial intelligence techniques and their progressive development dominates the GIScience literature. This period of system development reignites debates about tools, science, and the purpose and role of GeoAI in GIScience and geographic research.

Goodchild warns that this new emphasis on data as the foundation of science, often ignoring how data are assembled, their provenance, and their relationship to the real world, is especially problematic.
Effective and scientifically rigorous analysis becomes difficult without ground truth drawn from knowledge of the geographic world gained through field observation, careful description, and attention to data quality.

> Without geographic thinking, GIS risks becoming data-driven computation divorced from social context, spatial reasoning, and geographic understanding. In this sense, the earlier concern about form and process reappears here at a disciplinary scale.

___A Detour into Spatial Data Science:___

As GIScience contintues to evolve and data science increases in prominence, Scheider et al. (2020) raises a variant of the GIScience-GISystems debate question - what kind of field is Geographic Data Science?
Echoing arguments about the investigative matrix, Scheider et al. argue that geographic data science is not yet a scientific discipline.
They claim that the 'field' is instead a community of practice.
A scientific discipline, they contend, must have its own concepts and its own questions and argue that geographic data science currently does not. 
Rather the geographic data science borrows its concepts from Geography, its methods from GIScience, Statistics, and Machine Learning, and its infrastructure from Computer Science <sup><a class="sidenote-ref" href="#sn-3">3</a></sup>.

<div class="sidenote" id="sn-3">
<strong>3.</strong> Interestingly, this argument defends GIScience rather than replacing it. GIScience is framed as a meta-science, akin to Statistics or Information Science. Its role is not to answer geographic questions directly, but to study how geographic information is represented, measured, and reasoned with.</div>

## __The Geographic in GIS__

If geography and spatial concepts are the foundation of GIScience, Guan, Wilson, and Knowles (2019) ask what it means to emphasize the geographic in GIScience.
Like Goodchild (2019), these authors argue that the geographic aspects of GIScience remain insufficiently developed, and call for continued theoretical and methodological work to support a more geographic GIS.
Central to their argument is a persistent ambiguity between:

- spatial analysis (Cartesian space, coordinates),
- geospatial analysis (Earth-referenced space), and
- geographic analysis (space entangled with social, physical, and historical processes)

GIS software, they argue, is very good at the first two, but much weaker at the third.
As GISystems spread into the digital humanities, social sciences, and data science, there is a growing danger that “geographic” collapses into “spatial.”
Guan, Wilson, and Knowles do not claim that GIS can fully capture all geographic knowledge—some epistemological irreducibility remains—but they insist that GIS theory and method could be far more deeply geographic than they currently are.

## __Doing GIScience and Geography__

Together, these readings raise a final question: 
> How should researchers study, teach, and practice GIScience in relation to geography?

O’Sullivan (2020) argues that GIScience and geography share a common conceptual ground made up of many fundamental ideas—space, scale, place, regions, networks, time, process, and patterns<sup><a class="sidenote-ref" href="#sn-4">4</a></sup>. 
However, GISystems often flatten these ideas into inflexible representations of points, lines, and polygons.
That flattening unintentionally shapes how geographic thinking can be expressed, explored, and extended.
While some argue that GIS primarily needs better qualitative tools, O’Sullivan suggests that this would not make much difference.
The deeper issue is that representational geometry itself is rigid.
We do not need a whole new platform to “do GIS.”
Rather, it is essential to engage deeply with geographic concepts and processes, rethink the geographic representation model inside GIS, create ways to allow for the implementation of alternative spatial logics<sup><a class="sidenote-ref" href="#sn-5">5</a></sup>.

> I am convinced that the task of reimagining and reconstructing GIS as a flexible tool for creating diverse human geographies … will depend on GISers taking geographical thought much more seriously than they have hitherto.

<div class="sidenote" id="sn-4">
<strong>4.</strong> Perhaps not suprisingly these concepts are often identified as primitives of spatial thinking and reasoning. </div>

<div class="sidenote" id="sn-5">
<strong>5.</strong> For example, reasoning in non-Euclidean space, relational space, etc. This approach might also incorporate the many qualitative concepts identified in Egenhofer & Mark (1991) Naive Geography.</div>

Speaking more broadly about representation, a major stumbling block for many critics of GIScience is its failure to take seriously the problematic nature of __representation__.
Representation should be understood as process and practice, not as static objects. For example,

>The important question is not what a map is, nor what a map does, but how the map emerges through contingent, relational, context-embedded practices.

This reframing shifts attention away from maps as finished products and toward the practices, assumptions, and decisions through which representations are produced.

O’Sullivan argues that we need to interrogate more closely what we mean by terms like related, near, and distant.
Finding ways to recognize the fuzziness, ambiguity, porosity, and uncertainty of boundaries has the potential to open up new and different ways of seeing geographies.
Doing so could set the stage for representing processes, events, and patterns explicitly, rather than treating familiar GIS entities as fixed and pre-given.
Building on this vision, one way of “doing GIS” today is to develop a practice that is both technical and critical.
A practice that takes the geographical in GIScience more seriously, and for geography to take GIScience more seriously as well.
This leads to O’Sullivan’s primary conclusion:

> Geography and GIScience curricula at all levels should actively explore the common ground they share.

There is no reason why an introductory GIS course cannot also be a class that critically examines fundamental geographic ideas—doing so beyond a narrow focus on the technical issues that arise from working with existing representations.

---

Reference:

*Goodchild, M. F. (2004). GIScience, geography, form, and process. Annals of the Association of American Geographers, 94(4), 709–714*

*Goodchild, M. F. (2019). Geography and geographic information science: An evolving relationship. The Canadian Geographer / Le Géographe canadien, 63(1), 5–11.*

*Scheider, S., Nyamsuren, E., Kruiger, H., & Xu, H. (2020). Why geographic data science is not a science. Geography Compass, 14(11)*

*Guan, W. W., Wilson, M. W., & Knowles, A. K. (2019). Evaluating the geographic in GIS. Geographical Review, 109(3), 297–307.*

*O’Sullivan, D. (2020). Doing GIScience, doing geography. In Geographic information analysis (2nd ed., pp. 247–254).*