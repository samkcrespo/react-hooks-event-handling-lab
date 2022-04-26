import React from "react";

function EyesOnMe() {
  function onFocus(event) {
    console.log("Good!");
  }
  function onBlur(event) {
    console.log("Hey! Eyes on me!");
  }
  return (
    <button onFocus={onFocus} onBlur={onBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;

// Code EyesOnMe Component Here
