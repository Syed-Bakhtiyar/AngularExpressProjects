const express = require('express');
const router = express.Router();
const dbModule = require('../dbModule/dbModule');
const tokens = require('../utils/tokens');
const passwordSecurity = require('../utils/encrypt-password');
const sendErrorResponseWithMessage = require('../utils/error-status');

module.exports = () => {
    const handleUser = require('../services/user')(dbModule.connection);

    router.post('/createUser', async (req, res)=>{
        try{
            console.log(req.body);
            req.body.password = await passwordSecurity.encryptPassword(req.body.password);
            responseOfUser = await handleUser.createUser(req.body);
            return res.json(responseOfUser);
        }catch(e){
            console.log(e);
            if(e.errno === 1062){
                return sendErrorResponseWithMessage(res, 409, 'User Already Exists');
            }
            return sendErrorResponseWithMessage(res, 500, 'internal server error');
        }
    });

    router.post('/authenticate', async (req, res)=>{
        try{
            console.log(req.body);
            const responseOfAuthenticatedUsers = await handleUser.getUserForAuthentication(req.body);
            console.log(responseOfAuthenticatedUsers, responseOfAuthenticatedUsers.length);
            if(responseOfAuthenticatedUsers.length){
                const checkPassword = await passwordSecurity.decryptPassword(req.body.password, responseOfAuthenticatedUsers[0].password);
                console.log(checkPassword);
                if(!checkPassword){
                    return sendErrorResponseWithMessage(res, 401, 'Not Authenticated User');
                }
                const authToken = tokens.generateWebTokens(responseOfAuthenticatedUsers[0]);
                return res.status(200).json({authToken});
            }
            return sendErrorResponseWithMessage(res, 401, 'Not Authenticated User');
        }catch(e){
            console.log(e);
            return sendErrorResponseWithMessage(res, 500, 'internal server error');
        }
    });
    
    router.post('/authenticateToken', async (req, res)=>{
        try{
            const user = tokens.decryptToken(req.body.authToken);
            console.log(user);
            const responseOfAuthenticatedUsers = await handleUser.getUserForAuthentication(user);
            console.log(responseOfAuthenticatedUsers);
            if(responseOfAuthenticatedUsers.length && user.password === responseOfAuthenticatedUsers[0]['password']){
                return sendErrorResponseWithMessage(res, 200, 'Authenticated User');
            }
            return sendErrorResponseWithMessage(res, 401, 'Not Authenticated User');
        }catch(e){
            console.log(e);
            return sendErrorResponseWithMessage(res, 500, 'internal server error');
        }
    });
    return router;
}