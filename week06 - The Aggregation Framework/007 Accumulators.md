007 Accumulators

* [YouTube](https://www.youtube.com/watch?v=O35V9ZR7TEs)
* [Manual](https://docs.mongodb.org/manual/reference/operator/aggregation/#accumulators)

## What Accumulators Do

Accumulators are pulling data togeter, e.g. returning a sum, a min or max value, etc.

Accumulators are calculating values from fields in **multiple** documents. 

A few of them are:

* `$sum` - returns a sum
* `$avg` - returns an average
* `$max`, `$min` - return the minimum / maximum value
* `$first`, `$last` - return the first / last item in an array (i.e. a set of documents)

There are also accumlators for arrays:

* `$push` - push a number of values onto an array
* `$addToSet` - does basically the same as `$push`, but **no duplicate** values will be added

There are statistical functions too:

* `$stdDevPop` - the population standard deviation of the input values
* `$stdDevSamp` - the sample standard deviation of the input values

## Accumulators in Project Stage

Before Mongo 3.2 accumulators were only available in the group stage.

Since Mongo 3.2 a subset of the accumulators are now avaialabe in the project stage.

In group stage accumulators will keep their state (totals, max, min, etc). In project state they don't.

In project stage some accumulators (like `$sum` and `$avg`) must operate on arrays within a single document.


