var structures = {
    run: function(room) {
        var spawner = room.find(FIND_MY_SPAWNS)[0];
        var spawnX = spawner.pos.x;
        var spawnY = spawner.pos.y;
        var sites = spawner.room.find(FIND_MY_CONSTRUCTION_SITES).length;
        var extensions = spawner.room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION}}).length;
        if(room.controller.level == 2 && extensions < 5 && sites < 1) {
            room.createConstructionSite((spawnX), (spawnY + (extensions + 1)), STRUCTURE_EXTENSION);
        }
        if(room.controller.level == 3 && extensions > 4 && extensions < 10 && sites < 1) {
            room.createConstructionSite((spawnX), (spawnY - (extensions - 4)), STRUCTURE_EXTENSION);
        }
        if(room.controller.level == 4 && extensions > 9 && extensions < 20 && sites < 1) {
            room.createConstructionSite((spawnX + (extensions - 9)), (spawnY), STRUCTURE_EXTENSION);
        }
        if(room.controller.level == 5 && extensions > 19 && extensions < 30 && sites < 1) {
            room.createConstructionSite((spawnX - (extensions - 19)), (spawnY), STRUCTURE_EXTENSION);
        }
    }
}

module.exports = structures