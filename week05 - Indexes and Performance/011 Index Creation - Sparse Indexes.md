# 011 Index Creation - Sparse Indexes

Sparse index: when some of the entries are missing the indexed key.

You cannot have a unique index on a key that no each document has, because not having a key equals its value to null ... hence you'd have more than one documents having the same value (i.e. null).

You can create an index with the `sparse` option, telling Mongo not to include documents in the index that are missing the indexed key.

```
db.employees.createIndex({email:1}, {unique:true, sparse:true})
```

In the above example we now force that the e-mail key is unique without running into any issues if several people do not have an e-mail.

Now, if we'd sort on the key that is sparse indexed, it will NOT use that index.

Note that sparse indexes also tend to be smaller.