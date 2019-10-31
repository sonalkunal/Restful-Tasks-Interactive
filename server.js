const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist/public'));
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost/restful_interactive",{useNewUrlParser: true} );


// const Quote = mongoose.model('Quote');
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000,function(){
    console.log("listening on 8000");
})
