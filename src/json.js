import span from "./span";
import text from "./text";

function json(source, defs) {

// The json factory is the one responsible for handling JSON data.
// It will parse the given JSON, then will proceed to iterate over each element of it.
// At each iteration, it will do the proper code highlighting.

  const pre = document.createElement("pre");
  const path_object = {};
  const hover_array = [];
  const leave_array = [];
  let parsed;

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

  function handle_object(object, path, identation) {
    const keys = Object.keys(object);
    const inner_identation = identation + defs.ident;

    pre.appendChild(text("{\n"));

    keys.forEach(function (key, index) {
      const value = object[key];
      const this_path = `${path}.${key}`;
      const key_element = span(`"${key}"`, "key");

      path_object[this_path] = {
        element: key_element,
        value
      };

      pre.appendChild(text(inner_identation));
      pre.appendChild(key_element);
      pre.appendChild(text(": "));

      key_element.addEventListener("mouseenter", function () {
        handle_hover(key_element, this_path, value);
      });

      key_element.addEventListener("mouseleave", function () {
        handle_leave(key_element, this_path, value);
      });

      walk(value, this_path, inner_identation);

      if (keys[index + 1]) {
        pre.appendChild(text(", "));
      }

      pre.appendChild(text("\n"));
    });

    pre.appendChild(text(`${identation}}`));
  }

  function handle_array(array, path, identation) {
    pre.appendChild(text("["));

    array.forEach(function (value, index) {
      const this_path = `${path}.${index}`;

      walk(value, this_path, identation);

      if (array[index + 1]) {
        pre.appendChild(text(", "));
      }
    });

    pre.appendChild(text("]"));
  }

  function handle_string(string) {
    pre.appendChild(span(`"${string}"`, "string"));
  }

  function handle_number(number) {
    pre.appendChild(span(number, "number"));
  }

  function handle_boolean(boolean) {
    pre.appendChild(span(boolean, "boolean"));
  }

  function walk(object, path = "", identation = "") {
    if (object === null) {
      return handle_boolean(object);

    } else if (typeof object === "string") {
      return handle_string(object);

    } else if (typeof object === "number") {
      return handle_number(object);

    } else if (typeof object === "boolean") {
      return handle_boolean(object);

    } else if (Array.isArray(object)) {
      return handle_array(object, path, identation);

    } else if (typeof object === "object") {
      return handle_object(object, path, identation);

    } else {
      throw new Error("walk: cannot walk");
    }
  }

  function hover(listener) {
    hover_array.push(listener);
  }

  function leave(listener) {
    leave_array.push(listener);
  }

  pre.className = "hl-pre";

// If there are any error in the parsing, we will put the source text
// inside the pre element.

  try {
    parsed = JSON.parse(source);
    walk(parsed);
  } catch (e) {
    pre.className += " invalid";
    pre.textContent = source;
    parsed = source;
  }

  return Object.freeze({
    element: pre,
    path: path_object,
    hover,
    leave,
    parsed
  });
}

export default json;