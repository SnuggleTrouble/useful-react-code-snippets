import React, { useState } from "react";

import "./DynamicInlineStyles.css"

export default function DynamicInlineStyles() {
  const [isStyled, setIsStyled] = useState(false);

  const styleHandler = () => {
    setIsStyled((isStyled) => !isStyled);
  };
  return (
    <div>
      <h2>Dynamic Inline Style</h2>
      <p style={{ color: !isStyled ? "red" : "white" }}>Style me!</p>
      <button onClick={styleHandler}>Toggle style</button>
    </div>
  );
}
