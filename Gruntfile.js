/*global module:false*/
module.exports = function (grunt) {
  var sourceFiles = ['src/**/*.js', '!src/lib/md5.js', 'utils/log-to.js', '!src/**/*-spec.js'];
  var testFiles = ['src/**/*-spec.js'];
  var testPages = ['index.html', 'test/page.html'];

  var globalName = 'iframeApi';

  grunt.initConfig({

    filenames: {
      options: {
        valid: 'dashes',
        except: 'verify-md5.js'
      },
      src: sourceFiles,
      test: testFiles
    },

    jshint: {
      all: sourceFiles,
      test: testFiles,
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
          url: 'index.html',
          timeout: 1 // seconds to wait for any errors
        }
      }
    },

    'gh-pages': {
      options: {
        base: '.'
      },
      src: [
        'README.md',
        'dist/*.js',
        'index.html',
        'bower_components/es5-shim/es5-shim.js',
        'test/page.html',
        'test/*.js',
        'utils/log-to.js'
      ]
    },

    browserify: {
      api: {
        options: {
          browserifyOptions: {
            standalone: globalName
          }
        },
        src: ['src/iframe-api.js'],
        dest: 'dist/iframe-api.js'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: testFiles
      }
    },

    watch: {
      options: {
        atBegin: true
      },
      all: {
        files: [sourceFiles, testFiles, testPages],
        tasks: ['browserify', 'test', 'lint']
      }
    }
  });

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('lint', ['filenames', 'jshint', 'eslint', 'jscs']);
  grunt.registerTask('test', ['mochaTest', 'clean-console']);
  grunt.registerTask('default', ['deps-ok', 'nice-package', 'lint', 'sync', 'browserify', 'test']);
};
