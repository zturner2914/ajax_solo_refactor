var express = require('express');
var colors = require('../model/colors');

var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getColors', function(req, res){
    res.send(colors);
});


var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});
