var express = require('express');
var app = express();


// home route
app.get('/', function(req, res){
	res.sendFile(__dirname+'/views/index.html');
});

// about route
app.get('/about', function(req, res){
	res.sendFile(__dirname+'/views/about.html');
});

// blog route
app.get('/blog', function(req, res){
	res.sendFile(__dirname+'/views/blog-directory.html');
});


// set up listening port
app.listen(8000, function(){
	console.log('listening to the smooth sounds fo port 8000');
});