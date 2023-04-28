import { useState } from "react";
import Button from "../Button";
import NameInput from "../NameInput";
import "./SearchName.css";

const SearchName = (props) => {
  const [name, setName] = useState("");

  const nameSearch = (event) => {
    event.preventDefault();
    props.nameSearch(name)
    
  }

  return (
    <div className="search-name">
      <NameInput
        label="Search for Characters"
        valor={name}
        aoAlterado={(valor) => setName(valor)}
      />
      <section onClick={nameSearch} className="button">
        <Button text="Search">Search</Button>
      </section>
    </div>
  );
};

export default SearchName;
