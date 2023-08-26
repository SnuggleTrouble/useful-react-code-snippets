import React, { useState } from "react";

import "./ValidityChecker.css";

export default function ValidityChecker() {
  const [messageValidity, setMessageValidity] = useState("Invalid");
  const messageChangeHandler = (event) => {
    const value = event.target.value;
    if (value.trim().length < 5) {
      setMessageValidity("Invalid");
    } else {
      setMessageValidity("Valid");
    }
  };
  return (
    <form>
      <h2>Validity Checker</h2>
      <label>Your message</label>
      <input
        type="text"
        onChange={messageChangeHandler}
      />
      <p>{messageValidity} message</p>
    </form>
  );
}
