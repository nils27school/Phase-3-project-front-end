import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink to="/">Cocktail Menu</NavLink>
            <NavLink to="/spirits">Spirits</NavLink>
            <NavLink to="/glassware">Glassware</NavLink>
            <NavLink to="/suggestCocktail">Suggest a New Drink</NavLink>
        </nav>
    )
}

export default NavBar;