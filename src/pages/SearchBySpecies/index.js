import { useState } from "react";
import SpeciesListBox from "../../componets/SpeciesListBox";
import "./SearchBySpecies.css";
import { useEffect } from "react";
import Cards from "../../componets/Cards";
import Pagination from "../../componets/Pagination";

const SearchBySpecies = () => {
  const species = [
    "SELECT",
    "Human",
    "Alien",
    "Mythological Creature",
    "Humanoid",
    "Poopybutthole",
    "Robot",
    "Disease",
    "Animal",
    "Cronenberg",
  ];

  const [charSpecies, setCharSpecies] = useState("");

  const searchSpecies = (event) => {
    const { value } = event.target;
    setCharSpecies(value);
    console.log({ value });
  };

  const [repositories, setRespositories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { info, results } = repositories;
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&species=${charSpecies}`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      setRespositories(data);
    }
    fetchData();
  }, [api]);

  return (
    <div className="species-search" onChange={searchSpecies}>
      <div>
        <SpeciesListBox
          item={species}
          valor={charSpecies}
          aoAlterado={(valor) => setCharSpecies(valor)}
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

export default SearchBySpecies;
