# 007 Discovering and Deleting Indexes

```
db.<collection>.getIndexes()
```

Note: the index on '_id' is created automatically and cannot be deleted.

To drop an index, use `dropIndex({<key1>:1})`. Use the name as given when you do `getIndexes()`

Example:

```
db.employees.dropIndex({username:1})
```

