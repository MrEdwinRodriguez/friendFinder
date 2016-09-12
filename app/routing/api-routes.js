
var friends = require ('../data/friends.js');

module.exports = function(app){


app.get('/api/friends', function(req, res){

	res.json(friends);
});

	app.post('/api/friends', function(req, res){

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table
		if(friends.length < 5 ){
			friends.push(req.body);
			res.json(true); // KEY LINE
		}

		// Or false if they don't have a table
		// else{
		// 	waitListData.push(req.body);
		// 	res.json(false); // KEY LINE
		// }

	});


}