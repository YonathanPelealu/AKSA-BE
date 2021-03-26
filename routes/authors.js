const router = require('express').Router()
const {addAuthor} = require ('../controller/author')
const {getAuothorBook,getAllAuthor} = require ('../controller/book')

router.get('/search',getAllAuthor)
router.post('/add',addAuthor)
router.post('/:authorId/books',getAuothorBook)

module.exports = router