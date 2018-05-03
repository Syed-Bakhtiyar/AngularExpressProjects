const express = require('express');
const router = express.Router();
const dbModule = require('../dbModule/dbModule');
const upload = require('../utils/file-uploading');

module.exports = () => {
    const handlePictures = require('../services/picture')(dbModule.connection);    
    const handlePost = require('../services/post')(dbModule.connection);
    
    router.post('/createPost', upload.array('uploads'), async (req, res)=>{
        try{
            console.log('body start',req.body, req.files[0], 'bpody end');
            let responseOfPicture = 0;
            if(req.files.length > 0){
                const fileMetadata = {
                    'path': req.files[0]['path'],
                    'name': req.files[0]['originalname']
               };
               responseOfPicture = await handlePictures.pictureMetadata(fileMetadata); 
            }
            responseOfPost = await handlePost.createPosts(JSON.parse(req.body.post), responseOfPicture);
            res.status(200).json(responseOfPost);
        }catch(e){
            console.log(e);
            res.status(500).json('internal server error');
        }
    });

    return router;
}