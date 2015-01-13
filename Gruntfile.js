'use strict';

module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        copy: {
            foundation: {
                files: [
                    {expand: true, flatten: true, src: ['bower_components/fastclick/lib/fastclick.js'], dest: 'js/vendor/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/foundation/css/*.css'], dest: 'css/vendor/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/foundation/js/foundation/*.js'], dest: 'js/vendor/foundation/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/foundation/js/foundation.min.js'], dest: 'js/vendor/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/foundation/scss/foundation/components/*'], dest: 'sass/vendor/foundation/components/'},
                    {expand: true, flatten: true, src: ['bower_components/foundation/scss/foundation/*'], dest: 'sass/vendor/foundation/'},
                    {expand: true, flatten: true, src: ['bower_components/foundation/scss/foundation.scss'], dest: 'sass/vendor/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/foundation/scss/normalize.scss'], dest: 'sass/vendor/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'js/vendor/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/jquery.cookie/jquery.cookie.js'], dest: 'js/vendor/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/jquery-placeholder/jquery.placeholder.js'], dest: 'js/vendor/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/modernizr/modernizr.js'], dest: 'js/vendor/', filter: 'isFile'},
                    {src: ['bower_components/foundation/scss/foundation/_settings.scss'], dest: 'sass/_' + grunt.template.today('yyyy-mm-dd') + '_settings.scss'},
                ]
            },

        },

        clean: {
            bower_components: [
                'css/vendor/*',
                'fonts/vendor/*',
                'img/vendor/*',
                'js/vendor/*',
                'sass/vendor/*',
            ]
        },

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('clean-bower-components', ['clean:bower_components']);
    grunt.registerTask('copy-bower-components', [
        'clean:bower_components',
        'copy:foundation',
    ]);
    grunt.registerTask('default', []);
}

