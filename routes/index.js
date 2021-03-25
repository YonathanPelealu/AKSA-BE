const router = require('express').Router()
const {getAll} = require ('../controller/book')
router.get('/api/v1/books/:params',getAll)
exports.router = router