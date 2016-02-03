# 006 $regex in the Node.js Driver

To create a RegEx expression to be used we create an object that contains two fields:

- `$regex` : the regular expression
- `$options` : regex options (e.g. 'i' for case-insensitive) queries

We then use this object as a filter on a field, e.g.:

```javascript
let filter = {"name": { "$regex": /tom/, "$options": "i"}}
```

We then use this filter (query document) as per usual with `Collection.find()` method:

```javascript
let filter = {"name": { "$regex": /tom/, "$options": "i"}}
db.collection('cats').find(filter).toArray() ...
```
