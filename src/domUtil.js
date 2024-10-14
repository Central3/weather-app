export default function createElement(tag, attributes = {}, textContent = "") {
  const element = document.createElement(tag);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  if (textContent) element.textContent = textContent;

  return element;
}
