const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
    await next(); // allows route handler to run first then this runs afterwards

    clearHash(req.user.id);
}