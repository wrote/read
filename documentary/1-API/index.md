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

%EXAMPLE: example, ../src => @wrote/read%
%FORK example%

%~%

```## async readBuffer => Buffer
[
  ["path", "string"]
]
```

Read the file as a Buffer.

%EXAMPLE: example/buffer, ../src => @wrote/read%
%FORK example/buffer%

%~%