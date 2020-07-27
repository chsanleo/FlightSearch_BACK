//Global Variables
const PROPERTIES = {
    server_PORT: 2,
    token_SECRETWORD: 'password',
    token_EXPIRES: '1s',
    MONGO_USER: 'user',
    MONGO_PASS: 'passmongo',
    MONGO_NAMEDB: 'namemongo',
    PASSWORDSALT: 1,
    LOG_PATH: `path`,
    LOG_MAXSIZE: 5,// 5MB
    LOG_MAXFILES: 1,
    LOG_LEVELFILE: 'info',//error, warn, info, verbose, debug, silly
    LOG_LEVELCONSOLE: 'debug'//error, warn, info, verbose, debug, silly
};
​
module.exports = PROPERTIES