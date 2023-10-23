import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

function Units({ units }) {
  console.log(units);
  return (
    <>
      {units.map((unit) => (
        <DropdownItem>
          Bài {unit.id}: {unit.title}
        </DropdownItem>
      ))}
    </>
  );
}

export default Units;
