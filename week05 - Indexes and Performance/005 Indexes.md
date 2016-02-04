# 005 Indexes

Documents in your database are stored in a random order on your disc. Finding a document that way is only possible by looking at every single document.

Indexes solve this problem to some degree. They store indexed fields as an ordered list, which each item containing the indexed field and the place where to find the document the field belongs to can be found on disc.

WireTiger uses b+trees to search indexes.

It is possible to index more than one field per document. You could, for instance, index on `name` and on `hair_color`. That way each index entry will contain the two values indexed on, plus the location of the document on disc. E.g. you'd have 'Adam,Blonde' ponintin at some location. In our example, the index documents are in the order `name, hair_color`.

Note: in our example searching on just the `hair_color` using the given index would not work well, since index documents for it are all over the place.

To summarize: if you have combined index of say `a, b, c`. You can search on `a` on `a, b`, and on `a, b, c` ... searching on `b` or `c` only or on `b, c` does not work.

## Indexing is not free

Reads are much faster with indexes, writes are generally much slower with indexes:

Whenever you write data the index needs to be updated as well. This is why we most likely never want to have indexes on every single key of a collection.

Note: updates (which also include reads) might profit from indexing. 

Depending on the situation having no indexes might favourable ... e.g. if you need to insert a LOT of data ... insert the data first, and then add indexes.