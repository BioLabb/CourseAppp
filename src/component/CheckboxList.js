import { useEffect, useState } from "react";
import * as LevelRequire from "../api/LevelRequire";
import Checkbox from "./Checbox";

function CheckboxList({className, title, Items }) {
  // usesate Level
  const [level, setLevel] = useState();
  return (
    <div className={className} >
      {title && <h6 className="mb-1">{title}</h6>}
      <form>
        {Items.map((item) => (
          <Checkbox key={item.id} id={item.id} name={item.name} />
        ))}
      </form>
    </div>
  );
}

export default CheckboxList;
