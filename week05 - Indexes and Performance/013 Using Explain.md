# 013 Using Explain

Explain does give informatino about what a query is going to do.

Since 3.0 the `explain()` method is used after the colleciton:

```
db.cats.explain().find()/.update()/remove() ...
```

You won't get information on inserts