import { equal, ok, throws } from 'zoroaster/assert'
import TempContext from 'temp-context'
import read, { readBuffer } from '../../src'

/** @type {Object.<string, (tc: TempContext)>} */
const T = {
  context: TempContext,
  async 'reads a file'({ write }) {
    const t = 'test-data'
    const pp = await write(t, 'data.temp')
    const res = await read(pp)
    equal(res, t)
  },
  async 'reads a file as a buffer'({ write }) {
    const t = 'test-data'
    const pp = await write(t, 'data.temp')
    const res = await readBuffer(pp)
    ok(res instanceof Buffer)
    equal(`${res}`, t)
  },
  async 'throws an error with correct stack'() {
    await throws({
      fn: read,
      args: ['missing.txt'],
      stack(err) {
        ok(/at read/.test(err))
      },
    })
  },
}

export default T