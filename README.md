# webloc-parser
Allows parsing of Apple XML and binary plist webloc files.

## Examples

### With filenames
```js
const weblocParser = require('webloc-parser');

weblocParser.getUrlFromFile('/path/to/some.webloc').then(url => {
    console.log(url);
});
```

### With data buffers
```js
const weblocParser = require('webloc-parser');
const fs = require('fs');

fs.readFile('/path/to/some.webloc', function(err, data) {
    weblocParser.getUrl(data).then(url => {
        console.log(url);
    });
});
```