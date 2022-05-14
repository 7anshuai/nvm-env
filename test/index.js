var assert = require('assert');
var path = require('path');
var nvmEnv = require('../index');

var errorHandler = function (err) {
  if ((err instanceof Error) && /Invalid version/.test(err)) return true;
}

describe('Setting NVM environment', function () {
  it('throw invalid version errors', function () {
    assert.throws(
      function () {
        nvmEnv('8.x');
      },
      errorHandler,
      'unexpected error'
    );
    assert.throws(
      function () {
        nvmEnv('8');
      },
      errorHandler,
      'unexpected error'
    );
    assert.throws(
      function () {
        nvmEnv(8);
      },
      errorHandler,
      'unexpected error'
    );
  });

  it('returns the expected NVM env variables', function () {
    var env = nvmEnv('8.9.0');
    assert.ok(env);
    //assert.ok(/v8\.9\.0/.test(env.MANPATH));
    assert.ok(/v8\.9\.0/.test(env.PATH));
    assert.equal(env.NVM_BIN, path.join(process.env.NVM_DIR, 'versions/node/v8.9.0/bin'));
    assert.equal(env.NVM_INC, path.join(process.env.NVM_DIR, 'versions/node/v8.9.0/include/node'));
  });
});
