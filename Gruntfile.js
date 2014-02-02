module.exports = function(grunt) {

    // 1. All configuration goes here
    var config = {devserver:{server: {} }};
    grunt.initConfig(config);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        devserver: {
            options: {
                'port': 8888,
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    require('load-grunt-tasks')(grunt);
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['devserver']);

};
