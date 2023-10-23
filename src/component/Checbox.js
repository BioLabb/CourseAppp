import React from "react";
import Check from "./Check";

function Checkbox({ id, name }) {
  const type = "checkbox"
  return <Check type={type} id={id} name={name} />;
}

export default Checkbox;
