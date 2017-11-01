var express = require('express');
var app = express();

app.set('port', process.env.PORT||8080);
app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));
app.use('/img', express.static('public/img'));
app.get('*',function(req,res){
	res.sendFile(__dirname+'/public/index.html')
})


var server = app.listen(app.get('port'), function(){
	console.log("app started");
});