global.spawner = function() {
    if(global.harvesters < 2) {
        Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'harvester'});    
    }
    if(global.upgraders < 2) {
        Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'upgrader'});    
    }
    if(global.builders < 1) {
        Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'builder'});    
    }
}

module.exports = spawner