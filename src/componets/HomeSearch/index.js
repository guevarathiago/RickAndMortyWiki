import "./HomeSearch.css";
import StatusListBox from "../StatusListBox";
import NameInput from "../NameInput";
import Button from "../Button";
import { useState } from "react";



const HomeSearch = (props) => {
  const statusList = ["SELECT", "Alive", "Dead", "Unknown"];

  const [name, setName] = useState("");
  const [charStatus, setCharStatus] = useState("");

  const  searchHome  = (event) => {
   
    props.searchHome(name);
    
   
  };

  const  searchStatus = (event) => {
    props.searchStatus(event.target.value)
  };


  return (
    <div className="search">
      
      <div onChange={searchStatus}>
      
        <StatusListBox
          item={statusList}
          valor={charStatus}
          aoAlterado={(valor) => setCharStatus(valor)}
          setPageNumber={props.setPageNumber}
        />
      </div>

      <NameInput
        label="Search Name"
        valor={name}
        aoAlterado={(valor) => setName(valor)}
        setPageNumber={props.setPageNumber}
      />
      <div onClick={searchHome}>
        <Button text="Search">Search</Button>
      </div>
    </div>
  );
};

export default HomeSearch;
