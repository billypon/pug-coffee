## Setup filter

Install dependencies

```sh
npm install coffeescript uglify-es
```

Set as pug filter

```javascript
const pug = require('pug');
pug.filters.coffee = require('pug-coffee')();
```

Set filename for coffeescript when render

```javascript
pug.filters.coffee = require('pug-coffee')(function (options, args) {
  options.filename = args.filename;
});
```

## Use filter

```pug
:coffee
  alert 'hello'
```

Output:

```javascript
function () {
  return alert('hello');
}
```

Pretty render.

```pug
:coffee(uglify=false)
  alert 'hello'
```

Output without uglify.

Render with bare mode.

```pug
:coffee(bare=true)
  alert 'hello'
```

Output:

```javascript
alert('hello');
```

Render with script tag.

```pug
:coffee(bare=true wrap=true)
  alert 'hello'
```

Output:

```html
<script>alert('hello');</script>
```
