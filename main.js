var garbage = require('garbage')
var roles = require('roles')
var spawner = require('spawner')

module.exports.loop = function () {

    garbage();
    roles();
    spawner();

}