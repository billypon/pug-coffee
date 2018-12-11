## Setup filter

```javascript
const pug = require('pug');
pug.filters.coffee = require('pug-coffee')();
```

Set filename for coffeescript when render

```javascript
pug.filters.coffee = require('pug-coffee')(function (coffeeOptions, options) {
  coffeeOptions.filename = options.filename;
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
