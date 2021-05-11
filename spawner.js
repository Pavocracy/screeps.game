global.spawner = function() {
    console.log('Running Spawner')
    
    if(global.harvesters < 1) {
        Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'harvester'});    
    };
    if(global.upgraders < 1) {
        Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'upgrader'});    
    };
    if(global.builders < 1) {
        Game.spawns.spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'builder'});    
    }
}

module.exports = spawner