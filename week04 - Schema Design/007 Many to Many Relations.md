# 007 Many to Many Relations

## E.g.: books and authors.

In reality many-to-many most often are really few-to-few relations.

Hence, in many cases 'embedding' the many's `_id` as an array, is the one way to go:

```
books {
    _id: 12,
    Title: 'We are the Who',
    authors: [ 15 ]
}

authors {
    _id: 15,
    name: 'Billy Bolly',
    books: [12, 14, 55]
}
```

This way we have items linked in both directions ... which may lead to inconsistency.


The other option is to simply embed documents. You might end up with duplicate data that way.


## E.g.: teachers and students

```
Student
- _id: 14
- name: "Billy Willy"
- teachers: [12, 14, 16]

teachers
- _id: 16
- name: "Tom Go"
- students: [53, 14, 54, 34]
```

Embedding in this example is probably not a good idea. Remember: we hardly ever want items that need to be able to stand on their own to be embedded ... in this example both teachers and students can exist without having a relationship to the other