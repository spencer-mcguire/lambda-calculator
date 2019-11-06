import React from "react";

const SpecialButton = (props) => {
  return (
    <>
    <button> <span>{props.sButton}</span> </button>
    </>
  );
};

export default SpecialButton;

/* Display a button element rendering the data being passed down from the parent container on props */