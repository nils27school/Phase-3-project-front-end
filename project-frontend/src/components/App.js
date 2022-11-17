import React, {useState, useEffect} from "react";
import CocktailMenu from "./CocktailMenu";
import NavBar from "./NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Spirits from "./Spirits";
import Glassware from "./Glassware";
import CocktailForm from "./CocktailForm";

function App() {
  const [cocktails, setCocktails] = useState([])
  const [selectedCocktail, setSelectedCocktail] = useState(null)

  useEffect(() => {
      fetch('http://localhost:9292/cocktails')
      .then(r => r.json())
      .then(data => setCocktails(data))
  },[])

  function handleEditForm(name, value) {
    setSelectedCocktail({
      ...selectedCocktail,
      [name]: value,
    })
  }

  function handleEditCocktail(updatedCocktail) {
    const updatedCocktails = cocktails.map((cocktail) =>
      cocktail.id === updatedCocktail.id ? updatedCocktail : cocktail
    );
    setSelectedCocktail(updatedCocktail);
    setCocktails(updatedCocktails);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Cocktail Hour</h1>
        <NavBar/>
        <Routes>
          <Route exact path= "/" element={<CocktailMenu cocktails={cocktails} setCocktails={setCocktails} setSelectedCocktail={setSelectedCocktail}/>}/>
          <Route path="/spirits" element={<Spirits/>}/>
          <Route path="/glassware" element={<Glassware/>}/>
          <Route path="/suggestCocktail" element={<CocktailForm cocktails={cocktails} setCocktails={setCocktails} editCocktail={handleEditCocktail} handleEditForm={handleEditForm} selectedCocktail={selectedCocktail}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
