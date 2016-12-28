var express = require('express')
const bodyParser = require('body-parser')
var app = express()
const router = new express.Router()

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.post('/solutions', function (req, res) {
    var webdriver = require('selenium-webdriver'),
        username = process.env.SAUCE_USERNAME,
        accessKey = process.env.SAUCE_ACCESS_KEY,
        driver;

    driver = new webdriver.Builder().
      withCapabilities({
        'browserName': 'chrome',
        'platform': 'Windows XP',
        'version': '43.0',
        'username': username,
        'accessKey': accessKey
      }).
      usingServer("http://" + username + ":" + accessKey +
                  "@ondemand.saucelabs.com:80/wd/hub").
      build();
    driver.get(req.body);

    driver.getTitle().then(function (title) {
        console.log("title is: " + title);
    });

    driver.quit();
})
module.exports = router
app.use('/api', router);

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'))
})
