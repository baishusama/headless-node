var express = require('express')
var superagent = require('superagent')
var cheerio = require('cheerio')

var app = express()

app.get('/', function(req, res, next){
    /*console.log("req : ", req)
    console.log("res : ", res)
    console.log("next : ", next)*/

    superagent.get('https://cnodejs.org/')
        .end(function(err, sres){
            if(err) {
                return next(err)
            }

            // console.log(sres)
            // console.log(sres.text)

            var $ = cheerio.load(sres.text)
            var items = ['hello', 'baka']

            res.send(items)
        })
})

// process.env.PORT for deploy to heroku.com
app.listen(2333, function(){
    console.log('app is running at port 2333');
})

// package.json
// "start": "babel-node index.js --presets es2015,stage-2"
