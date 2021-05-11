var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var getRole = require('get.role');

module.exports.loop = function () {

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
    };

    for(var role in Game.creeps.memory.role) {
        var role = ['harvester', 'upgrader', 'builder'];
        
        getRole.run(role);
        
        if (role > 1) {
            Game.spawns.spawn1.spawnCreep([WORK, CARRY, MOVE], null, {role: role});
        }
    };

};