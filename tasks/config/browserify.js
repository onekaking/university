module.exports = function (grunt) {
   // grunt.initConfig({
   //    browserify: {
   //       dist: {
   //          options: {
   //             transform: [
   //                ["babelify", {
   //                   loose: "all"
   //                }]
   //             ]
   //          },
   //          files: {
   //             // if the source file has an extension of es6 then
   //             // we change the name of the source file accordingly.
   //             // The result file's extension is always .js
   //             ".tmp/public/bundle.js": ["assets/**/*.js"]
   //          }
   //       }
   //    }
   // });

   grunt.config.set('browserify', {
      dev: {
         options: {
            transform: [
               ["babelify", {
                  loose: "all"
               }]
            ]
         },
         files: {
            // if the source file has an extension of es6 then
            // we change the name of the source file accordingly.
            // The result file's extension is always .js
            ".tmp/public/es6/bundle.js": ["assets/**/*.js", '!assets/js/dependencies/sails.io.js']
         }
      }
   });

   grunt.loadNpmTasks("grunt-browserify");
};
