const bcrypt = require('bcrypt');
const db = require('./db');

async function validateLogin(email, password) {
    
    const user = await db.User.findOne({ where: { email: email } });

    
    if (!user) {
        throw new Error('Invalid username or password');
    }

    
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        throw new Error('Invalid username or password');
    }

    return user;
}

module.exports = {
    validateLogin,
};