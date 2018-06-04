const jwt = require('jsonwebtoken');

const privateKey = 'fe1a1915a379f3be5394b64d14794932';
const generateWebTokens = (user)=>{
    return jwt.sign({
        email: user.email,
        password: user.password
      }, privateKey, { expiresIn: '1h' });
}

const decryptToken = (token)=>{
    const decrypted = jwt.verify(token, privateKey);
    console.log(decrypted);
    return decrypted;
}

module.exports = {
    generateWebTokens,
    decryptToken
}