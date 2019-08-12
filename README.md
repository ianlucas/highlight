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

* `highlight.element` - The rendered element;
* `highlight.parsed` - The parsed JSON;
* `highlight.hover(listener)` - The "hover" event handler;
* `highlight.leave(listener)` - The "leave" event handler.

### XML

* `highlight.element` - The rendered element;
* `highlight.parsed` - The parsed XML as an object tree;
* `highlight.hover(listener)` - The "hover" event handler;
* `highlight.leave(listener)` - The "leave" event handler.

`listener` is a function that takes three parameters:

* `element` the HTMLElement that is being listened;
* `path` the JSON path or XML tag name of the data element;
* `value` the value of the data element.

License: MIT