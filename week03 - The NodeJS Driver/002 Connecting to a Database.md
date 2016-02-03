# 002 Connecting to a Database

Here a version using a callback (Note how most callbacks in mongojs have an err object as the first argument and the result as the second).

```javascript
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/crunchbase', (err, db) => {
    if(err) {
        console.error("ERROR:", err.message)
    }
    else {
        console.log("Successfully connected to database")
        db.close()
    }
})
```


Here a version using a Promise:

```javascript
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/test')
    .then((db) => {
        console.log("successfully connected")
        db.close();
    })
    .catch((err) => {
        console.error("ERROR:", err.message)
    })
```


## The Connection String

The `connect()` method takes a Mongo connection string (uri). They look like this:

```
mongodb://<host>:<port>/<database>
```

The default port is `27017` - this can of course vary depending on environment.

To change the port, start `mongod` with the `--port` parameter, e.g.:

```shell
mongod --port 27018
```


