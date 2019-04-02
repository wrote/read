# @wrote/read

[![npm version](https://badge.fury.io/js/%40wrote%2Fread.svg)](https://npmjs.org/package/@wrote/read)

`@wrote/read` is a package to read a file as a string or a Buffer.

```sh
yarn add -E @wrote/read
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async read(path: string): string`](#async-readpath-string-string)
- [`async readBuffer(path: string): Buffer`](#async-readbufferpath-string-buffer)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function `read`, and named function `readBuffer`:

```js
import read, { readBuffer } from '@wrote/read'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `async read(`<br/>&nbsp;&nbsp;`path: string,`<br/>`): string`

Read the file as a string.

```js
/* yarn example/ */
import read from '@wrote/read'

(async () => {
  const res = await read('example/data.txt')
  console.log(res)
})()
```
```
Hello World
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `async readBuffer(`<br/>&nbsp;&nbsp;`path: string,`<br/>`): Buffer`

Read the file as a Buffer.

```js
/* yarn example/ */
import { readBuffer } from '@wrote/read'

(async () => {
  const res = await readBuffer('example/data.txt')
  console.log(res)
})()
```
```
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://wrote.cc">Wrote</a> 2019</th>
    <th>
      <a href="https://wrote.cc">
        <img src="https://avatars3.githubusercontent.com/u/40831417?s=100" width="100" alt="Wrote" />
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>