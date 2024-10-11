import {useState} from "react";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (text: string) => setSearchValue(text);

  return {searchValue, onSearchChange};
};

export default useSearch;
