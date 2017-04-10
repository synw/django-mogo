module.exports = function(grunt) {

	grunt.initConfig({
	    distFolder: 'static/main/',
	    pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';',
				mangle: {
					except: ['jQuery']
				}
			},
			dist: {
				src: ['vvpages/static/js/*.js', 'static/js/*.js', 'static/bootstrap/js/*.js'],
				dest: '<%= distFolder %>/js/main.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: '<%= distFolder %>/js/main.js',
				dest: '<%= distFolder %>/js/main.min.js'
			}
		},
		cssmin: {
			target: {
				files: [{
					'static/main/css/main.min.css': [
						'static/css/screen.css',
						'../lib/python3.5/site-packages/mbase/static/css/mbase.css'
					]
				}]
			}
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('build', ["concat","uglify","cssmin"]);
	grunt.registerTask('mincss', ["cssmin"]);
};
