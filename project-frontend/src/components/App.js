import React from "react";
import CocktailMenu from "./CocktailMenu";
import NavBar from "./NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Spirits from "./Spirits";
import Glassware from "./Glassware";
import CocktailForm from "./CocktailForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path= "/" element={<CocktailMenu/>}/>
          <Route path="/spirits" element={<Spirits/>}/>
          <Route path="/glassware" element={<Glassware/>}/>
          <Route path="/suggestCocktail" element={<CocktailForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
