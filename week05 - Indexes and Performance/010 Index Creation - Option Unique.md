# 010 Index Creation - Option Unique

Example:

```
db.stuff.createIndex({thing:1}, {unique:true})
```

This creates an index on the key `thing` with the option of being unique. Now, what does that mean?

A: You cannot create the  index if there are existing entries that have the same value on the given key.

```
... "exception: E11000 duplicate key error index ...""
```

B: You cannot add items with that have a value for the uniquely indexed key that already exists in the database:

```
... "errmsg": "E11000 duplicate key error index: ..."
```

When you look at your indexes using `db.<collection>.getIndexes()` it will tell you which indexes are unique:

```
{
    ...
    "unique": true,
    "key": {
        "thing": 1
    }
}
```

Note: although the automatically created index for `_id` is always unique, it does not tell you that it is when doing `getIndexes()` ... rest assured, it IS unique.
