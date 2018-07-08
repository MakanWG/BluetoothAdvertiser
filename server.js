var eddystoneBeacon = require('eddystone-beacon');
var bodyParser = require("body-parser");
var express = require('express');
var path = require('path');
var app = express();
app.use(bodyParser.text());
app.use(express.static(path.join(__dirname, 'site/views')));
var options = {
  name: 'Beacon',    // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};


app.get('/', function (req, res) {
  res.send('index.html');
});

app.post('/update-url', function(req, res){
  var requestData = (JSON.parse(req.body));
  console.log(requestData);
  setBeaconUrl(requestData);
})

var url = 'https://www.twitter.com/makanwg';


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

function setBeaconUrl(beaconUrl){
  eddystoneBeacon.advertiseUrl(beaconUrl, [options]);
}
