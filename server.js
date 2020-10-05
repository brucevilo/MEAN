var express = require('express')
var app = express()
var port =process.env.PORT || 8000;
var mongoConnectionString='mongodb://localhost/test';
var morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open',function(){
    console.log('connection has been made');
}).on('error',function(error){
    console.log('error is'.error);
});



app.use(morgan('dev'));

app.get('/home',function(req,res){
    res.send('Hello World');
});


app.listen(port,function(){
    console.log("running this server "+port);
});