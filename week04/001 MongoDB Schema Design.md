# 001 MongoDB Schema Design

Relational databases use the 3rd normal form. We can use this in Mongo, but we really should use an Application Driven Schema:

Mongo should mirror the data as it is used, produced, presented by your application.

Mongo Facts:

- supports rich documents (values, array, other documents)
- pre-join data since mongo does not support joins
- no constraints (no concept of foreign key) - embedding mostly replaces that need
- atomic operations
- no declared schema in Mongo ... which does not mean your application will have no schema

So, the most important factor in designing the application schema within MongoDB is: Matching the data access patterns of your application

