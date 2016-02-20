# 003 MMAPv1 Storage Engine

* [YouTube](https://www.youtube.com/watch?v=os3591KviNM)

Up and including Mongo 3.1 MMAP was the default storage engine.

There are man-pages for MMAP:

```terminal
man mmap
```

MMAP builds on top of the  mmap system call that maps files into memory:

- Mongo puts documetns into files.
- Initially a large files is allocated on disc (e.g. 100 GB).
- MMAP maps that large file with the same size of virtual memory (paged).
- when data you request is in that virtual memory, MMAP returns the data from there
- when the data is only on disc, MMAP gets it from there, puts it into virtual memory, and returns it from there


MMAP offers

- collection level concurrency (or locking) ... each collection is its own file. There is a multiple reader, single reader lock on collections
- allows in place updates
- power of two sizes ... trying to create any bit of data allocates the full power of two memory amount  to make in place updates (an possible resizing) possible. E.g. 3 -> 4, 9 -> 16, 19 -> 32


