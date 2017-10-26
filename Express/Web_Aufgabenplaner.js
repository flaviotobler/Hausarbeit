var express = require('express');
var app = express();
var tasks = new Array ();
var index = 1;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.sendFile( __dirname + "/" + "Aufgabenverwaltung.html" );
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

app.get('/add', function (req, res) {
	newTask = {id: index, name: req.query.isname, isOpen: "todo"};
	index = index + 1;
	tasks.push(newTask);
	console.log(newTask);
	console.log(tasks);
	res.sendFile( __dirname + "/" + "Aufgabenverwaltung.html" );
});

app.post('/close', function (req, res) {
	console.log(req.body.id);
	
	tasks.forEach(function(task){
		console.log(task.id);
		if(task.id == req.body.id)
		{
			
			task.isOpen = "done";
			console.log(tasks);
			
		}
	});
	res.sendFile( __dirname + "/" + "Aufgabenverwaltung.html" );
});

app.get('/selectionT', function (req, res) {
	var rueckgabe = new Array ();
	console.log("vorschleife");
	tasks.forEach(function(task){
		console.log(task.isOpen);
		if(task.isOpen == "todo")
		{
			console.log("gefunden");
			rueckgabe.push(task);
		}
	});
	res.send(JSON.stringify(rueckgabe));
});

app.get('/selectionD', function (req, res) {
	var rueckgabe = new Array ();
	console.log("vorschleife");
	tasks.forEach(function(task){
		console.log(task.isOpen);
		if(task.isOpen == "done")
		{
			console.log("gefunden");
			rueckgabe.push(task);
		}
	});
	res.send(JSON.stringify(rueckgabe));
});


