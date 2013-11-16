module.exports = function(grunt) {

  grunt.initConfig({
    jekyll: {                             // Task
      options: {                          // Universal options
          bundleExec: true,
          src : '<%= app %>'
      },
      dist: {                             // Target
        options: {                        // Target options
          dest: '<%= dist %>',
          config: '_config.yml'
        }
      }
    },
    bower: {
      install: {}
    },
    uglify: {
      build: {
        files: {
          '_site/js/main.js': ['js/main.js']
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', [ 'bower:install', 'jekyll', 'uglify' ]);

};

