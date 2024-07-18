import "./App.css";

const ButtonsContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "00",
    "0",
    "+",
    "--",
    "=",
    ".",
    
    
  ];
  return (
    <div className="buttonsContainer">
      {buttonNames.map((buttonName) => 
        <button  className ="button" onClick={() => onButtonClick(buttonName)}>
          {buttonName} 
        </button>
      )}
    </div>
  );
};

export default ButtonsContainer;
