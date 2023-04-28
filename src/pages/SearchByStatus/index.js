import { useState } from "react";
import StatusListBox from "../../componets/StatusListBox";
import "./SearchByStatus.css";
import Cards from "../../componets/Cards";
import Pagination from "../../componets/Pagination";
import { useEffect } from "react";

const SearchByStatus = () => {
  const statusList = ["SELECT", "Alive", "Dead", "Unknown"];

  const [charStatus, setCharStatus] = useState("");
 
  const searchStatus = (event) => {
    const value = event.target.value
    console.log({value});
  };

  const [repositories, setRespositories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { info, results } = repositories;
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${charStatus}`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      setRespositories(data);
    }
    fetchData();
  }, [api]);

  return (
    <div className="listbox" onChange={searchStatus}>
      <div>
          <StatusListBox
        item={statusList}
        valor={charStatus}
        aoAlterado={(valor) => setCharStatus(valor)}
        setPageNumber={setPageNumber}
      />
      </div>
      <Cards results={results} />
      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default SearchByStatus;
