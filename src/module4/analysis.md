
# __Uncertainty Analysis and Quantification__

Having understood the concepts and components of uncertainty, to conclude the uncertainty lesson, we will now quickly walk through two practical applications of uncertainty analysis and quantification to conclude the uncertainty lesson.

## __Uncertainty Analysis in Social Vulnerability Index__

Tate's classic article in 2013 asks a very practical question: when we build a social vulnerability index, how reliable are the final rankings?
Social vulnerability indexes are often used to identify priority areas for hazard mitigation, emergency planning, and resource allocation.
But the final map depends on many researcher decisions: which indicators to include, what scale to analyze, how to transform variables, how to normalize them, how to weight them, and how to aggregate them.
Tate’s argument is that each of these choices introduces uncertainty into the final index.

Specifically, Tate distinguishes two broad forms of uncertainty: 

__Aleatoric uncertainty__ comes from inherent randomness or variability in the world.
For example, the timing of a hazard event may vary in ways that cannot be fully controlled.

__Epistemic uncertainty__ comes from incomplete knowledge, modeling choices, or uncertainty in how a process should be represented.
Tate emphasizes that social vulnerability indexes are especially full of epistemic uncertainty because each stage of index construction requires choices by the researcher.

Tate presents social vulnerability index construction as a sequential process. The major stages include:

<div style="text-align: center;">
  <a href="../../assets/U-Index.png" class="zoomable">
    <img src="../../assets/U-Index.png" style="width: 60%;">
  </a>
</div>

__Figure 1__: Index construction flowchart.

A social vulnerability index combines multiple indicators into a single score or ranking.
In simplified form:

$$  
SVI_j = f(x_{1j}, x_{2j}, \ldots, x_{pj})  
$$

where:

- $SVI_j$​ is the social vulnerability index for spatial unit $j$,
- $x_{ij}$​ is indicator iii for spatial unit $j$,
- $p$ is the number of indicators.

In an additive index, this usually becomes a weighted linear combination:

$$
SVI_j = \frac{\sum_{i=1}^{p} w_i z_{ij}}{\sum_{i=1}^{p} w_i}
$$

where:

- $Z_{ij}$ is the transformed and normalized value of indicator$i$ in unit $j$. 
- $W_i$​ is the weight assigned to indicator $i$.

Tate discusses that the same __vulnerability indicator__ can be represented in different ways.
For example, an elderly population indicator could be represented as an absolute count:

$$
x_{ij}^{count} = \text{number of elderly people in unit } j
$$

as a proportion:

$$  
x_{ij}^{prop} = \frac{\text{elderly population in unit } j}{\text{total population in unit } j}  
$$

or as an areal density:

$$  
x_{ij}^{density} = \frac{\text{elderly population in unit } j}{\text{area of unit } j}  
$$

<div style="text-align: center;">
  <a href="../../assets/U-Indicator.png" class="zoomable">
    <img src="../../assets/U-Indicator.png" style="width: 100%;">
  </a>
</div>

__Figure 2__: Indicator Set.

Because indicators are measured in different units, they must be __normalized__ before they can be combined.
Tate discusses several common approaches.

Min–max scaling:

$$  
z_{ij} = \frac{x_{ij} - \min(x_i)}{\max(x_i) - \min(x_i)}  
$$

Maximum-value scaling:

$$  
z_{ij} = \frac{x_{ij}}{\max(x_i)}  
$$

Z-score standardization:

$$  
z_{ij} = \frac{x_{ij} - \bar{x}_i}{s_i}  
$$

Each normalization method changes the distribution of indicator values and can therefore affect the final ranking.
Tate emphasizes that these choices are not neutral technical details; they are part of the uncertainty of index construction.

__Weighting__ is one of the most subjective parts of index construction.
Weights can be equal, expert-derived, participatory, or statistically derived.
Importantly, Tate notes that equal weighting is not the same as being unweighted.
Equal weights are also a modeling choice.
In addition, if several indicators are highly correlated, equal weighting can still create implicit double-counting of one vulnerability dimension.

A simple weighted form is:

$$  
SVI_j = \sum_{i=1}^{p} w_i z_{ij}  
$$

If all indicators are equally weighted:

$$  
w_i = \frac{1}{p}  
$$

then:

$$  
SVI_j = \frac{1}{p}\sum_{i=1}^{p} z_{ij}  
$$

### __Monte Carlo Uncertainty Analysis__

The main method of the paper is Monte Carlo simulation.
Instead of producing one index from one set of choices, Tate repeatedly builds the index using alternative reasonable choices at each stage.
In each simulation run, one option is selected for each construction stage, the index is computed, and the vulnerability rank for each census tract is saved.

The logic can be written as:

$$  
\theta^{(m)} = \{ \text{indicator choice}, \text{scale}, \text{measurement error}, \text{transformation}, \text{normalization}, \text{weighting} \}  
$$

$$  
SVI_j^{(m)} = f(X_j, \theta^{(m)})  
$$

$$  
R_j^{(m)} = \text{rank}(SVI_j^{(m)})  
$$

where: 

- $m$ is the Monte Carlo run
- $\theta^{(m)}$ is the set of modeling choices in run $m$
- $SVI_j^{(m)}$ is the vulnerability score for unit $j$ under run $m$, 
- $R_j^{(m)}$ is the vulnerability rank

After many runs, each census tract has a distribution of possible ranks, rather than a single rank.

<div style="text-align: center;">
  <a href="../../assets/U-statistics.png" class="zoomable">
    <img src="../../assets/U-statistics.png" style="width: 70%;">
  </a>
</div>

__Figure 3__: Uncertainty analysis statistics.

### __Uncertainty Metrics__

Tate uses the simulated rank distributions to assess three things: uncertainty magnitude, bias, and precision

For __uncertainty magnitude__, Tate uses a 90 percent confidence interval for each tract’s rank.
This can be written as:

$$  
CI_{90,j} = \left[ Q_{0.05}(R_j), Q_{0.95}(R_j) \right]  
$$

The width of the confidence interval is:

$$  
W_j = Q_{0.95}(R_j) - Q_{0.05}(R_j)  
$$

A wider interval means the tract’s rank changes substantially across alternative index configurations.

For __bias__, Tate compares the baseline index rank to the distribution of simulated ranks. The median rank is:

$$  
\tilde{R}_j = \text{median}(R_j^{(1)}, R_j^{(2)}, \ldots, R_j^{(M)})  
$$

A simple bias measure is:

$$  
B_j = R_{j}^{baseline} - \tilde{R}_j  
$$

If the baseline rank is far from the median of the simulated ranks, then the baseline index may be biased relative to alternative reasonable configurations.

For __precision__, Tate also uses the coefficient of variation to describe how spread out the simulated ranks are:

$$  
CV_j = \frac{sd(R_j)}{\bar{R}_j}  
$$

where: 

- $sd(R_j)$ is the standard deviation of simulated ranks for tract $j$.
- $\bar{R}_j$ is the mean simulated rank

A high CV means the tract’s rank is unstable across alternative modeling choices. Tate notes that CV helps distinguish cases where rank values are tightly clustered from cases where they are spread throughout the confidence interval.

Tate finds a high magnitude of uncertainty in the social vulnerability index. In some places, the index performs strongly across alternative configurations, but in about a third of census tracts the baseline ranking is statistically biased. The paper also finds that index precision decreases as vulnerability increases, meaning that some of the places that appear most vulnerable may also have less precise rankings.

## __Finding an Adequate Areal Unit to Map Crime__

Though a more recent application of uncertainty analysis, Ramos’s chapter also focuses on a classic spatial uncertainty problem: what areal unit should we use to map crime? Crime incidents are often recorded as points, but many maps and models require those points to be aggregated into polygons or grid cells.

Ramos frames the choice of areal unit as a tradeoff.  If the areal unit is __too broad__, crime may not be evenly distributed within the unit. A large cell might contain one small crime hotspot and many low-crime areas, but aggregation would average them together. This creates low internal uniformity and can lead to ecological fallacy problems. If the areal unit is __too fine__, many cells may contain very few crimes or no crimes. Counts then become unstable and overly sensitive to random fluctuation, geocoding error, underreporting, or small changes in the data.

With that in mind, Ramos proposes a method for choosing an adequate grid-cell size for crime mapping by balancing two criteria: __Internal uniformity and Robustness to error__. His approach can be summarized into three steps.

### __Estimate Internal Uniformity__

For a given granularity $g$, Ramos creates a set of quadrats or grid cells:

$$  
S_g = \{s_{1g}, s_{2g}, \ldots, s_{ng}\}  
$$

For each quadrat, the method tests whether the crime points inside the cell are consistent with complete spatial randomness, or CSR. If a cell fails to reject CSR, then the points inside it are treated as internally uniform. If many cells fail to reject CSR, the granularity is considered more internally uniform. The internal uniformity metric can be written as:

$$
u_g = \frac{1}{n} \sum_{i=1}^{n} I_i
$$

where:

$$
I_i =
\begin{cases}
1, & \text{if CSR is not rejected in } s_{ig} \\
0, & \text{if CSR is rejected in } s_{ig}
\end{cases}
$$

So:

- high $u_g$ means crime is relatively uniform inside cells,
- low $u_g$ ​ means many cells still contain internal clustering.

### __Estimate Robustness to Error__

Ramos then estimates how stable crime counts are at each granularity. The basic idea is that a count based on many events is more stable than a count based on very few events. The chapter uses the coefficient of variation to measure expected proportional variation in crime incidence. The robustness metric is:

$$
r_g = \exp \left( -k \cdot \frac{1}{n} \sum_{i=1}^{n} coef\_var(s_{ig}) \right)
$$

where: 

- $r_g$ is robustness to error at granularity $g$.
- $k$ is a constant
- $coef\_var(s_{ig})$ is the coefficient of variation for crime incidence in quadrat
- $n$ is the number of quadrat

A __Binomial Estimate:__ 

$$
k_i = \text{number of crime events in quadrat } s_{ig}
$$

$$
k = \text{total number of crime events}
$$

$$
p_i = \frac{k_i}{k}
$$

If the count in quadrat $i$ is treated as binomially distributed, then:

$$
K_i \sim Binomial(k, p_i)
$$

The expected count is:

$$
E(K_i) = kp_i
$$

The variance is:

$$
Var(K_i) = kp_i(1-p_i)
$$

So the coefficient of variation is:

$$
coef\_var(s_{ig}) =
\frac{\sqrt{kp_i(1-p_i)}}{kp_i}
=
\sqrt{\frac{1-p_i}{kp_i}}
$$

For a __Poisson Estimate__:

$$
K_i \sim Poisson(\lambda_i)
$$

then:

$$
E(K_i) = \lambda_i
$$

$$
Var(K_i) = \lambda_i
$$

The coefficient of variation is:
$$
coef\_var(s_{ig}) = \frac{\sqrt{\lambda_i}}{\lambda_i}
= \frac{1}{\sqrt{\lambda_i}}
$$

For a __Resampled Approach__: The idea is to simulate multiple possible count values, estimate the coefficient of variation for each simulated count, and then average them.

$$  
K_{ij}^{*} \sim Binomial(k, p_i)  
$$

$$  
coef\_var(s_{ig}) =  
\frac{1}{m} \sum_{j=1}^{m} \frac{1}{\sqrt{K_{ij}^{*}}}  
$$

The purpose is to account for uncertainty in the estimated count itself.

### __Find a Balance__

The final step is to choose a granularity that balances the two criteria. Ramos describes several ways to find this compromise. One is to find the point where the tradeoff curve has slope -1:

$$  
\frac{du(g_{best})}{dr(g_{best})} = -1  
$$

This means that a small gain in robustness would produce an equal loss in uniformity, or vice versa. Another approach is to maximize the product:

$$  
g_{best} = \arg\max_g \left[u_g \cdot r_g\right]  
$$

A third approach is to maximize the sum:

$$  
g_{best} = \arg\max_g \left[u_g + r_g\right]  
$$

Ramos applies the method to residential burglary data in two Brazilian cities: Belo Horizonte and Rio de Janeiro.

<div style="text-align: center;">
  <a href="../../assets/U-R1.png" class="zoomable">
    <img src="../../assets/U-R1.png" style="width: 100%;">
  </a>
</div>

__Figure 4__: Different ways of estimating internal uniformity and robustness to error produce similar overall trends for Belo Horizonte. As grid cells become larger, internal uniformity generally decreases because larger cells are more likely to contain hidden internal clustering. At the same time, robustness to error increases because larger cells contain more crime events and therefore produce more stable counts. The key lesson is that areal-unit choice involves a tradeoff: too fine creates unstable counts, while too coarse hides spatial structure.

<div style="text-align: center;">
  <a href="../../assets/U-R2.png" class="zoomable">
    <img src="../../assets/U-R2.png" style="width: 100%;">
  </a>
</div>

__Figure 5__: Simplified relationship showing one estimated curve for internal uniformity and one for robustness to error. Internal uniformity declines as granularity increases, while robustness improves. Ramos’s method looks for a compromise between these two patterns: a grid size that is not so small that counts are unreliable, and not so large that meaningful crime clusters are concealed.

---

References:

*Tate, E. (2013). Uncertainty analysis for a social vulnerability index. Annals of the Association of American Geographers, 103(3), 526–543.*

*Ramos, R. G. (2025). Finding an adequate areal unit to map crime: A spatial data perspective. In M. Leitner (Ed.), New research in crime modeling and mapping using geospatial technologies (pp. 27–44). Springer Nature Switzerland.*