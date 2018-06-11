module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        exec: {
            migrate_dev: {
                command: "knex migrate:latest --env development"
            },
            migrate_test: {
                command: "knex migrate:latest --env test"
            },
            seed_dev: {
                command: "knex seed:run --env development"
            },
            seed_test:{
                command: "knex seed:run --env test"
            }
        },
        mochaTest:{
            test: {
                options: {
                    reporter: 'spec',
                    noFail: false
                },
                src: ['tests/**/*.js']
            }
        }
        
    });
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-mocha-test')


    grunt.registerTask("test", ["mochaTest"])
    grunt.registerTask("setup", ['exec'])
};