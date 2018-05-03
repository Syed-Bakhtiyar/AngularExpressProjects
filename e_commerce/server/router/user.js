const express = require('express');
const router = express.Router();
const dbModule = require('../dbModule/dbModule');
const tokens = require('../utils/tokens');

module.exports = () => {
    const handleUser = require('../services/user')(dbModule.connection);

    router.post('/createUser', async (req, res)=>{
        try{
            responseOfUser = await handleUser.createUser(req.body);
            return res.json(responseOfUser);
        }catch(e){
            return res.status(500).json('internal server error');
        }
    });

    router.post('/authenticate', async (req, res)=>{
        try{
            const responseOfAuthenticatedUsers = await handleUser.getUserForAuthentication(JSON.parse(req.body.user));
            if(!responseOfAuthenticatedUsers.length){
                return res.status(401).json('Not Authenticated User');
            }
            const authToken = tokens.generateWebTokens(responseOfAuthenticatedUsers[0]);
            res.status(200).json({authToken});
        }catch(e){
            res.status(500).json('internal server error');
        }
    });
    
    return router;
}