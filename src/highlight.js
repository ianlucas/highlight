import json from "./json";
import overwrite from "./overwrite";

function highlight(
  text,
  defs = {},
  mime = "application/json"
) {
  defs = overwrite(defs);
  if (mime === "application/json") {
    return json(text, defs);
  }
}

export default Object.freeze(highlight);