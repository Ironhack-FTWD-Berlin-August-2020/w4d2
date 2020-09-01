// console.log(__dirname);
// console.log(__filename);

const events = require('events');

const emitter = new events.EventEmitter();

// event listener
emitter.on('userloggedin', msg => {
    console.log(msg);
});

// if a user logs in this event would be emitted
emitter.emit('userloggedin', 'this is the message');

const fs = require('fs');

const content = fs.readFileSync('example.txt', 'utf-8');

fs.writeFileSync('newFile.txt', content);

// console.log(content);

// console.log('the name you entered is', process.argv[2]);