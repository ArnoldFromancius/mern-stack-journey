//Events. pretty intuitive concept; you create a listener that
//waits for an event to happen, this then triggers a callback
//function.

let EventEmitter = require('events');
let emitter = new EventEmitter();

//register a listener
 emitter.on('eventOccured', function(){
	console.log('event occured...');
 });

//triger event
emitter.emit('eventOccured');
