# 008 Multikeys

## Multikey Indexes

Example:

```
students
{
    _id: 0,
    name: 'Andrew',
    teachers: '[1, 7, 10, 23]'
}

teachers {
    _id: 10,
    name: 'Tony Stark'
}
```

- how do I get all the students of a teacher?
- how do I get all the teachers of a student?


### Getting all Teachers of a Student

Simply get the the teachers' ids and get the corresponding teachers.


### Getting all Students of a Teacher

To efficiently do this we need a multikey index.

Let assume we have two collections: `students` and `teachers`.

To add an index to the `student` collection's teachers array, we do this:

```
db.students.ensureIndex({'teachers': 1})
```

This way the `students` collection will have two indexes (one for the `_id` and for the `teachers` field)

Now we can do a query that uses those indexes find all students that have the teachers with the ids `0` and `1`.

```
db.students.find({'teachers':{$all:[0,1]}})
```

To tell IF indexes were use, append the 'explain()' method:

```
db.students.find({'teachers':{$all:[0,1]}}).explain()
```


