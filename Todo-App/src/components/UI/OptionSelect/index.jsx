import React from "react";

function index(props) {
  return (
    <>
      <div className="select">
        <select name="select" {...props} id="important">
          <option defaultValue={"Choose"}>Response of task</option>
          <option value="important">Important</option>
          <option value="Not Necassary">Not Necassary</option>
          <option value="Vital">Vital</option>
        </select>
      </div>
    </>
  );
}

export default index;
