const callWebDriver = (url) => {
  console.log('Init web driver process');
  var webdriver = require('selenium-webdriver'),
      username = 'jaceklawniczak',
      accessKey = 'd4eb2724-9b96-42f7-b0fb-110a143faf3f',
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
    driver.get('http://google.com');

    driver.getTitle().then(function (title) {
        console.log("title is: " + title);
    });

  driver.quit();
}

module.exports = {
  callWebDriver,
}
