import React from "react";
import { NavLink } from "react-router-dom"
import HappyHour from "../Assets/HappyHour.jpg"

function NavBar() {
    return (
        <div>
        <nav id="navbar" className="NavBar">
        <img src={HappyHour} className="img"/>
            {/* <h1 id="title">Cocktail Hour</h1> */}
            <NavLink to="/">Cocktail Menu</NavLink>
            <NavLink to="/spirits">Spirits</NavLink>
            <NavLink to="/glassware">Glassware</NavLink>
            <NavLink to="/suggestCocktail">Cocktail Suggestions</NavLink>
        </nav>
        
        </div>
    )
}

export default NavBar;