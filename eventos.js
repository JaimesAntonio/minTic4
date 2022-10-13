var evento = require('events');
var emitiEvento = new evento.EventEmitter();

//Create an event handler:
var miEventoManual = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
emitiEvento.on('Grito', miEventoManual);

//Fire the 'scream' event:
emitiEvento.emit('Grito');
