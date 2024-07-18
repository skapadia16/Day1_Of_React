import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  function onButtonClick(buttonText) {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
