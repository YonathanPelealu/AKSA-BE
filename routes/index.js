const router = require('express').Router()
const {getAll,addBook,searchBook} = require ('../controller/book')
const {addAuthor,getAllAuthor} = require ('../controller/author')
router.post('/api/v1/books/',getAll)
router.post('/api/v1/books/add',addBook)
router.get('/api/v1/books/search',searchBook)
router.post('/api/v1/author/add',addAuthor)
router.get('/api/v1/author/all',getAllAuthor)
exports.router = router