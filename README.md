# Highlight

Highlight is a library for simple interactive code highlighting.

## Factory

```javascript
highlight(
  text,
  mime = "application/json"
  defs = {}
)
```

`defs` is a configuration object. Current default settings:

```javascript
{
  ident: "  "
}
```

### JSON

* `code.element` - The rendered element;
* `code.parsed` - The parsed JSON;
* `code.path` - Contains every path with its HTMLElement and its value;
* `code.hover(listener)` - The "hover" event handler;
* `code.leave(listener)` - The "leave" event handler.

### XML

* `code.element` - The rendered element;
* `code.parsed` - The parsed XML as an object tree;
* `code.path` - An empty object;
* `code.hover(listener)` - The "hover" event handler;
* `code.leave(listener)` - The "leave" event handler.

`listener` is a function that takes three parameters:

* `element` the HTMLElement that is being listened;
* `path` the JSON path or XML tag name of the data element;
* `value` the value of the data element.

License: MIT