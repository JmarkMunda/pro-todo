import {useState} from "react";

const useDropdown = () => {
  const [selectedDropdown, setSelectedDropdown] = useState("desc");

  const dropdownItems = [
    {
      label: "asc",
      value: "asc",
    },
    {
      label: "desc",
      value: "desc",
    },
  ];

  const onDropdownChange = (value: string) => setSelectedDropdown(value);

  return {dropdownItems, selectedDropdown, onDropdownChange};
};
export default useDropdown;
