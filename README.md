# nvm-env [![Build Status](https://travis-ci.org/7anshuai/nvm-env.svg?branch=master)](https://travis-ci.org/7anshuai/nvm-env)
Setting nvm environment variables for `child_process`

> :warning: This package has been deprecated. Use `nvm exec` instead of.

## Installation

```bash
$ npm install nvm-env
```

## Usage

```javascript
var exec = require('child_process').exec;
var nvmEnv = require('nvm-env');

console.log(process.version); // "v6.12.0"
console.log(process.env.NVM_BIN); // "/path/to/.nvm/versions/node/v6.12.0/bin"

var env = nvmEnv('v8.9.3');
console.log(env.NVM_BIN); // "/path/to/.nvm/versions/node/v8.9.3/bin"

exec('node -e "console.log(process.version)"', {env: env}, function (err, stdout, stderr) {
   console.log(err, stdout); // "v8.9.3"
});
```

## Reference

- [Node.js Child Process EXEC Command Failed with NVM](https://stackoverflow.com/questions/43725871/nodejs-child-process-exec-command-failed-with-nvm-permission-denied-osx)
- [如何在低版本 Node 运行高版本 Node 子进程](http://www.alloyteam.com/2017/05/how-to-lower-version-node-running-node-process/)

## License
MIT
