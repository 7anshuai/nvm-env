# nvm-env
Setting nvm environment variables for `child_process`

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

## License
MIT
