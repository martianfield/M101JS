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

When inserting a document, Mongo will provide an `_id` field for us. It is, however, possible to provide that field by ourselves ... it simply needs to be unique within the collection:

```javascript
db.companions.insertOne({'name':'Amy Pond', _id:'the girl who waited'})
```

If the `_id` is already used, we receive an error object containing the error code 11000

```json
{
	"index" : 0,
	"code" : 11000,
	"errmsg" : "E11000 duplicate key error collection: test.companions index: _id_ dup key: { : \"the girl who waited\" }",
	"op" : {
		"name" : "Amy Pond",
		"_id" : "the girl who waited"
	}
}
```

### insertMany()

To insert a batch of documents, we use `<collection>.insertMany([<objects>])`

```javascript
db.cats.insertMany([
	{'name': 'Purrloin'},
	{'name': 'Cinder'}
])
```

The result contains the same information but in its plural form:

```json
{ 
	"result": { "ok": 1, "n": 2 },
  	"ops": [ 
  		{ "name": "Purrloin", "_id": "5699e9e24acd47c1742d2f51" },
     	{ "name": "Cinder", "_id": "5699e9e24acd47c1742d2f52" } 
     ],
  	"insertedCount": 2,
  	"insertedIds": [ "5699e9e24acd47c1742d2f51", "5699e9e24acd47c1742d2f52" ] 
}
```

#### Ordered vs Unordered Inserts

It may happen, that one of the inserts in your insertMany may cause an error to occurs.

- **Ordered** inserts will immediately interrupt the execution if an error occurs
- **Unordered** inserts will continue processing the next insert if an error occurs

By default, `insertMany()` does ordered inserts, to change this, pass an additional argument containing options setting the `ordered` property to false:

```javascript
col.insertMany([
		{ name: 'first'},
		{ name: 'second'}
	],
	{
		ordered: false
	}
)
```

### Upserts through Updates

If an update command does not affect (i.e. the selector does not match) an exiting the document, a new document will be inserted.