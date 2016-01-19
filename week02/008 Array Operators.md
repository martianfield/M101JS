008 Array Operators

[https://docs.mongodb.org/manual/reference/operator/query/#array](https://docs.mongodb.org/manual/reference/operator/query/#array)

There are 3 array operators:

- `$all` - matches if an array's elements matches the element given
- `$elemMatch`
- `$size`

## `$all`

An array field needs to contain all the elements given. E.g.

```javascript
// find all document whose array-field 'color' contains 'green' and 'red'
db.things.find({colors:{$all:["green", "red"]}})
```

## `$size`

Find document's that have an array field of a certain length:

```javascript
// find all documents whose 'color' array have 3 elements
db.things.find({colors:{$size:3}})
```



## `$elemMatch`

Say we have field that contains an array of objects:

```json
{ sales: [
    {"country": "USA", "revenue": 12},
    {"country": "UK", "revenue": 8}
]}
```

Let us assume we want to find all documents with sales above 10 in the UK, we'd be tempted to do this:

```javascript
.find({sales:{country:"UK", revenue:{$gt:10}}})
```

Our example entry above would be returned ... because the match is checked against the `sales` field as a whole (i.e. against all its elements)

To remedy this, we use the `$elemMatch` operator. It requires that one item of the array matches all criteria:

```javascript
.find({sales:$elemMatch{country:"UK", revenue:{$gt:10}}})
```

