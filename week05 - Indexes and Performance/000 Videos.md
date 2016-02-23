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
* 020 [Geospatial Spherical]()
* 021 [Text Indexes]()
* 022 [Efficiency of Index Use]()
* 023 [Efficiency of Index Use Example]()
* 024 [Logging Slow Queries]()
* 025 [Profiling]()
* 026 [Mongotop]()
* 027 [Mongostat]()
* 028 [Sharding Overview]()

Notes:

In Video 5 (Indexes) Andrew mentions that while reads are much faster with indexes, writes to a document will happen slower. This is true, but it's worth noting a caveat here: combination operations, such as update and deletion operations, where you find the document you want and then perform a write, will benefit from the index when you're performing the query stage, and then may be slowed by the index when you perform the write. Usually you're still better off having an index, but there are some special cases where this may not be true.

He mentions that indexes in mongodb are in btrees. This is true for MMAP (and therefore for MongoDB prior to 3.0), but it does depend on your storage engine. For example, when you are using WiredTiger, as of MongoDB 3.0, indexes are implemented in b+trees. Again, you can find details in Wikipedia (links provided here for your convenience).

In Video 19 (Geospatial Indexes): This lecture uses the now deprecated ensureIndex shell command. The preferred command is createIndex. Anywhere you see me using ensureIndex, imagine I used createIndex.
