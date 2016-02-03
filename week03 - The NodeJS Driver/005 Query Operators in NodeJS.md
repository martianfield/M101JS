# 005 Query Operators in NodeJS

Sidenote: We use the `command-line-args` package so we can use the command line. Most of the video is about how he used this module to build query documents.

We pass a query document to the collection's `find()` method:

```javascript
MongoClient.connect(uri, (err,db) => {
    let query = { "year": 
        {"$lte": 2000, "$gte": 1900 }
    }
    let cursor = db.collection('movie').find(query)
    let docs = cursor.toArray()
    db.close()
})
```

To project the results, we simply chain `project()` to the `find()` method: E.g.:

```javascript
    ...
    let projection = { "_id":0, "title": 1 }
    let cursor = db.collection('movie').find(query).project(projection)
    ...
```

Note that `project()` is a `Cursor` method (`find()` returns a cursor). Other `Cursor` methods yoou can chain are:

- `filter(<query document>)` - I guess you use an empty `find()`
- `skip(<n>)`
- `limit(<n>`
- `max(<n>)`
- `min(<n>)`
- `sort(<array>)` - to set the sort order
- and others, see: [http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html](http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html)

Note: `findOne()` did take an options object as the second argument (to specify projection, skips, limit, etc). This method, however, is deprecated.


Note:MongoJS and the mongo shell stringify object ids differently ... that's all the difference there is. Both really ARE ObjectIds

