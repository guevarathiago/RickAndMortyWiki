import { useEffect, useState } from "react";
import "./Characters.css";
import Cards from "../../componets/Cards";
import Pagination from "../../componets/Pagination";

const Characters = () => {
  const [repositories, setRespositories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1) 
  const {info, results} = repositories
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      setRespositories(data);
    }
    fetchData();
    
  }, [api]);

  return (
    <div>
      <Cards results={results} />
      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
      
     
    </div>
);
};

export default Characters;
