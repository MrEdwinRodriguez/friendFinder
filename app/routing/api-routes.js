
var friends = require ('../data/friends.js');

module.exports = function(app){

//api get request
app.get('/api/friends', function(req, res){

	res.json(friends);
});



//api post request
	app.post('/api/friends', function(req, res){

		console.log(req.body);

		for( i = 0; i<friends.scores.length; i++){

			


		}


	});


}