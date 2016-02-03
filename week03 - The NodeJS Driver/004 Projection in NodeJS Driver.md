004 Projection in NodeJS Driver

Field projection works by simply adding a projection object to the cursor.

A projection filter:

```
let projection = {"name":1, "category_code":1, "_id": 0}
```

Remember:

- 1 explicitly includes a field
- 0 explicitly excludes a field
- `_id` is always included, unless we explicitly exlude it
- all other fields are implcitly excluded, unless we expliticly ecxlude it

Using it with the cursor by using its `projection()` method:

```
let query = {"category_code" : "biotech"}
let cursor = db.collection('companies').find(query)
cursor.project(projection)
```

Note how this differes from how we project in the mongo shell (there we pass the projection object as the third argument to the `find()` method).


