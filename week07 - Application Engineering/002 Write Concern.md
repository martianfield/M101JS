# 002 Write Concern

* [YouTube](https://www.youtube.com/watch?v=oRDYNWCYnGo)

How do we make sure that the writes we make actually persist?

* Your (JS) app talks to the server.
* the server has several parts
    - the CPU (running the mongod application)
    - memory
    - disk
* the database is mostly writing to memory
    - in WiredTiger there is a **cache of pages** ... theses pages are periodically written to and read from disk (depending on memory pressure)
    - there is also a **Journal** in memory ... a log of every write the database processes ... data is considered really persistent once the journal is written to disk ... this also does not happen immediately
* when we execute a write action, we wait for an answer from the database. When this answer arrives the journal has not necessarily been written to the disk
* the value that represents when we expect that answer to arrive is `w`. By default it is set to `w=1`
* the value that represent if the the journal was written to disk is `j`. By default it is set to `j=false`
* having `w=1` and `j=false` has the implication that 
    - when doing a write operation (update, insert, etc.) we are actually doing an operation in memory and not necessarilty to disk
    - This is - of course - pretty fast because the server will only periodically take the time to write the journal to disk
    - this also creates a window of vulnerability between the writes to disk ... i.e. if the server crashes all data 'written' to the database will be lost because the journal has not yet been persisted to disk
* whether you wait for the journal to write or not hugely depends on the applicaiton
    - you might have an application with a lot of traffic where the writing to the journal would not be able to keep up with the data stream if had to be written constantly
    - you might have an application where the data written is so important that it is absolutely paramount to have each write journaled immediately, justifying the resulting longer wait
* the `w` and the `j` value together are what we call **Write Concern**


## Write Concerns

Write Concerns are set in the driver at the level of of the collection, database, or client.

* `w=1`, `j=false`
	- **default**
	- wait for the write to be acknowledged by the database, but do not wait for the journal to be written to disk
	- fast
	- window of vulnerability
* `w=1`, `j=true`
	- wait for the write to be acknowledged by the database, and wait for the journal to be written to disk ... when the server crashes not all pages might be written to disk, but on recovery the server is able to look at the journal and fix the missing data
	- slower
	- no vulnerability       
* `w=0`
	- unacknowledged write (unack) ... NOT RECOMMENDED         

Note: The `w` value is in fact a bit more complex. If you have a replicated environment, it can take more values than just `0` and `1`


## Quiz

Provided you assume that the disk is persistent, what are the `w` and `j` settings required to guarantee that an insert or update has been written all the way to disk.

1. `w=0`, `j=0`
2. `w=1`, `j=1`
3. `w=2`, `j=0`
4. `w=1`, `j=0`

Correct answer: 2 (`w=1`, `j=1`)

