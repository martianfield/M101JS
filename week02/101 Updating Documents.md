101 Updating Documents

Three update commands:

- `updateOne()` - will update the **first** document matching the query document
- `updateMany()` - will update all documents matching the query document
- `replaceOne()`

There are also **'upserts'**: an update that results in an insert because the query document does not match any existing document. To make this happen, you need to use the third parameter (see below)

With all three commands you 

1. specify what to update (using a query document)
2. specify how to update; we must supply an [update operator](https://docs.mongodb.org/manual/reference/operator/update/) and a document with fields and value. Here the update operators (not all):
    - `$set` - to update the value of a field
    - `$unset` - remove the field
    - `$rename` - rename the field
    - `$currentDate` - set the field's value to the current date
    - furthermore we can increment (`$inc`), multiply (`$mul`), only update if the supplied value is smaller or larger as the current (`$min`, `$max`), or only set value of the update result in an insert (an upsert) (`$setOnInsert`)
3. specifiy if you want to allow upserts: `{upsert: true}`


An example:

```javascript
db.companions.updateOne(
    {"name":"Amy Pond"},
    {$set: {"nationality":"Scotland"}}
)
```

Of course updates are not restricted to scalar values. We can also update arrays and documents:

```javascript
db.compansions.updateOne(
    {"name":"Amy Pond"},
    {$set: {"titles": ["The girl who waited", "River song's mother"]}}
)
```

More examples:

To change numeric values, we preferably should use `$inc` and `$mul`:

```javascript
// increase Amy Pond's age by 1
db.companions.updateOne(
    {"name": "Amy Pond"},
    {$inc: {"age": 1}}
)
// decrease River Song's age by 10
db.companions.updateOne(
    {"name": "River Song"},
    {$inc: {"age": -10}}
)
// we can also inc several fields at once
db.companions.updateOne(
    {"name": "River Song"},
    {$inc: {"age": 1, "messages": 1}}
)
```


## Array Update Operators & Modifiers

There are also [update operators for arrays](https://docs.mongodb.org/manual/reference/operator/update/#array):

To add add item(s) to an array:
- `$addToSet` (only add item if it does not already exist)
- `$push` (add one item, or many in conjunction with the `$each` modifier)
- `$pushAll` (deprecated)

To remove items
- `$pop` (remove first or last item)
- `$pullAll` (Removes all matching values from an array)
- `$pull` (removes all the first matching value)  Removes all array elements that match a specified query.

- `$`   Acts as a placeholder to update the first element that matches the query condition in an update.

There is also a range of [modifiers](https://docs.mongodb.org/manual/reference/operator/update/#modifiers)

The `$each` modifier, for instance, allows us to push a range of items of an arry onto an array (instead of pushing the entire array):

```javascript
db.companions.updateOne(
    {"name": "River Song"},
    {$push :{ "titles": { $each: [
        "The Impossible Astronaut",
        "The Doctor's Wife"
    ]}}}
)
```

Another import modifier is `$slice`. It is used with `$each`. It lets you tell mongo to only use a certain number of items in the target array.

If we do so, we also want to use the `$position` modifier, and set it to 0 to make sure the added items are added to the beginning.


## Upserts

An update that results in an insert. This will happen if no document matches the given query document **AND** if the third argument has the `upsert` field set to true:

```javascript
db.companions.updateOne(
    {"name": "Rose Tyler"},
    {"nationality": "British"},
    {upsert: true}
)
```

By default upserts are DISabled.


## `replaceOne()`

[https://docs.mongodb.org/manual/reference/method/db.collection.replaceOne/](https://docs.mongodb.org/manual/reference/method/db.collection.replaceOne/)

This replaces a single document in a collection with a passed document:

```javascript
replaceOne(<query document>, <replacement object>, [<options: upsert, write concern>])
```

As with the update commands, setting the third argument to have `upsert` set to true, will let upserts happen.



 