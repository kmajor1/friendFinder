const path = require('path')
module.exports = function(app){
  app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname + '/../public/home.html'))
  })
  
  app.get('/survey', function(req,res){
    res.sendFile(path.resolve(__dirname + '/../public/survey.html'))
  })
  
}


 



