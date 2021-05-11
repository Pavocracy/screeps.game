var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

var harvesters = [test];
var upgraders = [];
var builders = [];

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            harvesters.push(creep);
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            upgraders.push(creep);
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            builders.push(creep);
            roleBuilder.run(creep);
        }
    };

    if(harvesters.length < 2) {
        Game.spawns.spawn1.createCreep([Game.WORK, Game.CARRY, Game.MOVE], null, {role: 'harvester'});
    };

};