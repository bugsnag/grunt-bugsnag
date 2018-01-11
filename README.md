# grunt-bugsnag

### Example

```js
/* Gruntfile.js */

module.exports = grunt => {
  grunt.initConfig({
    bugsnagReportBuild: {
      apiKey: 'YOUR_API_KEY',
      appVersion: '1.2.3',
      options: {}
    }
  })

  grunt.loadNpmTasks('grunt-bugsnag')
}
```
