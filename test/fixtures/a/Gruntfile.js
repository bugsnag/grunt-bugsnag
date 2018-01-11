module.exports = grunt => {
  // config
  grunt.initConfig({
    bugsnagReportBuild: {
      apiKey: 'YOUR_API_KEY',
      appVersion: '1.2.3',
      options: {
        endpoint: `http://localhost:${process.env.PORT}`
      }
    }
  })

  // In real life we'd do this…
  // grunt.loadNpmTasks('grunt-bugsnag')
  // but because grunt-bugsnag _is_ this and not a dependency of it,
  // we need to load it by path instead
  grunt.loadTasks(`${__dirname}/../../../tasks`)
}
