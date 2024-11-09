export function createElement(tag, attributes = {}, textContent = "") {
  const element = document.createElement(tag);

  Object.entries(attributes).forEach((item) => {
    element.setAttribute(item[0], item[1]);
  });

  if (textContent) element.textContent = textContent;

  return element;
}

export function appendChildren(parent, ...children) {
  children.forEach((child) => {
    parent.appendChild(child);
  });
}
