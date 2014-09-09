'use strict';

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

var webpackDistConfig = require('./webpack.dist.config.js'),
    webpackDevConfig = require('./webpack.config.js');

module.exports = function (grunt) {
  // Let *load-grunt-tasks* require everything
  require('load-grunt-tasks')(grunt);

  // Read configuration from package.json
  var pkgConfig = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkgConfig,

    webpack: {
      options: webpackDistConfig,

      dist: {
        cache: false
      }
    },

    'webpack-dev-server': {
      options: {
        port: 8000,
        webpack: webpackDevConfig,
        publicPath: '/assets/',
        contentBase: './<%= pkg.src %>/',
      },

      start: {
        keepAlive: true,
      }
    },

    connect: {
      options: {
        port: 8000
      },

      dist: {
        options: {
          keepalive: true,
          middleware: function (connect) {
            return [
              mountFolder(connect, pkgConfig.dist)
            ];
          }
        }
      }
    },

    open: {
      options: {
        delay: 500
      },
      dev: {
        path: 'http://localhost:<%= connect.options.port %>/webpack-dev-server/'
      },
      dist: {
        path: 'http://localhost:<%= connect.options.port %>/'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    copy: {
        dev: {
            files: [{
                flatten: true,
                expand: true,
                cwd: 'bower_components/foundation-icon-fonts/',
                src: ['*.ttf', '*.woff', '*.eot'],
                dest: '<%= pkg.src %>/fonts/'
            }]
        },
        dist: {
            files: [
                {
                    flatten: true,
                    expand: true,
                    src: ['<%= pkg.src %>/*'],
                    dest: '<%= pkg.dist %>/',
                    filter: 'isFile'
                },
                {
                    flatten: true,
                    expand: true,
                    cwd: 'bower_components/foundation-icon-fonts/',
                    src: ['*.ttf', '*.woff', '*.eot'],
                    dest: '<%= pkg.dist %>/fonts/'
                }
            ]
        }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= pkg.dist %>'
          ]
        }]
      }
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open:dist', 'connect:dist']);
    }

    grunt.task.run([
        'copy:dev',
        'open:dev',
        'webpack-dev-server'
    ]);
  });

  grunt.registerTask('test', ['karma']);

  grunt.registerTask('build', ['clean', 'copy:dist', 'webpack']);

  grunt.registerTask('default', []);
};
