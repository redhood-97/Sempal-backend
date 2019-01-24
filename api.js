var http = require('http');
 var express = require('express');

 var app = express();

 app.use(express['static']('sempal'));

 // random data generation 
 setInterval(function()
 { 
    console.log(rnumber = Math.floor((Math.random()*100)+1));
   
 }, 1000);

// rnumber is to be shipped

// define the different routes

 //route for a valid request
 app.get('/inputs', function(req, res) 
 {
  res.status(200).send(rnumber);
 }
 ); 

 // Request error handling !!!
 //route for any other invalid request
 app.get('*', function(req, res) 
 {
  res.status(404).send('Unrecognised API call. Try again !!!');
 }
);


//express route for handling errors
app.use(function(err, req, res, next) 
{
  if (req.xhr) 
  {
    res.status(500).send('Oops, Something went wrong !!!');
  } 
  else 
  {
    next(err);
  }
}
);

app.listen(3000);
console.log("App server is listening on port 3000");
