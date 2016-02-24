# 000 Videos

* 001 [Introduction](https://www.youtube.com/watch?v=GGMfM3pYK_4)
* 002 [Pluggable Storage Engines](https://www.youtube.com/watch?v=YvK7I9fYpK4)
* 003 [MMAP Storage Engine](https://www.youtube.com/watch?v=os3591KviNM)
* 004 [WiredTiger Storage Engine](https://www.youtube.com/watch?v=aNsugW7r3mM)
* 005 [Indexes](https://www.youtube.com/watch?v=U3iWPF5jP-g)
* 006 [Creating Indexes](https://www.youtube.com/watch?v=xi2gtzZez6Q)
* 007 [Discovering and Deleting Indexes](https://www.youtube.com/watch?v=dX49IcmTrGA)
* 008 [Multikey Indexes](https://www.youtube.com/watch?v=_NGwn_X82Dw)
* 009 [Dot Notation and Multikeys](https://www.youtube.com/watch?v=wT0_ktAZbBg)
* 010 [Index Creation - Option Unique](https://www.youtube.com/watch?v=D-Ra5TEaaL4)
* 011 [Index Creation - Sparse Indexes](https://www.youtube.com/watch?v=ZznHByqtTMA)
* 012 [Index Creation - Background](https://www.youtube.com/watch?v=AchmKNj2qhw)
* 013 [Using Explain](https://www.youtube.com/watch?v=liXIn8CnJaI)
* 014 [Explain: Verbosity](https://www.youtube.com/watch?v=WxXVun6bZ20)
* 015 [Covered Queries](https://www.youtube.com/watch?v=QyV79jsSJ9Y)
* 016 [When is an Index Used?](https://www.youtube.com/watch?v=JyQlxDc549c)
* 017 [How Large is Your Index](https://www.youtube.com/watch?v=wjA0eo_lihg)
* 018 [Number of Index Entries](https://www.youtube.com/watch?v=xiujksUfzUA)
* 019 [Geospatial Indexes](https://www.youtube.com/watch?v=UKUDYqNVL6I)
* 020 [Geospatial Spherical](https://www.youtube.com/watch?v=pULU4DVsUWQ)
* 021 [Text Indexes](https://www.youtube.com/watch?v=nLau5Fx9LC8)
* 022 [Efficiency of Index Use](https://www.youtube.com/watch?v=JJmIf0pn100)
* 023 [Efficiency of Index Use Example](https://www.youtube.com/watch?v=g032EW67SRA)
* 024 [Logging Slow Queries](https://www.youtube.com/watch?v=aWuvC-O7Qkk)
* 025 [Profiling](https://www.youtube.com/watch?v=pN1Yhrup9-I)
* 026 [Mongotop](https://www.youtube.com/watch?v=D9YLXgy7NYo)
* 027 [Mongostat](https://www.youtube.com/watch?v=E2aDTSes3Wc)
* 028 [Sharding Overview](https://www.youtube.com/watch?v=BDxT-VZdYqc)

Notes:

In Video 5 (Indexes) Andrew mentions that while reads are much faster with indexes, writes to a document will happen slower. This is true, but it's worth noting a caveat here: combination operations, such as update and deletion operations, where you find the document you want and then perform a write, will benefit from the index when you're performing the query stage, and then may be slowed by the index when you perform the write. Usually you're still better off having an index, but there are some special cases where this may not be true.

He mentions that indexes in mongodb are in btrees. This is true for MMAP (and therefore for MongoDB prior to 3.0), but it does depend on your storage engine. For example, when you are using WiredTiger, as of MongoDB 3.0, indexes are implemented in b+trees. Again, you can find details in Wikipedia (links provided here for your convenience).

In Video 19 (Geospatial Indexes): This lecture uses the now deprecated ensureIndex shell command. The preferred command is createIndex. Anywhere you see me using ensureIndex, imagine I used createIndex.

In Video 20 (Geospatial Spherical): This lecture uses the now deprecated ensureIndex shell command. The preferred command is createIndex. Anywhere you see me using ensureIndex, imagine I used createIndex.

In Video 21 (Text Indexes): At 0:36, Andrew says that when you search on strings with a standard index, the entire string must match. This isn't entirely true; a regex search will search the index (rather than the full collection), and if you anchor it on the left by beginning with ^, you can often do better still.

Video 23 (Efficiency of Index Use Example): At about 3:13, Shannon mentions that MongoDB can walk the index backward in order to sort on the final_grade field. While true given that we are sorting on only this field, if we want to sort on multiple fields, the direction of each field on which we want to sort in a query must be the same as the direction of each field specified in the index. So if we want to sort using something like db.collection.find( { a: 75 } ).sort( { a: 1, b: -1 } ), we must specify the index using the same directions, e.g., db.collection.createIndex( { a: 1, b: -1 } ).

Video 24 (Logging Slow Queries): Some of this material was recorded with an older version of the database. However, the logfile format has not changed significantly so you should be able to get the gist.

Video 25 (Profiling): The exact output of the profiler varies with MongoDB version and with storage engine. We recommend you check the [docs](http://docs.mongodb.org/manual/reference/database-profiler/?_ga=1.176361957.1775304563.1450209975) for the specifics of what your query profile is telling you.



