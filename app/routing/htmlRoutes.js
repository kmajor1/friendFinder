const express = require('express')
const htmlRoutes = express()
const path = require('path')



 let routeHome = htmlRoutes.get('/',function(req,res){
  res.sendFile(path.resolve(__dirname + '/../public/home.html'))
})

let routeSurvey = htmlRoutes.get('/survey', function(req,res){
  res.sendFile(path.resolve(__dirname + '/../public/survey.html'))
})

module.exports = {
  routeHome: routeHome,
  routeSurvey: routeSurvey
}

console.log(__dirname)

