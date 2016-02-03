003 Reading Documents

## Query Documents

To read documents we use the `find()` command on a collection. We can pass an object to filter ... we call this 'Query Document'

```
db.movieDetails.find({rated: "PG-13"})
```

Remember, you can also 'pretty' the output using the  `pretty()` method:

```
db.movieDetails.find({rated: "PG-13"}).pretty()
```

We can also get a count by adding the `count()` method:

```
db.movieDetails.find({rated: "PG-13"}).count()
```

### Implicit AND

We filter further by adding more key-value pairs to the Query Document:

```
db.movieDetails.find({rated: "PG-13", year: 2009}).count()
```

Note: Items in a Query Document are implicitly 'and-ed'. We will look at query operators (like '$or') later.

## Nested Structures

Embedded documents, arrays, and others can be queried against as well. 

### Embedded Documents 

Simply use the dot-notation to identify a field, making sure we surround the key with `"`. E.g.

```
db.movieDetails.find({"tomato.meter":100}).pretty()
```

### Arrays

We do equality matches on

- the entire array
- any element match
- a specific element
- more complex matches using operators (we learn that later)

#### Entire Array

```
db.movieDetails.find({"writers": ["Ethan Coen", "Joel Coen"]})
```

Note: the order of elements matters

#### Any Element in Array

```
db.movieDetails.find({"actors":"Jeff Bridges"})
```

The `actors` field is an array. Our query will return all items that contain "Jeff Bridges" `actors` array.

#### A Specific Element (index) in Array

A specific position in an array is done using dot-notation using the element index:

```
db.movieDetails.find({"actors.0":"Jeff Bridges"})
```


## Cursors

The `find()` method returns a cursor. (In the mongo shell the cursor is automatically ran through if you do not assign it to a variable).

Note: Cursors return data in batches (this is a mongo configuration). To see the number of items left in a batch: `c.objsLeftInBatch()`.

To get the next item, use `<cursor>.next()`.

To check if there is a next item, use `<cursor>.hasNext()`

To play around with a cursor in the mongo shell, do the following

```javascript
var c = db.movieDetails.find()
var doc = function() { return c.hasNext() ? c.next() : null}
doc()
doc()
```

## Projection

Mongo by defaults returns all fields. Projections let you limit the fields returned. 

Projections are defined as the second argument to a `find()` method. We pass an object containing key-value pairs. The key is the field's name, the value is `1` to include, `0` to exclude.

```javascript
db.movieDetails.find({rated:"PG-13"}, {title:1})
```

Note: `_id` is always returned by default. If we don't want this, we need to explictly exclude it by using `_id:0`

```javascript
db.movieDetails.find({rated:"PG-13"}, {title:1, _id:0})
```

Note: we can also explicitly exclude:

```javascript
db.movieDetails.find({"actors.0":"Jeff Bridges"}, {type:0})
```

```
{}
```