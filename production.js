// production.js
var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 5000,
  env: 'production',
  db: {
    host: 'ds051833.mongolab.com',
    port: 51833,
    name: 'heroku_fkl9kkw5',
    credentials: {
      username: 'heroku_fkl9kkw5',
      password: '652r7daqb3nmvcknqj7d3ln6ji'
    }
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});