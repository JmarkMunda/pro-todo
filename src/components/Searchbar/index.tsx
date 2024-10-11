import React from "react";
import Input from "../Input";
import {Props} from "./types";

const SearchBar = ({searchValue, onSearchChange}: Props) => {
  return (
    <Input
      value={searchValue}
      onChangeText={onSearchChange}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
