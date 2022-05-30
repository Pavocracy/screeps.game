var garbage = require('garbage')
var roles = require('roles')
var spawners = require('spawners')
var structures = require('structures')

module.exports.loop = function() {
    garbage();

    for(var i in Game.rooms) {
        var room = Game.rooms[i];
        structures.run(room);
        spawners.run(room);
    }

    for(var j in Game.creeps) {
        var creep = Game.creeps[j];
        roles.run(creep);
    }
}

// helpful console commands:
//
// global.ex = (x) => JSON.stringify(x, null, 2);
// console.log(Object.keys(object))
