const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log("Message logged ",arg);
})

logger.log('message');