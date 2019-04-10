/* yarn example/ */
import read from '../src'

(async () => {
  const res = await read('example/data.txt')
  console.log(res)
})()