import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function incrementCounter() {
    if(counter <= 20){
    console.log("you clicked me", counter);
    counter = counter + 1;
    setCounter(counter);
     }
  }

  function decrementCounter(){
    if(counter > 0){
    counter = counter - 1;
    setCounter(counter)
    }
  }

  return (
    <>
      <div>
        <h1>hello my first project</h1>
        <h2>counter : {counter}</h2>
        <button onClick={incrementCounter}>increment {counter}</button>
        <br />
        <button onClick={decrementCounter}>decrement {counter}</button>
        <p>{counter}</p>
      </div>
    </>
  );
}

export default App;
