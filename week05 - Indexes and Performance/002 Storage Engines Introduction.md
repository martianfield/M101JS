# 002 Storage Engines Introduction

* [YouTube](https://www.youtube.com/watch?v=YvK7I9fYpK4)

The storage engine sits between the MongoDB and the physical storage. It controls how data is acutally saved (the data file format, how indices are formatted). A storage engine might, for instance, decide to use RAM to improve read performance.

MongoDB ships with two storage engines:

- MMAP. This was the default up until Mongo 3.1
- WiredTiger. Acquired in 2014 this has become the default engine starting with Mongo 3.2


