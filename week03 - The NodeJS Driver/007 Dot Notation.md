# 007 Dot Notation

To filter against fields that are part of higher level fields (i.e. embedded documents) we use the dot notation.

The following examples all documents in the cats collection that have an entry for `pedigree.father` that is not null:

```javascript
db.collection('cats').find(
    {"pedigree.father": {"$exists": true, "$ne": null}}
).toArray()
```

