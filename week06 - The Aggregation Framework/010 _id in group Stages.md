# 010 `_id` in `$group` Stages

* [YouTube](https://www.youtube.com/watch?v=k0Uv7jX--W4)

## Use a document as the `_id` instead of a simple value

When creating the `_id` in the `$group` stage it is a good idea to 'label' the grouping.

Say we had a collection of companies, each with a key named `founding_year` and we wanted to group them by that year. We could do the following:

```
db.companies.aggregate([
    { $group: { 
        _id: $founding_year,
        companies: { $push: "$name" }
    } }
])
```

We'd end up with something like this:

```json
{
    [
        {
        _id: 2015, 
        companies: [ "Dorf Corp", "SlopHog"]
        },
    ], 
    [
        {
        _id: 2014, 
        companies: [ "Stinc Inc", "1234 Wait Outside the Door"]
        },
    ]
}
```

This way, we'd have no idea what the `_id` is. It would be better to use an object (with a key and the year for value):

```
    ...
    _id: { "founded_in ": $founding_year}
    ...
```


## Using documents with multiple fields as `_id`

It is - of course - also possible to use a document with multiple fields as the `_id` in the `$group` stage.

Let us assume our company documents also contain a field named `category_code`. We can then use an `_id` that uses both, the `founding_year` and the `category_code` field.

The aggregation pipeline will create a group for each possible combination of founding year and category code.

```
db.companies.aggregate([
    { $group : 
        _id: { founding_year:"$founding_year", category_code:"$category_code" } },
        companies: { $push: "$name" }
])
```


## Using fields of embedded documents as `_id`

You can of course also use fields of embedded documents to group by. E.g. if our company documents contained another document named `locations` which contained a field named `headquarters`. Simply use dot-notation:

```
db.companies.aggregate([
    { $group: { 
        _id: { headquarters: "$locations.headquarters" },
        companies: { $push: "$name" }
    } }
])
```

Note: the field does not need to be a simple value. It is perfectly legal to use yet another document structure as the field to group by. In our example the `headquarters` field might be a document containing fields like `city`, `state`, etc.

