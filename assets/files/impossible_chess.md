# The Impossible Chess Puzzle

<div class="date">8th July 2020</div>

***

Consider the graph \\(G_d=(V, E)\\) where the set of vertices is all possible \\(d\\)-tuple containing only 0s and 1s. Two vertices are said to be connected if and only if they differ at one index. As such, for \\(d=2\\), we have:

Similarly, for \\(d=3\\):

Clearly, it can be seen that the graph \\(G_d\\) represents a cube in \\(d\\)-dimensional space. For such a graph, we can conclude that \\(|V|=2^d\\), since that is the number of possible binary \\(d\\)-tuples. Furthermore, any such vertex must be connected to exactly \\(d\\) other vertices with an edge, since there are exactly \\(d\\) indices where another tuple may differ. We can infer that 

$$
|E| = \frac{1}{2}\sum_{v\in V}d(v) = d\cdot2^{d-1}
$$