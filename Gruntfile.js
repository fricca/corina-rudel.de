module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    const webpackConfig = require('./webpack.config.js');
    const sass = require('node-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        paths: {
            css_in: 'css/_scss/',
            css_out: 'css/',
            js: 'js/',
            js_src: '<%= paths.js %>/src/',

            eleventy_src: 'src/',
            eleventy_files: 'files/',
            eleventy_css: 'css/',
            eleventy_js: 'js/'
        },

        sass: {
            options: {
                sourceMap: true,
                implementation: sass,
            },
            dist: {
                files: {
                    '<%= paths.css_out %>style.css': '<%= paths.css_in %>style.scss',
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true,
            },
            target: {
                src: ['<%= paths.css_out %>style.css'],
                dest: '<%= paths.css_out %>style.min.css'
            }
        },
        copy: {
            css: {
                expand: true,
                src: '<%= paths.css_out %>/**/*',
                dest: 'dist/',
            },
            js: {
                expand: true,
                src: '<%= paths.js %>/**/*',
                dest: 'dist/',
            },
        },
        webpack: {
            myConfig: webpackConfig,
        },
        shell: {
            eleventy: {
                command: 'npx @11ty/eleventy --quiet',
                options: {
                    execOptions: {}
                }
            }
        },
        watch: {
            sass: {
                files: [
                    '<%= paths.css_in %>**/*.scss'
                ],
                tasks: [
                    'sass',
                    'cssmin',
                    'copy:css',
                ],
                options: {
                    spawn: false,
                    livereload: true,
                }
            },
            webpack: {
                files: [
                    '<%= paths.js_src %>**/*.js',
                ],
                tasks: [
                    'webpack',
                    'copy:js',
                ],
                options: {
                    spawn: false,
                    livereload: true,
                }
            },
            eleventy: {
                files: [
                    '<%= paths.eleventy_src %>**/*.html',
                    '<%= paths.eleventy_src %>**/*.njk',
                    '<%= paths.eleventy_src %>**/*.js',
                    '<%= paths.eleventy_src %>**/*.md',

                    '<%= paths.eleventy_files %>**/*',
                ],
                tasks: [
                    'eleventy'
                ],
                options: {
                    spawn: false,
                    livereload: true,
                },
            },
        }
    });

    grunt.registerTask('eleventy', ['shell:eleventy']);

    grunt.registerTask('default', ['newer:sass', 'newer:cssmin', 'newer:copy', 'newer:webpack', 'newer:shell:eleventy', 'watch']);
    grunt.registerTask('build', ['webpack', 'sass', 'cssmin', 'copy', 'eleventy']);
};