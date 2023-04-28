import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Characters from "./pages/Characters";
import SearchByName from "./pages/SearchByName";
import Home from "./pages/Home";
import SearchByStatus from "./pages/SearchByStatus";
import Header from "./componets/Header";
import SearchBySpecies from "./pages/SearchBySpecies";
import Navbar from "./pages/Navbar";




function App() {
 
 
  return (
  
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="Characters" element={<Characters />} />
        <Route path="SearchByName" element={<SearchByName />} />
        <Route path="SearchByStatus" element={<SearchByStatus />} />
        <Route path="SearchBySpecies" element={<SearchBySpecies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
