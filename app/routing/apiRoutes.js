// bring in the user data 
let friends = require('../data/friends')
module.exports = function(app) {
  app.get('/api/friends',function(req,res){
    res.send('Test')
    res.end()
  })
  
  app.post('/api/friends', function(req,res){
    let smallestDiff = 50 // this is set to the max possible difference between two friends
    let submittedSurveyData = req.body
    let newUserScore = 0 
    // determine the overall score 
    for (var i = 0; i < submittedSurveyData.scores.length; i++) {
      // calculate the score 
      newUserScore += parseInt(submittedSurveyData.scores[i])
    }
    // now that we have new user score, calculate scores for existing data 
    for (var i = 0; i < friends.length; i++) {
      // check the score value 
      // loop through and add the scores 
      let friendToCompare = friends[i].scores
      console.log(friendToCompare)
      var currentBuddyScore = 0
      for (var j = 0; j < friendToCompare.length; j++) {
        
        currentBuddyScore += friendToCompare[j]
      }
      // calculate the difference between the scores
      let scoreDiff = Math.abs(currentBuddyScore - newUserScore)
      console.log(currentBuddyScore)
      console.log(newUserScore)
      // is the current difference less than or equal to the default or last difference? 
      if (scoreDiff <= smallestDiff) {
        // record this as the current best friend 
        var currentBestFriend = {
          userName: friends[i].userName,
          photo: friends[i].photo
        }
      }

    }
    // respond with the current best friend when done the loop 
    res.json(currentBestFriend)
  })
}


