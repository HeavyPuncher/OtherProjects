const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
//variables used for web pages

const app = express();
const port = 8080;
const path = require('path');
//using express for the app that uses the port 8080

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'css')));
//taking information and parsing it

require('./routes/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.listen(port, () => console.log('Server running on port: ' + port));
//accessing the directories