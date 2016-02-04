008 Multikey Indexes

Indexes on arrays are called multikey indexes. Whenever you have an index (or compound index) which has an array as a field, Mongo creates a multikey index.

A multikey index creates an index entry for EACH item in the field's array. E.g. if we have the following entry:

```
{ 
    name: `Tom`,
    interests: ['reading', 'drawing'],
    year: 1970,
    workplaces: ['home', 'headquarters']
}
```

and add an index on the `interests` key, Mongo will create two index entries: one for `reading`, one for `drawing`.

## Compound Index with Multikey Index

Now, if we'd add a compound index of `interests` and `year`, we'd also get two index entries: one for `reading, 1970`, and one for `drawing, 1970`.

## Compound Index with Multiple Array Fields (not allowed in a single document)

If we'd add a compound index of `interests` and `workplaces` (both of which are arrays), we'd get one index entry for each combination of interests and workplaces: `reading, home`, `reading, headquarters`, `drawing, home`, `drawing, headquarters`. This could quickly explode. Hence: **compound indexes with more than one array field are NOT allowed in a single document**

## Notes

Indexes only become multikey indexes when for the first time an indexed field does actually contain an array.

Doing a query with `explain()` chained, will tell you if a multikey index was used. E.g.:

```
db.employees.explain().find({workplaces:'home'})
```

Now, if we'd have a compound index and attempted to put arrays into more than one of the keys used in the compound index, we'd get an error saying:

```
{ ...
    "writeError": {
        "code": 10088,
        "errmsg": "cannot index parallel arrays [<key>] [<key>]"
    }
}
```

The `getIndexes()` command does NOT tell you if an index is a multikey index. There is a reason for this: multikey indexes are not on the indexes themselves, but per document entry ... here by example

You have a compund index on the fields `a` and `b`.

You add a document with an array in `a` and a scalar on `b` ... that's fine.

You add a document with a scalar in `a` and an array in `b` ... that is also fine.








