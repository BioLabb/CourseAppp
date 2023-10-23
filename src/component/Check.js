import React from "react";


function Check ({type, id,name}){
  return (
    <div>
        <input className="me-2" type={type} id = {`${name}`} name = {`${name}`} value={`${id}`} />
        <label htmlFor={`${name}`}>{name}</label>
    </div>
  )
};

export default Check;