# 008 Using Accumulators in `$project` Stages

* [YouTube](https://www.youtube.com/watch?v=oKrgjIq7sKs)

Example:

```
db.companies.aggregate([
    { $match: { "funding_rounds": { $exists: true, $ne: [] } } },
    { $project: { 
        _id: 0,
        name: 1,
        largest_round: { $max: "$funding_rounds.raised_amount" }
    } }
])
```

* The `funding_rounds` field is an array. The `$match` stage checks if it `$exists` in the document, if not returns an empty array.
* In the `$project` stage we create a new key named `largest_round` and assign it a value using the aggregation expression `$max`
    - `$max` takes the path to a field in an array preceeded by an `$`

Accordingly, we could change the `$project` stage to `$sum` up all funding rounds:

```
        ...
        total_funding: { $sum: "$funding_rounds.raised_amount" }
        ...
```

