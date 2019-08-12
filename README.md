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

The `defs` is a configuration object. Current default settings:

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