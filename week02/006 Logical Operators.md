006 Logical Operators

There are four logical operators:

- `$and`
- `$or`
- `$not`
- `$nor`

Note: all query expressions are implicitly 'and'-ed. So in most cases, you can actually go without using `$and`. The `$and` operator becomes necessary, if you want to look at the same field twice, e.g.:

```javascript
// find all employees between the age of 20 and 30
db.employees.find({
    $and: [
        {"age": {$gte: 20}},
        {"age": {$lte: 30}}
    ]
})
```

All logical operators need an array of query documents, e.g.

```javascript
{ $and: 
    [
        {"year":1968}, 
        {"color": "blue"}
    ]
}
```
## Examples

```javascript
// all movies that were released 1985 and have a PG-13 rating
db.movieDetails.find({$and: [{"year":1985}, {"rated":"PG-13"}]})
```