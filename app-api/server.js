const express = require('express');
const path = require('path');
var fs = require("fs");
const cors = require('cors');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));
app.use(cors({
  origin: '*'
}));
app.get('/api/allapps', (req, res) => {
  console.log('api/allapps called!')
  fs.readFile( __dirname + "/" + "app.json", 'utf8', function (err, data) {
    // console.log( data );
    res.setHeader("Content-Type", "application/json");
    res.end( data )
});
})

app.get('/api/delapps', (req, res) => {
  console.log('api/delapps called!')
  fs.readFile( __dirname + "/" + "reassign.json", 'utf8', function (err, data) {
    // console.log( data );
    res.setHeader("Content-Type", "application/json");
    res.end( data )
});
})

app.get('/api/toplevelsummary', (req, res) => {
  console.log('api/toplevelsummary called!')
  fs.readFile( __dirname + "/" + "application_roadmap.json", 'utf8', function (err, data) {
    // console.log( data );
    res.setHeader("Content-Type", "application/json");
    res.end( data )
});
})

app.get('/api/time', (req, res) => {
  console.log('api/time called!')
  fs.readFile( __dirname + "/" + "timesummary.json", 'utf8', function (err, data) {
    // console.log( data );
    res.setHeader("Content-Type", "application/json");
    res.end( data )
});
})

app.get('/api/search', (req, res) => {
  console.log('api/search called!')
  const appName = req.query.name;
  console.log(appName);
  fs.readFile( __dirname + "/" + "app.json", 'utf8', function (err, data) {
    // console.log( data );
    res.setHeader("Content-Type", "application/json");
    const JSONAppdetails = JSON.parse(data);
    //cae-sensitive
    //const appDetails = JSONAppdetails.filter(obj => obj.name == appName)
    //case insensitve
    const appDetails = JSONAppdetails.filter(obj => obj.name.toLowerCase().indexOf(appName.toLowerCase()) >= 0) 
    const responseDetails = JSON.stringify(appDetails)
    res.end( responseDetails )
});
})

app.get('/api/eosl', (req, res) => {
  console.log('api/eosl called!')
  const appName = req.query.name;
  console.log(appName);
  if (appName.indexOf('red') >=0 ) {
    fs.readFile( __dirname + "/" + "EoSLRed.json", 'utf8', function (err, data) {
      // console.log( data );
      res.setHeader("Content-Type", "application/json");
      res.end( data )
  });
}
if (appName.indexOf('amber') >=0 ) {
  fs.readFile( __dirname + "/" + "EoSLOrange.json", 'utf8', function (err, data) {
    // console.log( data );
    res.setHeader("Content-Type", "application/json");
    res.end( data )
});
}

if (appName.indexOf('green') >=0 ) {
  fs.readFile( __dirname + "/" + "EoSLGreen.json", 'utf8', function (err, data) {
    // console.log( data );
    res.setHeader("Content-Type", "application/json");
    res.end( data )
});
}
});



var server = app.listen(port, () => {
  var host = server.address().address;
    console.log(`Server listening on the port::${port}, ${host}`);
});