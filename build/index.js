const { debuglog } = require('util');

const LOG = debuglog('@wrote/read')

/**
 * Read a file.
 * @param {Config} config Options for the program.
 * @param {boolean} config.shouldRun A boolean option.
 */
               async function read(config) {
  const {
    type,
  } = config
  LOG('@wrote/read called with %s', type)
  return type
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} shouldRun A boolean option.
 */


module.exports = read
//# sourceMappingURL=index.js.map