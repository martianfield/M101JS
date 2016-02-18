# 002 Familiar Aggregation Operations

* [YouTube](https://www.youtube.com/watch?v=Kxegt-5iT-Q)

Here a list of aggregation operations we are already familiar with from querying:

- `$match` (works exactly the same as `find()`)
- `$skip`
- `$limit`
- `$sort`
- `$project`

To create an aggregation pipeline use the `aggregate()` method of the collection object and feed it an array of aggregation operations. E.g:

```
db.cats.aggregate([
    { $match: { age:4 } },
    { $sort: { name:1 } }
    { $skip: 4},
    { $limit: 5},
    { $project: { _id:0, name:1} }
])
```

Notes:

- why these operations if we already have them all in the query framework? we need those to do the more analytics oriented tasks supported by the aggregation framework
- the order in which the operations appear in the pipeline has (of course) an impact on the result. 
    - e.g. whether you `$project` before or after `$limit` will, while yielding the same result, have an impact on the performance (i.e. if you `$project` before, you will `$project` all results, while `$project`ing after is the better choice, since only the `$limit`ed set will have to be projected)
    - e.g. think about the order of `$limit` and `$sort` ... does not take a genius to see that the result will be greatly affected by the order
- always think about the efficiency of your aggregation pipeline ... only forward what is really necessary from one stage to the next
