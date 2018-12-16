const express = require('express')
const path = require('path')
const server = express()
const htmlRoutes = require('./app/routing/htmlRoutes')



let PORT = 3000

server.use(htmlRoutes)

server.listen(PORT,function(){
  console.log(`Listening on port ${PORT}`)
})


