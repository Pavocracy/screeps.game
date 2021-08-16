global.structures = function() {
    for(var name in Game.rooms) {
        var room = Game.rooms[name];
        var spawnX = Game.spawns['Spawn1'].pos.x;
        var spawnY = Game.spawns['Spawn1'].pos.y;
        var sites = Game.spawns['Spawn1'].room.find(FIND_MY_CONSTRUCTION_SITES).length;
        var extensions = Game.spawns['Spawn1'].room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION}}).length;
        if(room.controller.level == 2 && extensions < 5 && sites < 1) {
            room.createConstructionSite((spawnX), (spawnY + (extensions + 1)), STRUCTURE_EXTENSION);
        }
        if(room.controller.level == 3 && extensions > 4 && extensions < 10 && sites < 1) {
            room.createConstructionSite((spawnX), (spawnY - (extensions - 4)), STRUCTURE_EXTENSION);
        }
    }
}

module.exports = structures