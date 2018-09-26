import { createReadStream } from 'fs'
import { collect } from 'catchment'

/**
 * Read a file.
 * @param {string} path The path to the file to read.
 */
export default async function read(path) {
  const rs = createReadStream(path)
  /** @type {string} */
  const res = await collect(rs)
  return res
}

/**
 * Read a file as a buffer.
 * @param {string} path The path to the file to read.
 */
export async function readBuffer(path) {
  const rs = createReadStream(path)
  /** @type {Buffer} */
  const res = await collect(rs, { binary: true })
  return res
}