# 002 ObjectId

When Mongo automatically creates an `_id`, it uses the ObjectId type.

An ObjectId is a 12-byte hex string, made up of the following parts:

```
- - - - | - - - | - - | - - - |
date      mac     pid   counter
          addr.
```

The Node implementation of the ObjectId is documented here: http://mongodb.github.io/node-mongodb-native/2.1/api/ObjectID.html

