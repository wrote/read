/* yarn example/ */
import { readBuffer } from '../src'

(async () => {
  const res = await readBuffer('example/data.txt')
  console.log(res)
})()