const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to the page",
};

const mainContainer = document.getElementById("root");

function customRender(reactElement, reactcontainer) {
  let element = reactElement;
  let container = reactcontainer;
  newElement = document.createElement(element.type);
  for (let key in element.props) {
    newElement.setAttribute(key, element.props[key]);
  }
  newElement.innerHTML = element.children;

  container.appendChild(newElement);
  console.log(container);
  console.log(newElement);
  console.log(element.children);
}

customRender(reactElement, mainContainer);
