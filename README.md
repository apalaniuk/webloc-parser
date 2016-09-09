# webloc-parser
Allows parsing of Apple XML and binary plist webloc files on any platform.

## Usage

```js
const weblocParser = require('webloc-parser');

weblocParser.getUrlFromFile('./path/to/my.webloc').then(url => {
    console.log("Got the URL! It's " + url);
});
```