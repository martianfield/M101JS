# 001 Importing Data using `mongoimport`

We already used `mongorestore` from the command line (standard shell, NOT mongo shell) to restore mongo database dump.

And alternative way to get data into Mongo is `mongoimport` (again, in the standard shell, not the mongo shell)

The `mongoimport` command imports data from a given file. The file should contain of JSON objects (one per line). Each JSON object will be used to create a document in Mongo.

Unlike `mongorestore` where restore an entire database available to us as a binary dump, `mongoimport` imports data into any colleciton of any database. Hence, we need to tell the command where to put the import:

```shell
mongoimport -d <database> -c <collection> <filename.json>
```

It's quite obvious: `-d` is followed by the database name, `-c` is followed by the collection name, and the last argument is the name of the file to import.

Here an example where we import the contents of the file `workers.json` into a collection named `employees` of a database called `mycompany`:

```shell
mongoimport -d mycompany -c employees workers.json
```

