import json from "./json";
import overwrite from "./overwrite";
import xml from "./xml";

function highlight(
  text,
  mime = "application/json",
  defs = {}
) {
  defs = overwrite(defs);
  if (mime === "application/json") {
    return json(text, defs);
  } else if (mime === "text/xml") {
    return xml(text, defs);
  } else {
    throw new Error("highlight: unsupported mime type");
  }
}

export default Object.freeze(highlight);