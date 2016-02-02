# 005 One-to-One Relationship

One-to-one relationships can be done be either

- having a field that contains a 'foreign key', i.e. a field that contains the value of the `_id` field of the referenced document
- embed one of the documents in the other

Base your decision on 

- frequency of access
    - if one of the documents is hardly ever need, it is most likely better to keep it as a seperate document and keep a 'reference' to its `_id` in the more frequently accessed document
    - if both pieces of information are very frequently needed at the same time, embedding is probably the better choice
- size of items / updating frequency
    - if the combined sized of the documents (embedee and embeded) is larger than the 16MB cap you simply cannot embed it
    - generally if you want to reduce the working set size: do not embed
    - you most likely don't want to embed documents that change or grow frequently, lest you produce overhead by constantly addressing the document that embeds the document
    - on the other hand, documents that hardly ever change are good canditates for embedding
- independency: documents that should be able to exist without the other should not be embedded
- atomacity of data: if you absolutely cannot tolerate any inconsitency, you will want to embed one of the documents into the other