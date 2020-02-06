# Friend Finder

#### Heroku App: https://trevsfriendfinder.herokuapp.com/

## Description

#### Friend Finder is a full stack application that finds your most compatible match based on a series of survey questions. It uses Node.js and Express.js on the backend and JavaScript logic to compare your results and find your best match.

## Screenshot

![Survey Screenshot](/app/public/assets/Screenshot.png)

## Tech Used

* JavaScript
* jQuery
* Bootstrap CSS
* Node.js
* Express.js

## Code Example

#### Logic for calculating the most compatible match based on survey scores:

```
...
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
            
        };

        // push user inputed data to friends array
        friendData.push(userData);
        // send match response
        res.json(bestMatch);
    });

};
```

## Operating Instructions

* Visit the home page, enter your name, and a link to your photo (can be a placeholder if you don't have a link)
* Answer the survey questions and click submit 
* The app will then calculate your best match out of a database of friends
