# 003 Living Without Constraints

Relational databases make it very easy to keep data consistent by making use of foreign key constraints.

With Mongo not having this feature, how can we 'guarantee' that level of consitency (i.e. if you are using a document's `_id` as the foreign key in another document)?

**Embedding Replaces Constraints**

Embedding helps here. By embedding the related data we solve this issue in a great degree ... of course, it does not help in terms of making sure we have no duplicate data ... on the other hand, we can always find embedded data ... i.e. use data-embedding to make sure we don't duplicate data.