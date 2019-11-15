# Friend Finder

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
var totalDiff = 0;
var mostComp = {
            name: "",
            photo: "",
            friendDiff: 500
};        
var userData = req.body;
var userScores = userData.scores;
        
for (var i = 0; i < friendData.length; i++) {

            totalDiff = 0;

            for (var j = 0; j < friendData[i].scores[j]; j++) {
                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));
            }
            if (totalDiff <= mostComp.friendDiff) {
                mostComp.name = friendData[i].name;
                mostComp.photo = friendData[i].photo;
                mostComp.friendDiff = totalDiff;
            }
            
        };
```

### Operating Instructions

* Visit the home page, enter your name, a link to your photo
* Answer the survey questions and click submit 
* The app will then calculate your best match out of a database of friends
