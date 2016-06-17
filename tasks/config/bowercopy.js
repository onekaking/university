/**
 * Bower Copy
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-bowercopy
 */
module.exports = function(grunt) {

  grunt.config.set('bowercopy', {
    options: {
      // Bower components folder will be removed afterwards 
      clean: false
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};
