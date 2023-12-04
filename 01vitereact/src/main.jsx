import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: "a", //it may be div,h1,or any other tag
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to go google",
// };

const custElement = (
    <a href="https://google.com">visit the site</a>
)

const anotherElement = "hello brother React";
const reactElement = React.createElement(
    'a',
    {href : 'https://google.com', target:'_blank'},
    'click here to visit',
    anotherElement
)

console.log(typeof custElement);
ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
 
)
