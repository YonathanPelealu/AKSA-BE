# AKSA-BE
- Installation

clone repository from https://github.com/YonathanPelealu/AKSA-BE.git

install depedency using npm install command

- Setup project

- Deployment or how we can run your code

base_url = https://aksa-be.herokuapp.com/

routes : /api/v1/books
Get List of Books
- Description => get all books inside database with their author
- Features
- In the first place users just can see 20 books, but they can change the page and
get the next result.
- Also they can change the total shown book per page
- Sorting and ordering by release year or the other field it’s easier for them to get
their favorite book.
- Searching by their favorite author or year it’s essential for having a good
experience in our system

request body :
    Show : how many books user want to see on each page (integer value)
    Page : page of must be integer value
    SortBy : Title or ReleaseYear
    OrderBy : ASC or DESC

sample success response :
```
{
    "status": "success",
    "total_data": 6,
    "total_pages": 3,
    "books": [
        {
            "id": "bbc9dcec-6fee-4370-b5c2-d57d658666bc",
            "authorId": "b1d36663-3cff-4014-a105-81571cfb8dac",
            "Title": " Habis Sudah Kemana?",
            "ReleaseYear": "1912-01-01T00:00:00.000Z",
            "Description": "lorem ipsum",
            "createdAt": "2021-03-25T20:01:16.840Z",
            "updatedAt": "2021-03-25T20:01:16.840Z",
            "author": {
                "Name": "Andi",
                "Age": 30,
                "Description": "lorem ipsum"
            }
        }
    ]
}
```
URI => /api/v1/books/search?keyword=
- Request
- Query
- Keyword => keyword that user search on book endpoint

- Response
- Success
```
    {
    "status": "success",
    "total_data": 4,
    "total_pages": 1,
    "books": [
        {
            "id": "e6edc1ef-351b-4b2e-a77f-63c776697156",
            "Title": "HMMN?",
            "ReleaseYear": "2025-01-01T00:00:00.000Z",
            "Description": "lorem ipsum",
            "author": {
                "Name": "Andi",
                "Age": 30,
                "Description": "lorem ipsum"
            }
        }
    ]
}
```
Get Author Books
- URI => /api/v1/authors/{authorID}/books
- Description => get all book written by the author
- Features
- In the first place users just can see 20 books, but they can change the page and
get the next result.
- Also they can change the total shown book per page
- Sorting and ordering by release year or the other field it’s easier for them to get
their favorite book.
- Searching by their favorite author or year it’s essential for having a good
experience in our system

Request
- Params
- authorId => the ID of our favorite author
- Show => total books that will show in the page
- Page => total page are available
- SortBy => sorting books by their field
- OrderBy => ordering book by ASC or DESC

- Response
- Success
```
    {
    "status": "success",
    "total_data": 3,
    "total_pages": 2,
    "books": [
        {
            "id": "41a704f2-ec77-4b8a-a693-90b3a1d4953a",
            "Title": "sang senja",
            "ReleaseYear": "1998-01-01T00:00:00.000Z",
            "Description": "lorem ipsum",
            "author": {
                "Name": "Yonathan",
                "Age": 25,
                "Description": "lorem ipsum"
            }
        },
        {
            "id": "8f0625c4-14a7-423c-99d1-8aeadf540ca6",
            "Title": "jangan diam",
            "ReleaseYear": "1999-01-01T00:00:00.000Z",
            "Description": "lorem ipsum",
            "author": {
                "Name": "Yonathan",
                "Age": 25,
                "Description": "lorem ipsum"
            }
        }
    ]
}
```

URI => /api/v1/authors/search?keyword=
- Request
- Query
- Keyword => keyword that user search on author endpoint

- Response
- Success
```
    {
    "status": "success",
    "total_data": 1,
    "Total_author": 1,
    "total_pages": 1,
    "Author": [
        {
            "id": "27a9671d-5e39-4a32-a657-e3501803db2a",
            "Name": "Yonathan",
            "Age": 25,
            "Description": "lorem ipsum",
            "Books": [
                {
                    "Title": "minuman dingin",
                    "ReleaseYear": "2012-01-01T00:00:00.000Z",
                    "Description": "lorem ipsum"
                },
                {
                    "Title": "sang senja",
                    "ReleaseYear": "1998-01-01T00:00:00.000Z",
                    "Description": "lorem ipsum"
                },
                {
                    "Title": "jangan diam",
                    "ReleaseYear": "1999-01-01T00:00:00.000Z",
                    "Description": "lorem ipsum"
                }
            ]
        }
    ]
}
```