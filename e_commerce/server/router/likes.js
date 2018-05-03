const express = require('express');
const router = express.Router();
const dbModule = require('../dbModule/dbModule');

module.exports = () => {
    const handleLikes = require('../services/likes')(dbModule.connection);

    router.post('/likes', async (req, res)=>{
        try{
            console.log('request' ,req.body);
            likes = await handleLikes.postLikes(JSON.parse(req.body.likes));
            console.log(likes);
            res.json(likes);
        }catch(e){
            console.log(e);
            res.status(500).json('internal server error');
        }
    });

    return router;
}    