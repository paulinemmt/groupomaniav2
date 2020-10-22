//Imports
const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'jedfiuerhgufhzeifhdshu2893E7huzeuifh237846783jezfh';

//Exported functions
module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {expiresIn: '1h'
    })
    }
}