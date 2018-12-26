// bring in the user data 
let friends = require('../data/friends')
module.exports = function(app) {
  app.get('/api/friends',function(req,res){
    res.send(friends)
    res.end()
  })
  
  app.post('/api/friends', function(req,res){
    console.log('New Post Req')
    let largestDiff = 500 // this is set to the max possible difference between two friends
    let submittedSurveyData = req.body
    var newUserScore = 0
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
      var currentBuddyScore = 0
      for (var j = 0; j < friendToCompare.length; j++) {
        
        currentBuddyScore += friendToCompare[j]
      }
      // calculate the difference between the scores
      console.log(`current friend in loop has score of ${currentBuddyScore}`)
      console.log(`the score of the survey is: ${newUserScore}`)
      let scoreDiff = Math.abs(currentBuddyScore - newUserScore)
      console.log(`the diff in scores is ${scoreDiff}`)
      // is the current difference less than or equal to the default or last difference? 
      console.log(`smallest diff is: ${largestDiff}`)
      if (scoreDiff <= largestDiff) {
        // record this as the current best friend 
        var currentBestFriend = {
          userName: friends[i].userName,
          photo: friends[i].photo
        }
        largestDiff = scoreDiff
      }

    }
    // respond with the current best friend when done the loop 
    res.json(currentBestFriend)
    res.end()
    //test 
  })
}


