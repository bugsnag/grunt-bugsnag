const reportBuild = require('bugsnag-build-reporter')

module.exports = grunt => {
  const gruntLogger = {
    debug: function () {
      grunt.log.debug.apply(grunt.log, arguments)
    },
    info: function () {
      grunt.log.ok.apply(grunt.log, arguments)
    },
    warn: function () {
      grunt.log.writeln.apply(grunt.log, arguments)
    },
    error: function () {
      grunt.log.error.apply(grunt.log, arguments)
    }
  }

  function task () {
    const done = this.async()

    // declare required config
    grunt.config.requires('bugsnagReportBuild')
    grunt.config.requires('bugsnagReportBuild.apiKey', 'bugsnagReportBuild.appVersion')

    // merge config with buildTool name
    const build = Object.assign({
      buildTool: 'grunt-bugsnag'
    }, grunt.config.get('bugsnagReportBuild'))

    // merge options with grunt-specific logging
    const options = this.options({ logger: gruntLogger })

    // fire off the build
    reportBuild(build, options)
      .then(() => done())
      .catch(() => done(false))
  }

  grunt.registerTask(
    'bugsnagReportBuild',
    'report a build of your application to Bugsnag',
    task
  )
}
