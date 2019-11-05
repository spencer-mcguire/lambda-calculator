import React, {useState} from "react";


const NumberButton = (props) => {
  return (
    <>
    <button onClick={() => props.addToDisplay(props.nButton)}className="button, numbers"><span>{props.nButton}</span></button>
    </>
  );
};

export default NumberButton;
/* Display a button element rendering the data being passed down from the parent container on props
onClick={() => props.setNums(nums)}
*/