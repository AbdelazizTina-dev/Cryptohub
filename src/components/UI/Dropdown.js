import { useState } from "react";
import Select from "react-select";
const Dropdown = ({ options, sendChangeToParent }) => {
  const [selected, setSelected] = useState("");

  const selectHandler = (selectedOption) => {
    setSelected(selectedOption);
    sendChangeToParent(selectedOption);
  };

  return (
    <Select
      className="w-72 p-6"
      defaultValue={selected}
      onChange={selectHandler}
      options={options}
    />
  );
};

export default Dropdown;
