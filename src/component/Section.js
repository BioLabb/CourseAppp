import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import Unit from "./Units";
import Units from "./Units";

function Section({ numberSection, title, units }) {
  console.log(units);
  return (
    <div className="w-25 mb-1">
      <Dropdown>
        <DropdownToggle className="w-100 background-gray ">
          Chương {numberSection}: {title}
        </DropdownToggle>

        <DropdownMenu>
          <Units units={units}/>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Section;
