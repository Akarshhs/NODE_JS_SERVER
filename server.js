var express = require('express')
var _ = require('lodash')
var app = express()

//Define request response in root URL (/)
app.get('/akarsh', function (req, res) {
    res.send('Hello World')
})

//Launch listening server on port 8080
app.listen(8000, function () {
    console.log('App listening on port 8000!')
})
