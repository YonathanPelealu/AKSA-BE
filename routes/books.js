const router = require('express').Router()
const {getAll,addBook,searchBook,getAuothorBook,getAllAuthor} = require ('../controller/book')

router.post('/',getAll)
router.post('/add',addBook)
router.get('/search',searchBook)

module.exports = router