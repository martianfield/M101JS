# Week 2 - CRUD

## Creating Documents

Documents are created through inserts (`insertOne()`, `insertMany()`) and updates (so-called 'upserts').

### `insertOne()`

Creates a document in a collection. So call it as a member function of the collection. E.g.

```javascript
db.companions.insertOne({'name':'Amy Pond', 'scottish':true})
```

If the collection did not yet exist, it will be created.

Note that in the shell the result is not the same as in the Node.js driver

```javascript
// shell result example
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5699e033a4d0c39a7ad0aaf5")
}
// mongodb.js result example
{
	result: {ok:1, n:1}
	connection: { ...}
	ops: [ { name: 'Charlie2', _id: 5699e36408ecee9c74604c6c } ],
  	insertedCount: 1,
  	insertedId: 5699e36408ecee9c74604c6c 
}
```

More details: [http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#~insertOneWriteOpCallback](http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#~insertOneWriteOpCallback)
