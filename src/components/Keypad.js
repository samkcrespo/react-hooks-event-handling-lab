import React from "react";

function Keypad() {
  function onChange(event) {
    console.log("Entering password...");
  }
  return <input onChange={onChange} type="password" />;
}

export default Keypad; // Code Keypad Component Here
