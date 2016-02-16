# 006 Array Expressions

* [YouTube](https://www.youtube.com/watch?v=L1GMv4Q_jRc)
* [Manual](https://docs.mongodb.org/manual/meta/aggregation-quick-reference/#array-expressions)

## `$filter`

`$filter` passes a subset of an array based on filter criteria to the next stage of the aggregation pipeline.

An example:

```
db.companies.aggregate([
    { $match: {"funding_rounds.investments.financial_org.permalink": "greylock"}},
    { $project: {
        _id: 0,
        name: 1,
        rounds: { $filter: {
            input: '$funding_rounds',
            as: "round",
            cond: { $gte: ["$$round.raised_amount", 10000000]}
        }}
    }},
    { $match: { "rounds.investments.financial_org.permalink": "greylock"}}
])
```

- we project the `$filter` expression's result on the key `rounds`
    + the result of the filter will be an array of objects
- the `$filter` takes three paramemters
    - the array of the input we want to filter on
    - the name we would like to use for this founding rounds array throughout the rest of the filter expression 
    - the condition used to filter
        + note the double `$$` ... we use this to reference a variable defined within the expression we are working on (`round` in our case)
        + the `$gte` expression takes an array: the value of the first element needs to be greater than the second for the condition to be true


## `$arrayElemAt`

Returns element of an array at a specified index. Note the silly an unnecessary abbrevation of `Elem` instead of `Element`

- 0 based (i.e. index 0 returns first)
- use negative values to get from the end
    + `-1` returns the last element
    + `-2` returns the second to last element

The `$arrayElemAt` expects an array with the first element being the array to get a value from and the second element being the index:

```
{ $arrayElemAt: ["$<array_name>", <index>] }
```

Example:

```
db.companies.aggregate([
    { $match: { founded_year: 2010 }},
    { $project: {
        _id: 0,
        name: 1,
        first_round: { $arrayElemAt: ["$funding_rounds", 0]},
        last_round: { $arrayElemAt: ["$funding_rounds", -1]},
    } }
])
```


## `$slice`

Returns a subset of an array as an array

- `0` is the first element
- `-1` is the last element
- the range `0` to `-1` returns all elements

The `$slice` expression expects an array with the first element being the array to get a value from, the second being the starting index, the third being the ending index:

```
{ $slice: [$<array_name>, $<start_index>, $<end_index>] }
```

Example:

```
db.companies.aggregate([
    { $match: { founded_year: 2010 }},
    { $project: {
        _id: 0,
        name: 1,
        early_rounds: { $slice: ["$funding_rounds", 0, 2]}
    } }
])
```

Note: `$slice` can be used to replace `$arrayElemAt`. Simply drop the third argument:

```
{ $slice: [$<array_name>, $<index_of_element>] }
```


## `$size`

Returns the number of items in an array

`$size` expects the name of an array preceded by `$`:

```
{ $size: $<array_name> }
```

Example:

```
db.companies.aggregate([
    { $match: { founded_year: 2010 }},
    { $project: {
        _id: 0,
        name: 1,
        funding_rounds_count: { $size: "$funding_rounds" }
    } }
])
```



