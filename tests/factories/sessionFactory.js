const Buffer = require('safe-buffer').Buffer;
const Keygrip = require('keygrip');
const keys = require('../../config/keys');
const keygrip = new Keygrip([keys.cookieKey]);

module.exports = (user) => {
    // const id = id || '5ae1cf7c651b1c38d0dd8691';

    const sessionObject = {
        passport: {
            user: user._id.toString() // bc mongo
        }
    }

    const session = Buffer.from(
        JSON.stringify(sessionObject)
    ).toString('base64');

    const sig = keygrip.sign('session=' + session);
    return { session, sig }
}