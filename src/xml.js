import span from "./span";
import text from "./text";

function xml(source, defs) {
  const pre = document.createElement("pre");
  const parser = new DOMParser();
  const doc = parser.parseFromString(source, "text/xml");
  const hover_array = [];
  const leave_array = [];
  let error_parsing = false;

  function handle_hover(element, path, value) {
    hover_array.forEach(function (listener) {
      listener(element, path, value);
    });
  }

  function handle_leave(element, path, value) {
    leave_array.forEach(function (listener) {
      listener(element, path, value);
    });
  }

  function walk(
    element,
    parent = undefined,
    identation = ""
  ) {
    const open_element = span("", "tag");
    const close_element = span("", "tag")
    const attributes = {};
    const attributes_array = [];
    const inner_identation = identation + defs.ident;
    const tag = element.tagName;
    const children = [];
    let as_object = { tag, attributes, children, parent };
    let inner_text = undefined;
    let i;

// Set the error flag to true if the parser encounters any error.

    if (tag === "parsererror") {
      error_parsing = true;
      return undefined;
    }

    open_element.addEventListener("mouseenter", function () {
      handle_hover(open_element, tag, as_object);
    });

    open_element.addEventListener("mouseleave", function () {
      handle_leave(open_element, tag, as_object);
    });

    for (i = 0; i < element.attributes.length; i += 1) {
      const attr = element.attributes[i];
      const {name, value} = attr;
      attributes[name] = value;
      attributes_array.push({ name, value });
    }

    pre.appendChild(text(identation));
    open_element.appendChild(text("<"));
    open_element.appendChild(span(tag, "name"));

    attributes_array.forEach(function (attribute) {
      open_element.appendChild(text(" "));
      open_element.appendChild(span(attribute.name, "attr"));
      open_element.appendChild(text("="));
      open_element.appendChild(span(`"${attribute.value}"`, "string"));
    });

    open_element.appendChild(text(">"));
    pre.appendChild(open_element);

    if (element.children.length > 0) {
      pre.appendChild(text("\n"));
    }

    for (i = 0; i < element.children.length; i += 1) {
      children.push(walk(element.children[i], as_object, inner_identation));
    }

    if (children.length === 0) {
      inner_text = element.textContent.trim();
      pre.appendChild(text(inner_text));
    } else {
      pre.appendChild(text(identation));
    }

    close_element.appendChild(text("<"));
    close_element.appendChild(span(tag, "name"));
    close_element.appendChild(text("/>"));

    pre.appendChild(close_element);
    pre.appendChild(text("\n"));

    as_object.text = inner_text;

    return Object.freeze(as_object);
  }

  function hover(listener) {
    hover_array.push(listener);
  }

  function leave(listener) {
    leave_array.push(listener);
  }

  const parsed = walk(doc.firstElementChild);

  pre.className = "hl-pre";

// If there are any error in the parsing, we will put the source text
// inside the pre element.

  if (error_parsing) {
    pre.className += " invalid";
    pre.textContent = source;
  }

  return Object.freeze({
    element: pre,
    parsed,
    hover,
    leave
  });
}

export default xml;