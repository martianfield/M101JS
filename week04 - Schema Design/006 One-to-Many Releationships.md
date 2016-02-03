# 006 One-to-Many Releationships

## On to Many

Example: one town where many people live

At a hunch one might think that putting all people into an array in the town collection would be a solution. We'd quickly run into size issues though.

Another angle of attack: have a people collection of which each contains town information ... this will lead to duplicate data.

The best way to do it is using through-linking:

In the people collection we have a field that contains the key of the town's `_id`


## One to Few

What about having One-to-Few? If the number of related items are small, embedding an array of sub-documents is acceptable. E.g. comments in a blog post collection.


## Summary

Whenever the 'many' is large is best to use two (or more if there are many manys) collections, with the collection containing the 'many' through-linking to the 'one''s `_id`

Whenever the 'many' is small, embedding them as an array into the 'one' is probably the best way to go.