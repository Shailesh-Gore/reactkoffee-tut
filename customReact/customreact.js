function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("href", reactElement.props.href);
  // domElement.setAttribute("target", reactElement.props.target);
  // container.appendChild(domElement);

  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") {
      continue;
    }
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  console.log(reactElement.props.length);
  // for (let i = 0; i < reactElement.props.length; i++) {
  //   if (reactElement.props[i] === "children") {
  //     continue;
  //   }
  //   domElement.setAttribute(i, reactElement.props[i]);
  // }

  // container.appendChild(domElement);
}

const reactElement = {
  type: "a", //it may be div,h1,or any other tag
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to go google",
};
const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer); //what to inject and where to inject ......mainly used to render the element
