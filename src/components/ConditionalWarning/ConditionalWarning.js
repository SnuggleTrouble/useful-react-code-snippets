import React, { useState } from "react";

import "./ConditionalWarning.css";

export default function ConditionalWarning() {
  const [isDeleting, setIsDeleting] = useState(false);

  function deleteHandler() {
    setIsDeleting(true);
  }

  function proceedHandler() {
    setIsDeleting(false);
  }

  return (
    <div>
      <h2>Conditional Warning</h2>
      {isDeleting ? (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
      ) : (
        ""
      )}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
