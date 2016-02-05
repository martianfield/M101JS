# 009 Dot Notation and Multikey

How to index keys that are part of an embedded document, and such keys that point at arrays.

E.g.: a students collection with each of them containing an array of embedded score documents:

```
// one students entry:
{
    "_id" : "fvghj5678bnm678",
    "student_id": 0,
    "scores": [
        {
            "type": "exam",
            "score": 70.9
        },
        {
            "type": "quiz",
            "score": 98.2
        },
        {
            "type": "homework",
            "score": 38.9
        },
        {
            "type": "homework",
            "score": 66
        },
        ]
    }
}
```

To create an index for the `score` key of the embedded score documents, you'd use the dot-notation:

```
db.students.createIndex({'scores.score':1})
```

With this, we could - for instance - accelerate looking for scores greater than 99:

```
db.students.explain().find({'scores.score':{'$gt':99}})
```

Note: this would return all `students` records that contain at least one score in the scores that is greater than 99 ... i.e. this does not only return the 'scores', nor does it return more than one record per student that has more than one score above 99.

Now, how about finding people that have a score above 99 at exams?

The following query would NOT return the correct result, it would simply return all students that have at least one score above 99 and at least one score of type 'exam'

```
db.students.find({'scores.score':{'$gt':99}, 'scores.type':'exam'})
```

The correct query uses the `$elemMatch` operator on the `scores` key ... make sure you grock this: we `$elemMatch` on the `scores` key of the students collection. This operator checks if one element (i.e. document) matches all the filters:

```
db.students.find(
    {
        'scores': { $elemMatch:{
                type:'exam',
                score:{$gt:99}
            }
        }
    }
)
```

Watch out: make sure you do NOT use the dot-operator in the `$elemMatch` ... we are already targetting the `scores` field of the students collection ... so there is no need to address that namespace again!

Running this query with the `explain()` chained in will show that Mongo first uses the `scores.score` index and then uses the result of that to further filter on the score `type`.

I.e. Mongo uses the indexes it has and then uses that result further (i.e. inspects EVERY document that fulfills the indexable filter).

