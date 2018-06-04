const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'uploads')));

/**
 * this is for cross domain
 */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * parse json as well as urlencoded
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

const userRouter = require('./router/user')();
const postRouters = require('./router/post')();
const commentsRouter = require('./router/comments')();
const likes = require('./router/likes')();

//middleware handle for routing
app.use('/', userRouter);
app.use('/', postRouters);
app.use('/', commentsRouter);
app.use('/', likes);

app.listen(3000, ()=>{
    console.log('api is running 3000');
});
