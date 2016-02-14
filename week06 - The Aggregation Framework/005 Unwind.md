# 005 Unwind

[Video](https://www.youtube.com/watch?v=PtuTLCPq3TM)


`$unwind` allows us to transform an arry of an input document into a series of documents. E.g.:

```json
{
    name:"Peter",
    age: 24,
    hobbies:[
        { "name": "running", "proficiency": "good"}
        { "name": "drawing", "proficiency": "average"}
    ]
}
```

can be turned into

```json
[
{
    name: "Peter",
    hobbies: "running"
},
{
    name: "Peter",
    hobbies: "drawing"
}
]
```

I.e. for each array that is targeted by `$unwind` a new document is created with the array key (in our case `hobbies`) no longer containing an array, but one of the values of the array.

To use `$unwind` simply supply the path to the key of the array you want to unwind. E.g.:

```
db.companies.aggregate([
    { $match: {"age": {$gt: 20}} },
    { $unwind: "$hobbies" },
    { $project: { 
        _id: 0,
        name: 1,
        hobby: "$hobbies.name"
    }}
])
```


## Unwinding Arrays that Contain Arrays

If you `$unwind` an arry that contains another array and then `$project` the result, you will want to make sure to constrain your results to what you really want to receive.

To prevent possible issues, you could preceed the `$match` stage with an unwind, however you do not want to do that. The first thing in a pipeline should be a `$match` to limit the number of documents.

So, what you can do instead is:

- add another `$unwind` on the embedded array,
- and add another `$match` after the second `$unwind`.


