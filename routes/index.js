const router = require('express').Router()
const {getBooks} = require ('../controller/book')
router.get('/api/v1/books/:params',getBooks)
exports.router = router