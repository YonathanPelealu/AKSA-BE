require ('dotenv').config()
const {app} = require ('./app')
const PORT = Number(process.env.PORT)

app.listen(PORT,console.log(` app running on port ${PORT}`))