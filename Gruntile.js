module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  
  buildcontrol: {
    options: {
      dir: '_site',
      commit: true,
      push: true,
      message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
    },
    
    pages: {
      options: {
        remote: 'git@github.com:billdthompson/billdthompson.github.io.git',
        branch: 'master'
        login: 'https://login@github.com/billdthompson/billdthompson.github.io.git'
      }
    },

  }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-build-control');

  grunt.registerTask('default', ['jshint']);

};