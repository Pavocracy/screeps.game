var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    };

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        harvesters = 0
        upgraders = 0
        builders = 0
        console.log(harvesters, upgraders, builders)
        
        if(creep.memory.role == 'harvester') {
            harvesters++
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            upgraders++
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            builders++
            roleBuilder.run(creep);
        }

        if(harvesters < 1) {
            Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'harvester'});    
        }
        if(upgraders < 1) {
            Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'upgrader'});    
        }
        if(builders < 1) {
            Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'builder'});    
        }
    };
}