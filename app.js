const express = require('express')
const app = express()
const{router} = require('./routes/index')
const cors = require ('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1',router)
app.use('/',(req, res)=>{
    res.status(400).json({
        message: 'bad request'
    })
})
exports.app = app