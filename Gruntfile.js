module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      './dist/underscore-unchained.js': ['./underscore-unchained.js']
      , options: { 
          debug: true,
          transform: ['debowerify', 'decomponentify', 'deamdify', 'deglobalify'],
      }
    },
    watch: {
      files: [ "./js","./README.md"],
      tasks: [ 'browserify' ]
    },
    groc: {
        javascript: [
            "js", "README.md"
        ],
        options: {
        "out": "doc/",
        "index": "js"
        }
    },
    jshint: {
        all: ['Gruntfile.js', '*.js', 'test/**/*.js']
        , options: { laxcomma: true }
        //,environments: ['node']
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-groc');
  grunt.registerTask('default', ['browserify', 'jshint', 'groc']);
};
