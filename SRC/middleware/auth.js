const jwt = require('jsonwebtoken');
const properties = require('../config/properties');
const { User } = require('../models');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, properties.token_SECRETWORD);
        const user
            = await User.findOne({
                where: { token: token }
            });
        if (!user) {
            return res.status(401).send({ message: 'You are not authorized.' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({ message: 'Try again later.' });
    }
}
module.exports = auth;