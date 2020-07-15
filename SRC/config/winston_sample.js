var winston = require('winston');

// define the custom settings for each transport (file, console)
var options = {
    file: {
        
        level: [error, warn, info, verbose, debug, silly],
        filename: $path,
        handleExceptions: true,
        json: true,
        maxsize: maxsize,
        maxFiles: maxFiles,
        colorize: false,
    },
    console: {
        level: [error, warn, info, verbose, debug, silly],
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

// instantiate a new Winston Logger with the settings defined above
var logger = new winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    },
};

module.exports = logger;