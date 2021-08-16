var garbage = require('garbage')
var roles = require('roles')
var spawner = require('spawner')
var structures = require('structures')

module.exports.loop = function() {
    garbage();
    roles();
    structures();
    spawner();
}

// helpful console commands:
// global.ex = (x) => JSON.stringify(x, null, 2);
// console.log(Object.keys(object))