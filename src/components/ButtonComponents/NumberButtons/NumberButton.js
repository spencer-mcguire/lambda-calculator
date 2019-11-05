import React from "react";

const NumberButton = (props) => {
  return (
    <>
    <button><span>{props.nButton}</span></button>
    </>
  );
};

export default NumberButton;
/* Display a button element rendering the data being passed down from the parent container on props */