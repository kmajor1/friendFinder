const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())




let PORT = process.env.PORT ||  3000 
console.log(process.env.PORT)

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)
app.listen(PORT,function(){
  console.log(`Listening on port ${PORT}`)
})




