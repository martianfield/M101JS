# 003 Find Method and Cursors

* [YouTube](https://www.youtube.com/watch?v=OQ5APPuRATo)

## Find using the `toArray()` method on the Cursor

Once we have successfully connected to the database, we can use the database object, address a collection, and call the `find()` method on it:

```javascript
'use strict'

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/crunchbase', (err, db) => {
    if(err) {
        console.log("ERROR:", err.message)
    }
    else {
        let query = {"category_code":"biotech"}
        db.collection('companies').find(query).toArray((err, docs) => {
            if(err) {
                console.log("ERROR:", err.message)          
            }
            else {
                docs.forEach(function(doc) {
                    console.log( doc.name )
                })
                db.close()
            }
        })
    }
})
```

The `find()` method returns a cursor. We use the `toArray()` method on the cursor to get an array of documents.

Here the same example using Promises:

```javascript
'use strict'

const MongoClient = require('mongodb').MongoClient
let connectedDb;

MongoClient.connect('mongodb://localhost:27017/crunchbase')
    .then((db) => {
        connectedDb = db
        let query = {"category_code":"biotech"}
        return db.collection('companies').find(query)
    })
    .then((cursor) => {
        return cursor.toArray()
    })
    .then((docs) => {
        docs.forEach(function(doc) {
            console.log( doc.name )
        })
        connectedDb.close()
    })
    .catch((err) => {
        connectedDb.close()
        console.error('ERROR:', err.message)
    })
```

Note that we could directly convert the cursor into an array just as we did in the callback example:

```javascript
        ...
        return db.collection('companies').find(query).toArray()
    })
    .then((docs) => {
        ...
```


## More about the cursor

We could actually use the cursor to get through each object. To do so, we can use the cursor's `forEach()` method.

When we call the `find()` method without a callback, we receive a cursor object.

We can then the cursor's `forEach()` method. This method takes two arguments: a callback method receving the document the cursor is pointing at, and a callback used when an error occurs or the cursor is exhausted:

```
let cursor = db.collection('companies').find(query)
cursor.forEeach(
    (doc) => { console.log(doc.name) },
    (err) => { 
        db.close()
        if(err === null) 
            console.log("Cursor exhausted")
        else
            console.error(err.message)
    }
```

