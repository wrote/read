import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import read from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof read, 'function')
  },
  async 'calls package without error'() {
    await read()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await read({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T