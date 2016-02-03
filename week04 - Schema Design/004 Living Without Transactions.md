# 004 Living Without Transactions

Mongo has no transactions.

Instead it has atomic operations - that is: when working on a document, ALL work on it will be completed before anybody else sees ANY changes on it.

In a relational database, if you want to make a change that spans across multiple tables, you use a transaction to wrap all needed operations. Transactions are said to be ACID (Atomicity, Consistency, Isolation, Durability).

In Mongo, we embed and prejoin data in rich documents that have hierarchy - giving us the ability to often the same effect that you get with transactions.

There are three approaches to overcome the lack of transactions in Mongo. Chose one or a combination of depending on the situation:

## 1. Restructure

Restructure code so that we work with a single document to take advantage of the atomic operation.

## 2. Implement Locking in Software

There are a gazillion ways of doing this.

## 3. Tolerate a bit of Inconsistency

Sometimes it does not matter all that much really ... it often is not critical that everybody gets the same view of the database at the same time.
