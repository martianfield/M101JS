# 002 Relational Normalization

3rd Normal Form

"any non-key column most say something about the key, only the key and nothing but the key"

- free database of modification anomalies
- minimize redesign when extending
- avoid bias toward any particular access pattern 

The last is exactly the oppposite of what Mongo design should aim for. The reasoning behind this is: if you are not aiming at a particular usage pattern, you are equally bad at all of them.

Additionally, Mongo with its flexibilty lends itself very well toward not having to redesing when extending.
