var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    var harvesters = [];
    var upgraders = [];
    var builders = [];

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            harvesters.push(Game.creeps[i]);
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            upgraders.push(Game.creeps[i]);
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            builders.push(Game.creeps[i]);
            roleBuilder.run(creep);
        }
    };

    if(harvesters.length < 1) {
        Game.spawns.spawn1.createCreep([Game.WORK, Game.CARRY, Game.MOVE], null, {role: 'harvester'});
    };

};