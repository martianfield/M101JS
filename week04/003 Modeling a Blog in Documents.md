# 003 Modeling a Blog in Documents

- Posts
    + _id
    + title
    + author
    + content
    + comments[] ... an array of embedded documents
        * one comment
            - author
            - content
            - title
        * another comment
        * ...
    + tags[]
        * one
        * another
        * third
    
Quite clearly, this very much represents the data as it is used by the application.