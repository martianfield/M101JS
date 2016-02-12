# 004 Reshaping Documents in project Stages

## Promoting Embedded Document Fields

You can 'promote' nested fields during a project stage.

For instance, lets say we have a document that has an embedded document that are structured like this:

```json
{
    name: "Peter",
    age: 26,
    education: {
        has_master: true,
        primary_school: {
            school: 'Herford Plumpcake Elementary',
            first_year: 1980,
            last_year: 1987
        }
    }
}
```

You can then project this nested structure into a flattened document by using `$<path>.<to>.<field>` ... telling the `$project` stage by using the leading `$` to use the value it finds in a nested field. E.g.:

```
db.employees.aggregate([
    { $match: {}},
    { $project:{
        _id:0,
        name:1,
        has_master:'$education.hasMaster',
        primary_school_name: "$education.primary_school.school"
       } 
   }
])
```

Note: you can also embed array values that way. E.g.

```json
{
    name: "Peter",
    girlfriends: [
        {name : "Anne", hair:"blond"},
        {name : "Jules", hair:"black"},
        {name : "Joan", hair:"blond"}
    ]
}
```

```
db.gigolos.aggregate([
    {$match: {}},
    {$project: {
        _id:0,
        name:1,
        girlfriends:"$girlfriends.name"
    }}
])
```

Will result in

```json
{
    "name": "Peter",
    "girlfriends": [ "Anne", "Jules", "Joan"]
}
```


## Creating Nested Documents 

Of course you can also create an embedded document during `$project`. E.g.

```json
{
    "name": "Peter",
    "primary_school": "Metallic Elementary School",
    "secondary_school": "Jigsaw High",
    "college": "Dropdead Drunk University"
}
```

```javascript
db.employees.aggregate([
    {$match: {} },
    {$project: {
        _id: 0,
        name: 1,
        education: {
            primary:"$primary_school",
            secondary:"$secondary_school",
            college:"$college"
        }
    }}
])
```

## Limits of $project

There are MANY things you can do during a project stage ... one thing that is NOT possible, however, is to change the data type.
