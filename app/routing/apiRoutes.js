var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {

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
        console.log ("total difference is " + totalDiff);
        console.log ("friend difference is " + mostComp.friendDiff);

        friendData.push(userData);
        res.json(mostComp);
    });

};
