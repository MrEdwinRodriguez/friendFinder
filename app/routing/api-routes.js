
var friends = require ('../data/friends.js');

module.exports = function(app){

//api get request
app.get('/api/friends', function(req, res){

	res.json(friends);

});



//api post request
	app.post('/api/friends', function(req, res){

		// console.log(req.body.answers);
	
		// push new player to friends
		// friends.push(req.body);

		var differenceArray = [];
		var totalDifference;

		for( i = 0; i<friends.length; i++){

				// console.log(friends[i].scores)
				// console.log(friends[0].scores[0])
				var totalDifference = 0;
				for (r=0; r<10; r++){

					var difference = Math.abs(req.body.answers[r]-friends[i].scores[r]);
					totalDifference += difference;


				}

				differenceArray.push(totalDifference);

		}

		//the difference of each persons scores
		console.log(differenceArray)

		//picks the lowest number in the array
		var match = Math.min.apply( Math, differenceArray );

		//selects the index of the lowest number in the array
		var bestIndex = differenceArray.indexOf(match);

		console.log(match)
		console.log(bestIndex);
		console.log(friends[bestIndex]);


		res.send(friends[bestIndex]);
	});


}