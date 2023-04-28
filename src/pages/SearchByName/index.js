import { useState } from "react";
import SearchName from "../../componets/SearchName";
import { useEffect } from "react";
import Cards from "../../componets/Cards";
import './SearchByName.css'
import Pagination from "../../componets/Pagination";


const SearchByName = () => {
  
  const [names, setNames] = useState("")
  const [repositories, setRespositories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1) 
  const {info, results} = repositories
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${names}`

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      setRespositories(data);
    }
    fetchData();
  }, [api]);
  

  const newNameSearch = (name) => {
    setNames(name)
    console.log(names)
    
  }
    
  
  return (
      <div className="search-by-name">
        <SearchName nameSearch={name => newNameSearch(name)}/>
        <Cards results={results} />
        <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
      </div>
      
      )
  };
  
export default SearchByName;