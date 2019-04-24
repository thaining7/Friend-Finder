var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {

        var totalDifference = 0;
        var mostComp = {
            name: "",
            photo: "",
            friendDiff: 500
        };
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;
        var scoreInt = userScores.map(function(int) {
            return parseInt(int, 10);
        });

        userData = {
            "name": req.body.name,
            "photo": req.body.photo,
            "scores": scoreInt
        };

        for (var i = 0; i < friendData.length; i++) {

            for (var j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(scoreInt[j] - parseInt(friends[i].scores[j]));
            }
            if (totalDifference <= mostComp.friendDiff) {
                mostComp.name = friends[i].name;
                mostComp.photo = friends[i].photo;
                mostComp.friendDiff = totalDifference;
            }
            
        };
        console.log ("total difference is " + totalDifference);


        friendData.push(userData);
        res.json(mostComp);
    });

};
