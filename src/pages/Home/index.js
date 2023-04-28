import { useState } from "react";

import HomeSearch from "../../componets/HomeSearch";
import Texto from "../../componets/Texto";

import "./Home.css";
import { useEffect } from "react";
import Pagination from "../../componets/Pagination";
import Cards from "../../componets/Cards";



const Home = () => {
  
  const [name, setName] = useState("");
  const [charStatus, setCharStatus] = useState("");
  

  const [repositories, setRespositories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { info, results } = repositories;
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${charStatus}&name=${name}`
  
  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      setRespositories(data);
    }
    fetchData();
  }, [api]);

  const searchStatus = (event) => {
   
    setCharStatus(event)
    
  }

  const newHomeSearch = (character) => {
    
    setName(character);
    
  };


  return (
    <div className="home">
     <Texto />
      <HomeSearch
        searchHome={(name) => newHomeSearch(name)}
        searchStatus={(status) => searchStatus(status)}
        setPageNumber={setPageNumber}
       
      />
      
      <Cards results={results} />
      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
      
    </div>
  );
};

export default Home
