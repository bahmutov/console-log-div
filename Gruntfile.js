/*global module:false*/
module.exports = function (grunt) {
  var sourceFiles = ['console-log-div.js'];
  var testPages = ['test/index.html', 'test/existing.html'];

  grunt.initConfig({

    filenames: {
      options: {
        valid: 'dashes',
        except: 'verify-md5.js'
      },
      src: sourceFiles
    },

    jshint: {
      all: sourceFiles,
      options: {
        jshintrc: 'utils/.jshintrc',
        reporter: require('jshint-summary')
      }
    },

    eslint: {
      target: sourceFiles,
      options: {
        config: 'utils/eslint.json',
        rulesdir: ['./node_modules/eslint-rules']
      }
    },

    jscs: {
      src: sourceFiles,
      options: {
        config: 'utils/jscs.json'
      }
    },

    'clean-console': {
      test: {
        options: {
          url: testPages,
          timeout: 1 // seconds to wait for any errors,
        }
      }
    },

    'gh-pages': {
      options: {
        base: '.'
      },
      src: [
        'README.md',
        'console-log-div.js',
        'test/index.html',
        'test/existing.html',
        'bower_components/es5-shim/es5-shim.js'
      ]
    }
  });

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('lint', ['filenames', 'jshint', 'eslint', 'jscs']);
  grunt.registerTask('test', ['clean-console']);
  grunt.registerTask('default', ['deps-ok', 'nice-package', 'lint', 'sync']);
};
