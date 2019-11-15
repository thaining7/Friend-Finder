# Friend Finder

#### Heroku App: https://trevsfriendfinder.herokuapp.com/

# Description

#### Friend Finder is a full stack application that finds your most compatible match based on a series of survey questions. It uses Node.js and Express.js on the backend and JavaScript logic to compare your results and find your best match.

# Screenshot

![Survey Screenshot](/app/public/assets/Screenshot.png)

# Tech Used

* JavaScript
* jQuery
* Bootstrap CSS
* Node.js
* Express.js

# Code Example

#### Logic for calculating the most compatible match based on survey scores:

```
...
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {

        // define a variable to store the difference in scores between friends
        var totalDiff = 0;
        // define an object to store the calculated most compatible match
        var mostComp = {
            name: "",
            photo: "",
            // arbitrary starting value 
            friendDiff: 50
        };

        var userData = req.body;
        var userScores = userData.scores;

        // loop through friendData array
        for (var i = 0; i < friendData.length; i++) {

            // define totalDiff as 0 at the start of each loop
            totalDiff = 0;

            // loop through the scores of each friend object
            for (var j = 0; j < friendData[i].scores[j]; j++) {
                // assign calculated difference to totalDiff
                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));
                
            }
            // loop through calculated difference until the lowest difference is reached
            if (totalDiff < mostComp.friendDiff) {
                mostComp.name = friendData[i].name;
                mostComp.photo = friendData[i].photo;
                mostComp.friendDiff = totalDiff;
            }
            console.log ("friend difference is " + mostComp.friendDiff);
            
        };

        // push user inputed data to friends array
        friendData.push(userData);
        // send match response
        res.json(mostComp);
    });

};
```

### Operating Instructions

* Visit the home page, enter your name, a link to your photo
* Answer the survey questions and click submit 
* The app will then calculate your best match out of a database of friends
