const express = require('express');
const router = express.Router();
const dbModule = require('../dbModule/dbModule');
const upload = require('../utils/file-uploading');

module.exports = () => {
    const handlePictures = require('../services/picture')(dbModule.connection);    
    const handleComments = require('../services/comments')(dbModule.connection);

    router.post('/postComment', upload.array('uploads'), async (req, res)=>{
        try{
            console.log('body start',req.body, req.files[0], 'body end');
            let responseOfPicture = 0;
            if(req.files.length > 0){
                const fileMetadata = {
                    'path': req.files[0]['path'],
                    'name': req.files[0]['originalname']
               };
               responseOfPicture = await handlePictures.pictureMetadata(fileMetadata);
            }
            responseOfComments = await handleComments.postsComment(JSON.parse(req.body.comments), responseOfPicture);
            res.status(200).json(responseOfComments);
    
        }catch(e){
            console.log(e);
            res.status(500).json('internal server error');
        }
    });

    return router;
}