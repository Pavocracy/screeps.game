var getRole = {

    run: function(role) {
        var i = 0; 
        for (var name in Game.creeps) {
            if (Game.creeps[name].memory.role == role) i++; 
        }
        return i;
    }
};

module.exports = getRole;