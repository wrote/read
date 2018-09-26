## API

The package is available by importing its default function `read`, and named function `readBuffer`:

```js
import read, { readBuffer } from '@wrote/read'
```

%~%

```## async read => string
[
  ["path", "string"]
]
```

Read the file as a string.

%EXAMPLE: example/example.js, ../src => @wrote/read%
%FORK example example/example%

%~%

```## async readBuffer => Buffer
[
  ["path", "string"]
]
```

Read the file as a Buffer.

%EXAMPLE: example/buffer.js, ../src => @wrote/read%
%FORK example example/buffer%

%~%