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

// driver.get('http://saucelabs.com/test/guinea-pig');
driver.get('http://x-team.com');

driver.getTitle().then(function (title) {
    console.log("title is: " + title);
});

driver.quit();

someFunction = () => {
    console.log('someFunction');
}

module.exports = {
    someFunction
}
