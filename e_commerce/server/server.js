const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const dbModule = require('./dbModule/dbModule');

app.use(express.static(path.join(__dirname, 'uploads')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
      cb(null, './images/')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/createUser', async (req, res)=>{
    try{
        responseOfUser = await dbModule.createUser(req.body);
        return res.json(responseOfUser);
    }catch(e){
        return res.status(500).json('internal server error');
    }
});

app.post('/createPost', upload.array('uploads'), async (req, res)=>{
    try{
        console.log('body start',req.body, req.files[0], 'bpody end');
        let responseOfPicture = 0;
        if(req.files.length > 0){
            const fileMetadata = {
                'path': req.files[0]['path'],
                'name': req.files[0]['originalname']
           };
           responseOfPicture = await dbModule.pictureMetadata(fileMetadata); 
        }
        responseOfPost = await dbModule.createPosts(JSON.parse(req.body.post), responseOfPicture);
        res.status(200).json(responseOfPost);
    }catch(e){
        console.log(e);
        res.status(500).json('internal server error');
    }
});

app.post('/postComment', upload.array('uploads'), async (req, res)=>{
    try{
        console.log('body start',req.body, req.files[0], 'body end');
        let responseOfPicture = 0;
        if(req.files.length > 0){
            const fileMetadata = {
                'path': req.files[0]['path'],
                'name': req.files[0]['originalname']
           };
           responseOfPicture = await dbModule.pictureMetadata(fileMetadata);
        }
        responseOfComments = await dbModule.postsComment(JSON.parse(req.body.comments), responseOfPicture);
        res.status(200).json(responseOfComments);

    }catch(e){
        console.log(e);
        res.status(500).json('internal server error');
    }
});

app.post('/likes', async (req, res)=>{
    try{
        console.log('request' ,req.body);
        likes = await dbModule.postLikes(JSON.parse(req.body.likes));
        console.log(likes);
        res.json(likes);
    }catch(e){
        console.log(e);
        res.status(500).json('internal server error');
    }
});

app.listen(3000, ()=>{
    console.log('api is running');
});
