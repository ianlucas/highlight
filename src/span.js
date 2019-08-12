function span(text, class_name) {
  const element = document.createElement("span");
  element.className = `hl-${class_name}`;
  element.textContent = text;
  return element;
}

export default span