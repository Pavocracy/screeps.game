global.spawner = function() {
    for(var name in Game.rooms) {
        var room = Game.rooms[name];
        var level = room.controller.level;
        var spawner = room.find(FIND_MY_SPAWNS)[0];
        var harvesters = _(room.find(FIND_MY_CREEPS)).filter({memory: {role: 'harvester'}}).size();
        var upgraders = _(room.find(FIND_MY_CREEPS)).filter({memory: {role: 'upgrader'}}).size();
        var builders = _(room.find(FIND_MY_CREEPS)).filter({memory: {role: 'builder'}}).size();
        var energy = room.energyAvailable;
        var parts = {
            200:[WORK, CARRY, MOVE],
            250:[WORK, CARRY, MOVE, MOVE],
            300:[WORK, CARRY, CARRY, MOVE, MOVE],
            350:[WORK, CARRY, CARRY, MOVE, MOVE, MOVE],
            400:[WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
            450:[WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
            500:[WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
            550:[WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
            600:[WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
            650:[WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
            700:[WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
            750:[WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
            800:[WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE],
            850:[WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE],
            900:[WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE],
            950:[WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE],
            1000:[WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]
        };
        if(builders < (level * 1)) {
            spawner.createCreep(parts[energy], null, {role: 'builder'});    
        }
        if(upgraders < (level * 2)) {
            spawner.createCreep(parts[energy], null, {role: 'upgrader'});    
        }
        if(harvesters < (level * 2)) {
            spawner.createCreep(parts[energy], null, {role: 'harvester'});    
        }
    }
}

module.exports = spawner