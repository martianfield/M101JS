# Basic CRUD

Make sure the mongo server is running

```terminal
mongod
```

Start the Mongo Shell (REPL) in another Terminal window:

```terminal
mongo
```

## Getting Help

Use `mongo help` to get a list of commands.


## Listing Databases, Using them, and Listing Collections

Use `show dbs` to show the databases available to the server.

To use a database enter `use <database name>`

Use `show collections` to list the collections in the currently used database.


## Create with `insertOne()`

We use `db.<collection>.insertOne(<json>)` to insert a document into a collection. E.g.:

```shell
db.members.insertOne({ "username": "creeky_owl", "email": "creeky@owl.com"})
```

Note: if the collection does not exist, mongo will automatically create it for us.

Note: each document needs a `_id` field. Its value needs to be unique. If the value is not unique, we receive and error with `.code` `11000` . If none is specified when inserting a document, mongo will add it for us and giving it an `ObjectId`

## Reading data with `find()`

To display all documents contained in a collection:

```shell
db.members.find()
```

To make it look a bit better, chain the `pretty()` command:

```shell
db.members.find().pretty();
```

At the heart of reading data is a **Query-By-Example** strategy:

```shell
db.members.find({"username":"redbeard"});
```

Note: `db.members.find()` is actually the same as `db.members.find({})`

Note: only the documents that match ALL the constraints we supply by example are returned

### Cursors

The results are NOT returned as an array ... we receive a cursor ... run a `find()` command as well and note: this is NOT an array. To receive an array, chain the `toArray()` method.

We can use this cursor to iterate through the results:

```shell
var c = db.members.find()
```

Use `hasNext()` on the cursors to check if there is more dat:

```shell
c.hasNext()
```

Use 'next()' to move to get the next and move the cursor:

```shell
c.next()
```

Instead of dealing with a cursor, we can use the `toArray()` method on the array:

```shell
let docs = c.toArray()
```
