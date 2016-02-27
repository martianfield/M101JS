# 021 Text Indexes

## Video

* link: [YouTube](https://www.youtube.com/watch?v=nLau5Fx9LC8)
* notes: 
    * At 0:36, Andrew says that when you search on strings with a standard index, the entire string must match. This isn't entirely true; a regex search will search the index (rather than the full collection), and if you anchor it on the left by beginning with ^, you can often do better still. Here's a link to the documentation.
    * in this video `ensureIndex` is used ... since 3.0 this is deprecated and is an alias for `createIndex` (see [here](https://docs.mongodb.org/manual/reference/method/db.collection.ensureIndex/))


## Why and What?

- Full text indices allows to make full text search efficiently.
- When doing a text query, MongoDB will only match results that match exactly ... searching for several words will become tedious quickly
- a full text index basically applies an OR operator to each word in a text you look for and checks if an indexed text contains one of the words
- a regex search would help in many cases, but is rather costly

## Problem Example

Say we have a collection of documents named `sentences` that each contains a key named `word` containing some text.

One of our documents contains 'yellow jumping rabbit'.

Now, if we'd do 

```
db.sentences.find({'words':'yellow jumping rabbit'})
```

we would get our document back.

Each of the following, however, would return nothing:

```
db.sentences.find({'words':'yellow jumping'})
db.sentences.find({'words':'jumping rabbit'})
db.sentences.find({'words':'yellow'})
db.sentences.find({'words':'rabbit'})
```

We could, of course, use a regex search ... this would, however, be rather costly.

## Problem Solution

To solve the issue we need to

- create a full text index
- doing a search on the text index

### Creating a Full Text Index

We can solve the issue by creating a full text index. We do this by creating a an index of type `text` on a field (in our case the field `words`):

```
db.sentences.createIndex({'words':'text'})
```

### Searching an Index

To actually make use of the text index, we need to `find` using `$text:{$search:...}}`:

```
db.sentences.find({$text:{$search:'jumping'}})
```

This indicates that we want to `$search` against the `$text` index.

Now we get all document that contain the word `jumping` in their `words` field.

Note: if we search for several words, the index will return any document that contains at least one of the words (i.e. it uses an OR operator). For instance:

```
db.sentences.find({$text:{$search:'jumping cat'}})
```

will return all documents that have either `jumping`, or `cat`, or both in their `words` field.

Additionally, things like punctuation (dots, commas, etc.) and certain stop words (like `and`, `a`) are ignored.

## Ordered Match

When doing a full text index search, Mongo rates found result by 'quality' of match (i.e. how good Mongo 'thinks' the document matches the search result).

```
db.sentences
    .find({$text:{$search:'jumping cat'}}, {score:{$meta:textScore}})
    .sort({score:{$meta:'textScore'}})
```


## Addendum: Create Index of Multiple Fields

https://docs.mongodb.org/manual/tutorial/create-text-index-on-multiple-fields/






