var express = require("express")
, path = require("path")
, port = 8000
, app = angular.module('app', [])
, app = express();

app.use(express.static(path.join(__dirname+'./client')));

app.listen(port, function(){
  console.log(`Server listening on port ${port}`);
})
