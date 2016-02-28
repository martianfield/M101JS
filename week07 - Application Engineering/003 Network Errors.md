# 003 Network Errors

* [YouTube](https://www.youtube.com/watch?v=xWNzCkTCN-M)

## The Problem

If you look at Write Concern and `j` and `w` you might think that your data is quite safe.

If you get a response, you know stuff happened.

However, if you do not get a response, you do not know if things worked. That is, if you do not get a response or get an error, the update / insert still might have happened but a network error may have prevented the response to arrive on your side.

## Inserts

For inserts its possible to guard against this. To do so, create the `_id` on the client side using the driver. Thus, if you insert the same document twice, you will not create duplicate data ... in the worst case you get a duplicate key error for the `_id` you used

## Updates

If you get a network error when doing an updated, you have no idea if the update happened or not.

**If you want to be absolutely sure, you need to turn all your updates into inserts.**


## Do Such Things Happen Often

They are very rare.

## Reasons why an application may receive an error back even if the write was succesful

* The network TCP connection between the application and the server was reset after the server received a write but before a response could be sent.
* The MongoDB server terminates between receiving the write and responding to it.
* The network fails between the time of the write and the time the client receives a response to the write.
