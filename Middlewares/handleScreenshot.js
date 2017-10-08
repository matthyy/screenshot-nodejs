var webshot = require('webshot');
var options = require('./../Model/screenshotOptions.js');

module.exports.handle = function(body, res) {
	var json = JSON.parse(body);
  	var optionsRes = new options(json);
  	var renderStream = webshot(decodeURIComponent(json.url), optionsRes);
  	renderStream.on('data', function(data) {
	    res.statusCode = 200;
        res.end(data.toString('base64'));
  });
}