 

 var http = require('http');
 var express = require('express');

 var app = express();


 app.use('/',express.static(_dirname));

 var inputs = [    { pin: '11', gpio: '17', value: 1 },
                  { pin: '12', gpio: '18', value: 0 }
];

 //route for a valid request
 app.get('/inputs/:id', function(req, res) {
  res.status(200).send(inputs[req.params.id]);
}); 

 //route for any other invalid request
 app.get('*', function(req, res) {
  res.status(404).send('Unrecognised API call');
});

//express route for handling errors
app.use(function(err, req, res, next) 
{
  if (req.xhr) 
  {
    res.status(500).send('Oops, Something went wrong!');
  } 
  else 
  {
    next(err);
  }
}
);

app.listen(3000);
console.log("App server is listening on port 3000");
