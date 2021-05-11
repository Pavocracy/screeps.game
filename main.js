var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

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

    if(Object.keys(Game.creeps).reduce(function(p, c, i, a) {return p + (Game.creeps[c].memory.role == "harvester" ? 1 : 0)}, 0) < 1) {
        Game.spawns.spawn1.createCreep([Game.WORK, Game.CARRY, Game.MOVE], null, {role: 'harvester'});
    };

};