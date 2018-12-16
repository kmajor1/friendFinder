const express = require('express')
const path = require('path')
const server = express()
const htmlRoutes = require('./app/routing/htmlRoutes')



let PORT = process.env.PORT ||  3000 
console.log(process.env.PORT)

server.use(htmlRoutes.routeHome)
server.use(htmlRoutes.routeSurvey)

server.listen(PORT,function(){
  console.log(`Listening on port ${PORT}`)
})


