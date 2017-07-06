// //import the http module
// let http = require('http');
// //handle sending requests and returning responses
// function handleRequests(req, res) {
//
// //return string
// res.end('HelloWorld!');
// }
// //create the server
// let server = http.createServer(handleRequests);
// // start server and listen on port
// server.listen(8080, function(){
//   console.log('Listening on port 8080');
// })


/////////EXPRESS //////////////


let express = require('express');
let app = express();
let port = 8080;

// start the server
app.listen(port, function() {
  console.log('app started');
});

app.get('/', function(req, res) {
  res.send('hello world!');
})
