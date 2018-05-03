const jwt = require('jsonwebtoken');

const generateWebTokens = (user)=>{
    return jwt.sign({
        email: user.email,
        password: user.password
      }, 'fe1a1915a379f3be5394b64d14794932', { expiresIn: '1h' });
}

module.exports = {
    generateWebTokens
}