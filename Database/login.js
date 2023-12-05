const bcrypt = require('bcrypt');
const db = require('./db');

async function validateLogin(email, password) {
    // Get user from DB
    const user = await db.User.findOne({ where: { email: email } });

    // User does not exist
    if (!user) {
        throw new Error('Invalid username or password');
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        throw new Error('Invalid username or password');
    }

    // Return user data
    return user;
}

module.exports = {
    validateLogin,
};