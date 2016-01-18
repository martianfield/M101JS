# 004 Comparison Operators

[https://docs.mongodb.org/manual/reference/operator/query](https://docs.mongodb.org/manual/reference/operator/query)

Comparison operators allow us to compare value in query documents not only for equality, but other comparisons.

To use a comparison operator, put it as the property name of a document you make the value of the field you want to test. The following two query documents both check for equality:

```javascript
{name:"Amy"}
{name:{$eq:"Amy"}}
```

The following comparison operators are available:

- `$eq` - equal
- `$gt` - greater than
- `$gte` - greater than or equal
- `$lt` - less than
- `$lte` - less than or equal
- `$ne` - not equal (this also returns document that do NOT have the field)
- `$in` - any of the values in an array
- `$nin` - not in an array

A few examples:

```
// all movies with a runtime greater than 90
db.movieDetails.find({runtime: {$gt: 90}})
// all movies released in this century
db.movieDetails.find({year:{$gte:2000}})
```

Note how easy it is to express ranges:

```
db.movieDetails.find({runtime: {$gt:90, $lt:120}})
```

Here an array example:

```
// all movies released in 1999 or 2009
db.movieDetails.find({year: {$in:[1999, 2009]}})
```



