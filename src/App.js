import React from "react";

import ValidityChecker from "./components/ValidityChecker.js/ValidityChecker";
import IncrementCounter from "./components/IncrementCounter/IncrementCounter";
import ConditionalWarning from "./components/ConditionalWarning/ConditionalWarning";
import DynamicInlineStyles from "./components/DynamicInlineStyles/DynamicInlineStyles";
import DynamicCSSClasses from "./components/DynamicCSSClasses/DynamicCSSClasses";

function App() {
  return (
    <div>
      <ValidityChecker />
      <IncrementCounter />
      <ConditionalWarning />
      <DynamicInlineStyles />
      <DynamicCSSClasses />
    </div>
  );
}

export default App;
