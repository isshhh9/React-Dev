import { useState } from "react";

function App() {

  let [counter, setcounter] = useState(15);

  const addvalue = () => {
    setcounter(counter+1);
  };

  const decvalue = () => {
    setcounter(counter - 1);
  };

  return(
    <>
      <h1> Baisc Calculator</h1>
      <h2> Counter:{counter}</h2>
      <button onClick={addvalue}> Add value</button>
      <button onClick= {decvalue}>Dec Value</button>
    </>
  )
}

export default App;
