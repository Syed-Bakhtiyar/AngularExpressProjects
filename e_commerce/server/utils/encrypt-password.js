const bcrypt = require('bcrypt');
const saltRound = 10

const encryptPassword = async (password) => {
    return bcrypt.hash(password, saltRound);
}

const decryptPassword = async (password, hash) => {
    return bcrypt.compare(password, hash);
}

module.exports = {
    encryptPassword,
    decryptPassword
};