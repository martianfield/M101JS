# 010 Trees

Example: store categories

- Home
- Outdoors
    - winter
    - snow

```
products
{ 
category: 7,
name: 'Thingy',
...
} 

category
{
_id: 7,
category_name: "outdoors",
...
}
```

In a relational database we'd most likely have every category have a foreign key to its parent category.

In Mongo that would force us to iteratively query to get all parents of a category.

One way of doing it is to have each category list its ancestors in the order they appear inside the tree (bottom to top):

```
category {
    _id: 147,
    category_name: "outdoors",
    parents: [111, 56, 1]
```

As always: how you actually schema your data should mainly depend on the way you present and query your data in your application.

Here a query example: Given we have the following category

```
{
    _id: 34,
    name: 'snorkeling',
    parent_id: 12,
    ancestors: [12, 35, 90]
}
```

how do we find all DESCENDANTS of the 'snorkeling' category?

```
db.categories.find({ancestors:})
```


