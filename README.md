# Highlight

Highlight is a library for simple interactive code highlighting.

## Factory

```javascript
highlight(
  text,
  defs = {},
  mime = "application/json"
)
```

The `defs` is a configuration object. Here's the default settings:

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

License: MIT