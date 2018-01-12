# grunt-bugsnag

[![Build status](https://travis-ci.org/bugsnag/grunt-bugsnag.svg?branch=master)](https://travis-ci.org/bugsnag/grunt-bugsnag)
[![NPM](https://img.shields.io/npm/v/grunt-bugsnag.svg)](https://npmjs.org/package/grunt-bugsnag)

Grunt tasks for common Bugsnag actions.

## Installation

```
npm install --save-dev grunt-bugsnag
```

## Tasks

### `bugsnagReportBuild`

Reports your application's build to Bugsnag. It can auto detect source control from `.git`, `.hg` and `package.json`.

##### Config

- `apiKey: string` your Bugsnag API key __[required]__
- `appVersion: string` the version of the application you are building __[required]__
- `releaseStage: string` `'production'`, `'staging'` etc. (leave blank if this build can be released to different `releaseStage`s)
- `sourceControl: object` an object describing the source control of the build (if not specified, the module will attempt to detect source control information from `.git`, `.hg` and the nearest `package.json`)
  - `provider: string` can be one of: `'github'`, `'github-enterprise'`, `'gitlab'`, `'gitlab-onpremise'`, `'bitbucket'`, `'bitbucket-server'`
  - `repository: string` a URL (`git`/`ssh`/`https`) pointing to the repository, or webpage representing the repository
  - `revision: string` the unique identifier for the commit (e.g. git SHA)
- `builderName: string` the name of the person/machine that created this build (defaults to the result of the `whoami` command)
- `autoAssignRelease: boolean` automatically associate this build with any new error events and sessions that are received for the `releaseStage` until a subsequent build notification is received. If this is set to `true` and no `releaseStage` is provided the build will be applied to `'production'`.

##### Options

- `path: string` the path to search for source control info, defaults to `process.cwd()`
- `endpoint: string` post the build payload to a URL other than the default (`https://build.bugsnag.com`)

#### Usage

```js
/* Gruntfile.js */

module.exports = grunt => {
  // See full configuration options above
  grunt.initConfig({
    bugsnagReportBuild: {
      apiKey: 'YOUR_API_KEY',
      appVersion: '1.2.3',
      options: {}
    }
  })

  // load the task(s) from this module
  grunt.loadNpmTasks('grunt-bugsnag')

  // add as the last task in your application's build task
  grunt.task('build', /* build tasks */, 'bugsnagReportBuild')
}

// $ grunt build
// runs your build process and then notifies Bugsnag if all the previous tasks succeed
```

## Support

- [Search open and closed issues](https://github.com/bugsnag/grunt-bugsnag/issues?q=is%3Aissue) issues for similar problems
- [Report a bug or request a feature](https://github.com/bugsnag/grunt-bugsnag/issues/new)
- Email [support@bugsnag.com](mailto:support@bugsnag.com)

## Contributing

All contributors are welcome! See our [contributing guide](CONTRIBUTING.md).

## License

This module is free software released under the MIT License. See [LICENSE.txt](LICENSE.txt) for details.
