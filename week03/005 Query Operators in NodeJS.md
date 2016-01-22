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

To project the results, simply use the second paramater of `find()` (as discussed earlier). E.g.:

```javascript
    ...
    let projection = { "_id":0, "title": 1 }
    let cursor = db.collection('movie').find(query, projection)
    ...
```

Note:

MongoJS and the mongo shell stringify object ids differently ... that's all the difference there is. Both really ARE ObjectIds

