var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

global.roles = function() {
    console.log('Running Roles')

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        global.harvesters = 0
        global.upgraders = 0
        global.builders = 0

        if(creep.memory.role == 'harvester') {
            global.harvesters++
            roleHarvester.run(creep);
        };
        if(creep.memory.role == 'upgrader') {
            global.upgraders++
            roleUpgrader.run(creep);
        };
        if(creep.memory.role == 'builder') {
            global.builders++
            roleBuilder.run(creep);
        }
    }
}

module.exports = roles;