# 004 Wired Tiger

* [YouTube](https://www.youtube.com/watch?v=aNsugW7r3mM)

More performant than mmap. Since 3.2 the default engine.

Offers document level concurrency (lock-free) vs. colleciton-level concurrency (in mmap)

Offers compression of data and indexes.

Append-only ... no in place updates. Allows to run without locks at document-level.

To start the mongo engine with wired tiger (no longer necessary to do that, since 3.2 it is the default):

```terminal
mongod --storageEngine wiredTiger
```

In case you there is already a mongo instance running:

```
killall mongod
```

If you have been running mmamp, you have to create new directory for the data (since WiredTiger cannot read mmap data)

```
mkdir data_wt
mongod --dbpath WTDATA --storageEngine wiredTiger
```

To check what engine you are using either start the mongo engine, or (if the engine is already running), use the `stats()` method in the mongo REPL (start with `mongo`). E.g:

```
db.test.stats()
```


