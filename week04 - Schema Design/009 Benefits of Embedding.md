# 009 Benefits of Embedding

The main benefit we get from embedding is performance, read performance in particular.

This is because 

* getting to the first byte of the data requested is the part of data retrieval that takes more time. Hence, if the system only has to find one beginning (i.e. only one chunk of data) things will be faster.
* higher bandwith ... i.e. data can be retrieved in one go
* less round-trips ... i.e. we can get all data we need with one request

The writes may slow down if you embed that needs to be changed often or grows frequently ... because you will create a lot of overhead since you basically update everything that is embedding or embedded with the data you update.
