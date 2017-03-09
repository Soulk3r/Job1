var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
	if(req.query.a){
		console.log('a: ' + req.query.a);
		var a = parseInt(req.query.a);
		if(a == NaN || undefined)
			a = 0;
	}else{
		a = 0;
	}
	if(req.query.b){
		console.log('b: ' + req.query.b);
		var b = parseInt(req.query.b);
		if(b == NaN || undefined)
			b = 0;
	}else{
		b = 0;
	}
	//console.log(a, b);
	var sum = a + b;
	sum = sum + '';
	console.log(sum);
  	res.send(sum);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});