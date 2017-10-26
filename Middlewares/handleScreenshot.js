const webshot = require('webshot');
const Options = require('./../Model/screenshotOptions.js');

module.exports.handle = (body, res) => {
  const json = JSON.parse(body);
  const optionsRes = new Options(json);
  const renderStream = webshot(decodeURIComponent(json.url), optionsRes);
  renderStream.on('data', (data) => {
  	res.statusCode = 200;
  	res.end(data.toString('base64'));
  });
};
