# 006 Creating Indexes

To create an index:

```
db.<collection>.createIndex({<key>:1})
```

The number you assing to a key is either `1` for ascending, `-1` for descending. Note: this has no impact on finding, only on returning sorted items.

Note: creating index can take quite some time.

When appending the `explain()` command to the collection, mongo tells us which indexes it is using, e.g.:

```
db.employees.explain().find({last_name:'miller'})
```

To see what indexes are on a collection, you can use the `stats()` method:

```
db.employees.stats()
```

## Creating a Compound Index

If you wanted an index on `last_name` ascending first and `year` descending second, you'd simply pass the `<key>:<direction>` in that order:

```
db.employees.createIndex({last_name:1, year:-1})
```

