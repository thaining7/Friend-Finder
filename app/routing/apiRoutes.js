var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {

        // define a variable to store the difference in scores between friends
        var scoreDiff = 0;
        // define an object to store the calculated most compatible match
        var bestMatch = {
            name: "",
            photo: "",
            // arbitrary starting value 
            matchDiff: 50
        };

        var userData = req.body;
        var userScores = userData.scores;

        // loop through friendData array
        for (var i = 0; i < friendData.length; i++) {

            // define scoreDiff as 0 at the start of each loop
            scoreDiff = 0;

            // loop through the scores of each friend object
            for (var j = 0; j < friendData[i].scores[j]; j++) {
                // assign calculated difference to scoreDiff
                scoreDiff += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));
                
            }
            // loop through calculated difference until the lowest difference is reached
            if (scoreDiff < bestMatch.matchDiff) {
                bestMatch.name = friendData[i].name;
                bestMatch.photo = friendData[i].photo;
                bestMatch.matchDiff = scoreDiff;
            }
            // console.log ("friend difference is " + bestMatch.matchDiff);
            
        };

        // push user inputed data to friends array
        friendData.push(userData);
        // send match response
        res.json(bestMatch);
    });

};
