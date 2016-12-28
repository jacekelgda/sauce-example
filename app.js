var express = require('express')
const bodyParser = require('body-parser')
var app = express()
const router = new express.Router()

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.post('/solutions', function (req, res) {
    console.log(req);
})
module.exports = router
app.use('/api', router);

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'))
})
