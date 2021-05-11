var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(_sum(creep.memory.role == 'harvester') < 1) {
            Game.spawns.spawn1.spawnCreep([WORK, CARRY, MOVE], null, {role: 'harvester'})
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(_sum(creep.memory.role == 'upgrader') < 1) {
            Game.spawns.spawn1.spawnCreep([WORK, CARRY, MOVE], null, {role: 'harvester'})
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(_sum(creep.memory.role == 'builder') < 1) {
            Game.spawns.spawn1.spawnCreep([WORK, CARRY, MOVE], null, {role: 'harvester'})
        }
    };
/*
    if(._sum(harvesters.length < 1) {
        Game.spawns.spawn1.spawnCreep([WORK, CARRY, MOVE], null, {role: 'harvester'});
    };

    if(global.upgraders.length < 1) {
        Game.spawns.spawn1.spawnCreep([WORK, CARRY, MOVE], null, {role: 'upgrader'});
    };

    if(global.builders.length < 1) {
        Game.spawns.spawn1.spawnCreep([WORK, CARRY, MOVE], null, {role: 'builder'});
    };*/
};