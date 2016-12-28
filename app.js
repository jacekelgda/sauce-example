var express = require('express')
var app = express()
const router = new express.Router()

app.set('port', (process.env.PORT || 5000));

router.post('/solutions', function (req, res) {
    console.log(req.body);
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'))
})
