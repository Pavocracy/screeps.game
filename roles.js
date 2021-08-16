var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

global.roles = function() {
    global.harvesters = _(Game.creeps).filter( { memory: { role: 'harvester' } } ).size();
    global.upgraders = _(Game.creeps).filter( { memory: { role: 'upgrader' } } ).size();
    global.builders = _(Game.creeps).filter( { memory: { role: 'builder' } } ).size();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}

module.exports = roles