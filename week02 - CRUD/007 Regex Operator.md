007 Regex Operator

The `$regex` operator allows us to use Regular Expressions to filter documents by matching string fields against them.

Here an example that returns all employees whose name contains 'te':

```javascript
db.employees.find({name:{$regex:/ete/gi}})
```

Here another example that returns all books whose title starts with 'The ':

```javascript
db.books.find({title:{$regex:/^The\s.*/}})
```