import React, { useState } from "react";

import "./DynamicCSSClasses.css";

export default function DynamicCSSClasses() {
  const [isStyled, setIsStyled] = useState(false);

  const styleHandler = () => {
    setIsStyled((isStyled) => !isStyled);
  };
  return (
    <div>
      <h2>Dynamic CSS Class</h2>
      <p className={`${!isStyled ? "active" : ""}`}>Style me!</p>
      <button onClick={styleHandler}>Toggle style</button>
    </div>
  );
}
