import React from "react";

function ButtonAdd(props) {
  return (
    <>
      <button {...props}>{props.children}</button>
    </>
  );
}

export default ButtonAdd;
