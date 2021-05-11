global.garbage = function() {
    console.log('Running Garbage')

    for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }
}

module.exports = garbage;