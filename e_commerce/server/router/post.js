const express = require('express');
const router = express.Router();
const dbModule = require('../dbModule/dbModule');
const upload = require('../utils/file-uploading');
const tokens = require('../utils/tokens');
const path = require('path');
const sendErrorResponseWithMessage = require('../utils/error-status');

module.exports = () => {
    const handlePictures = require('../services/picture')(dbModule.connection);    
    const handlePost = require('../services/post')(dbModule.connection);
    
    router.post('/createPost', upload.single('file'), async (req, res)=>{
        try{
            console.log('-----------Token---------------');
            const user = await tokens.tokenValidation(req.headers.authorization);
            req.body.data = JSON.parse(req.body.data);
            req.body.data.user_id = user.id;
            let responseOfPicture = 0;
            if(req.hasOwnProperty('file') && req.file){
                const fileMetadata = {
                    'path': req.file['path'],
                    'name': req.file['originalname']
               };
               console.log('file exists');
               responseOfPicture = await handlePictures.pictureMetadata(fileMetadata); 
            }
            responseOfPost = await handlePost.createPosts(req.body.data, responseOfPicture);
            return res.status(200).json(responseOfPost);
        }catch(e){
            console.log(e);
            return res.status(500).json('internal server error');
        }
    });

    router.get('/getPosts', async (req, res)=>{
        try {
            const user = await tokens.tokenValidation(req.headers.authorization);
            const result = await handlePost.getUsersPost(user.id);
            return sendErrorResponseWithMessage(res, 200, 'Authenticated User', result);
        } catch (e) {
            console.log(e);
            return res.status(500).json('internal server error');
        }
    });

    router.get('/getImage', (req, res)=>{
        try{
            console.log('callllllllllllllllllllled');
            const filePath = req.query.path;
            console.log('ok');
            return res.sendFile(path.join(__dirname,`../${filePath}`));
          }catch(e){
              console.log(e);
            res.status(404).json('File Not Found');
          }
    });
    

    return router;
}
