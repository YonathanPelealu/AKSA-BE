const router = require('express').Router()
const BookRoutes = require ('./books')
const AuthorRoutes = require ('./authors')

router.use('/books',BookRoutes)
router.use('/authors',AuthorRoutes)

exports.router = router