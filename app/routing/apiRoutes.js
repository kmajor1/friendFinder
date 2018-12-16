const express = require('express')
const apiRoutes = express()

apiRoutes.get('/api/friends',function(req,res){
  res.send('Test')
  res.end()
})

apiRoutes.post('/api/friends', function(req,res){
  let friendSurvey = req.body
})

module.exports = {
  apiRoutes: apiRoutes
}