module.exports = (grunt) ->
	grunt.loadNpmTasks 'grunt-ftp-deploy'

	grunt.initConfig
		'ftp-deploy':
			build:
				auth:
					host: 'juanghurtado.com'
					port: 21
					authKey: 'juanghurtado.com'
				src: 'src/'
				dest: 'gym.juanghurtado.com/'

	grunt.registerTask 'default', ['ftp-deploy']