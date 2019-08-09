function span(text, class_name) {
  const element = document.createElement("span");
  element.className = class_name;
  element.textContent = text;
  return element;
}

export default Object.freeze(span);