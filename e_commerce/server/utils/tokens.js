const jwt = require('jsonwebtoken');

const privateKey = 'fe1a1915a379f3be5394b64d14794932';

const generateWebTokens = (user)=>{
    console.log('user in auth token', user);
    return jwt.sign({
        id: user.id,
        email: user.email,
        password: user.password
      }, privateKey, { expiresIn: '1h' });
}

const decryptToken = (token)=>{
    const decrypted = jwt.verify(token, privateKey);
    console.log(decrypted);
    return decrypted;
}

async function tokenValidation(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, privateKey, (err, result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}

module.exports = {
    generateWebTokens,
    decryptToken,
    tokenValidation
}