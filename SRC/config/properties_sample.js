//Global Variables
const PROPERTIES = {
    server_PORT: 3005,
    token_SECRETWORD: 'ElConcordMolaMogollon',
    token_EXPIRES: '48h',
    MONGO_USER: 'UserDB',
    MONGO_PASS: 'concord..',
    MONGO_NAMEDB: 'flightSearch',
    LOG_PATH: `../logs/app.log`,
    LOG_MAXSIZE: 5242880,// 5MB
    LOG_MAXFILES: 5,
    LOG_LEVELFILE: 'info',//error, warn, info, verbose, debug, silly
    LOG_LEVELCONSOLE: 'debug'//error, warn, info, verbose, debug, silly
};
​
module.exports = PROPERTIES