# __Scope and the Science of Scaling__

We’ve talked a lot about scale and emphasized how important it is to recognize the effect decisions related to scale cnan have on geographic analyses.
A related perspective, is to acknowledge and embrace the concept of __scope__.
The importance of scope can be illustrated with an example from landscape ecology by Frazier (2023).
Considering scale is of course valuable, but thinking about scope can also be an effective alternative perspective on scale.
When simply choosing a scale is insufficient for answering a question, we could examine scale through scope, which facilitates comparison across analyses and studies.

## __The Problem of Scaling in Landscape Ecology__

Scientists have long recognized that localized experiments cannot be extrapolated directly to larger-scale questions.
This can be characterized as a problem of scaling - understanding how phenomena relate across scales possibly through generalizable mechanisms or principles.
This is especially true in landscape ecology, where landscapes are patchy and heterogeneous.
One approach to  advancing the science of scaling to attempt to predict and infer quantities measured at one scale to at another scale.
In fact, ecologists have engaged in multi-scale analyses for more than a century, and landscape ecologists have fully embraced this concept through research on the scale dependency of relationships, processes, and landscape metrics.
Past studies have also produced empirical evidence of scaling for certain landscape components, particularly spatial pattern metrics, with studies showing that some metrics scale predictably as measurement resolution changes.

However, the tradeoff to this prediction-oriented approach in the scaling research is that we do not know why these relationships occur, or whether they are driven by underlying processes or simply reflect the fractal nature of landscapes.
More importantly, this approach often does not produce generalizable knowledge and makes replication difficult.
__The underlyign problem mirrors the frustration that Openshaw reveals: results change dramatically with aggregation, but we lack a systematic way to compare or interpret those changes.__

## __Introducing Scope__

Frazier (2023) proposes that, at least in landscape ecology, advancing a science of scaling (and addressing the kinds of concerns highlighted by Openshaw) will benefit from acknowledging and embracing the concept of scope.
While scale refers to the relative size or extent of something and has dimensions, __scope is a dimensionless ratio of the range (extent) to the resolution (grain)__.
While grain and extent are each important on their own, their ratio is even more valuable for extending results into applications of scaling theory.
It is this extent-to-grain ratio that might provide insight into the robustness of a study.

From a physical standpoint, the scope ratio turns dimensional quantities into dimensionless ones so that values can be compared on a relative scale.
From a practical standpoint, the extent-to-grain ratio determines which processes can be onserved in the analytical results.
For example, if the extent-to-grain ratio is too small, boundary effects may dominate, leading to questionable metric computations or truncated patterns.
Many metrics are quite sensitive to scope, particularly those involving edge/perimeter measures or length-to-area relationships. 
Simply reporting scope can provide insight into the applicability of the findings.
In this sense, __scope helps us understand why results change with scale, which is something Openshaw demonstrated empirically but did not fully formalize.__

Beyond this, scope also provides a key way to facilitate replication and assess the comparability of different experiments.
Research is replicable if the same (or very similar) methods can be applied to new data and produce similar results<sup><a class="sidenote-ref" href="#sn-1">1</a></sup>.
However, replication is often complicated by a lack of consistency in the scales at which multi-scale studies are undertaken, making meaningful comparisons difficult or even impossible.
Studies conducted in different geographic areas may be more reliably compared if they operate at the same (or similar) scope.
Matching scope may also help address the problems raised by Openshaw: __if different zoning systems produce different results, how do we know which results are comparable? Scope can probably provide one answer.__

<div class="sidenote" id="sn-1">
<strong>1.</strong>Replication actually has several definitions, which can be confusing. The loose definition provided here is focused on computational work.</div>

## __Scope in Practice__

As an example, Frazier uses a set of forest maps from the United States and simplifies them into binary forest vs. non-forest maps.
From these, she computes landscape metrics such as number of patches, shape of patches, and largest patch size.
She then manipulate scale in two ways: by changing grain (resolution) and extent (study area), creating multiple combinations of “scale setups.”
These combinations correspond to different scopes: for example, a large extent with fine grain produces a large scope, while a small extent with coarse grain produces a small scope.

<div align="center">
    <img src="../../assets/scale-scope.png" alt="mapscale" width="700" height="700">
</div>

__Figure 1__: Scopes for three extents and five grains with letters indicating which extent-grain ratios are equal in scope. The
smallest/largest extent was not computed for the largest/smallest grain as there were no comparable scopes. Scope A is 111,111, B is 27,778, C is 6944, D is 1736, and E is 434. Ridgeline plots for b number of patches, c landscape shape index, d largest patch
index are colored according to scope. Plot colors match the scope colors in (a)

The key finding is that __results cluster by scope, not by grain or extent individually__.
Metrics such as number of patches may vary widely across different scales, but become much more similar when the extent-to-grain ratio is the same.
This leads to an important insight:

> It is not grain or extent individually that matters most, but their relationship.

If we connect this back to Openshaw, we can reinterpret his findings in a new way.
Openshaw shows that results change dramatically with aggregation.
Frazier’s contribution is to suggest that there is actually structure within that instability, but we were missing it because we were not relating it to extent.
That structure may be captured by scope.

Following this, several practical steps can help advance the science of scaling through scope:

- __First__, researchers should set scope based on the phenomenon being studied, rather than relying solely on available data.
- __Second__, studies should report both grain and extent quantitatively so that scope can be calculated and compared across studies.
- __Third__, researchers should undertake comparisons and replications based on scope. Replications sit at the core of the scientific method, yet geography faces particular challenges due to spatial context and analytical choices. By comparing studies conducted at similar scopes, we can better assess whether findings are robust, comparable, and generalizable.

---

Reference:

*Frazier, A. E. (2023). Scope and its role in advancing a science of scaling in landscape ecology. Landscape Ecology, 38(3), 637-643.*