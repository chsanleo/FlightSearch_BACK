//Global Variables
const PROPERTIES = {
    server_PORT: 0,
    token_SECRETWORD : 'sample',
    token_EXPIRES: '1s',
    MONGO_USER: 'user', //use inside MongoUri
    MONGO_PASS: 'pass', //use inside MongoUri
    MONGO_NAMEDB: 'db', //use inside MongoUri
    LOG_PATH: 'logPath',
    LOG_MAXSIZE: 60,
    LOG_MAXFILES: 1,
    LOG_LEVELFILE: 'debug',//error, warn, info, verbose, debug, silly
    LOG_LEVELCONSOLE: 'debug'//error, warn, info, verbose, debug, silly
};

module.exports = PROPERTIES