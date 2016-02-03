# 011 When to Denormalize

Denormalization is the rule in Mongo ... as long as we avoid to duplicate data, we do not run the risk of creating inconsistencies.

* 1:1 - embeding works perfectly fine ... easy to avoid duplicating data
* 1:many - embeding (from many to one) can also work well. To go from one to many, linking can avoid data duplication
* many:many - linking the better way to go in most cases

Again: schema design in mongo is mostly application driven. E.g. there might be cases when embeding is even the best solution in many:many relations, or linking is the better strategy in 1:1 relations.