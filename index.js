var semver = require('semver');

var NVM_ENV = {
  MANPATH: process.env.MANPATH,
  NVM_BIN: process.env.NVM_BIN,
  NVM_PATH: process.env.NVM_PATH,
  PATH: process.env.PATH
}

module.exports = function (version) {
  if (!version || !semver.valid(version)) throw Error('Invalid version ' + version);
  version = 'v' + semver.clean(version);

  var env = Object.assign({}, NVM_ENV);
  Object.keys(env).forEach(function (key) {
    env[key] = (env[key] || '').replace(/(node(\\|\/))v(\d+\.)?(\d+\.)?(\*|\d+)/g, '$1' + version);
  });

  return Object.assign({}, process.env, env);
}
