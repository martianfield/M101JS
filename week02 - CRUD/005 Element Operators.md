# 005 Element Operators

[https://docs.mongodb.org/manual/reference/operator/query-element/](https://docs.mongodb.org/manual/reference/operator/query-element/)

Element operators lets you check if

- a field exists: `$exists` ... this takes a boolean as the value
- a field is of a certain type: `$type`

## `$exists`

Examples:

```javascript
// return all documents that have the field 'name'
db.movies.find({"name": {$exists: true}})
// return all documents that do NOT have the field 'title'
db.movies.find({"title": {$exists: false}})
```

## `$type`

 A `$type` has the following syntax:

 ```javavascript
 { field : {$type: <BSON Type Number> | <String Alias>}}
 ```

I.e. each type has a number and a string alias, pick on of the two. E.g.

```javascript
// the following two are equivalent
{ name: { $type: 2 } }
{ name: { $type: "string" } }
```

 The available types are listed at [https://docs.mongodb.org/manual/reference/operator/query-element/](https://docs.mongodb.org/manual/reference/operator/query-element/)

Here two examples that filter documents based on whether the `_id` field is an ObjectId or a String:

```javascript
{ _id: { $type: 'objectId'} }
{ _id: { $type: 'string' } }
```

Note the spelling of the ObjectId alias, it is objectId ... with the I of Id being capitalized.
