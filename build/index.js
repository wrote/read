const { createReadStream } = require('fs');
const { collect } = require('catchment');

/**
 * Read a file.
 * @param {string} path The path to the file to read.
 */
               async function read(path) {
  const rs = createReadStream(path)
  /** @type {string} */
  const res = await collect(rs)
  return res
}

/**
 * Read a file as a buffer.
 * @param {string} path The path to the file to read.
 */
       async function readBuffer(path) {
  const rs = createReadStream(path)
  /** @type {Buffer} */
  const res = await collect(rs, { binary: true })
  return res
}

module.exports = read
module.exports.readBuffer = readBuffer
//# sourceMappingURL=index.js.map