import { debuglog } from 'util'

const LOG = debuglog('@wrote/read')

/**
 * Read a file.
 * @param {Config} config Options for the program.
 * @param {boolean} config.shouldRun A boolean option.
 */
export default async function read(config) {
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
