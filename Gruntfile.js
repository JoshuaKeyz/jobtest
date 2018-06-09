module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        exec: {
            build_application_container: {
                command: function(){
                    let command = `
                    docker build -t keysoutsourcedocker/application_container:latest .
                    &&
                    docker stack deploy -c docker-compose.yml restAPI
                    `   
                    return `echo ${command}`
                }
            },
            deploy_to_stack:{
                cmd: function(){return 'echo "How are you?"'}
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
    grunt.loadNpmTasks('grunt-git');

    grunt.registerTask("test", ["mochaTest"])
    grunt.registerTask("deploy", ['exec'])
    grunt.registerTask("update_git", ['gitadd', 'gitcommit', 'gitpush'])
};