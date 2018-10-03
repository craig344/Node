const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(){
    console.log("Message logged");
})

emitter.emit('messageLogged');