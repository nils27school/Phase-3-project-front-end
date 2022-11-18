import React from "react";
import CocktailCard from "./CocktailCard"

function CocktailMenu({cocktails, setCocktails, setSelectedCocktail}) {

    function removeCocktail(id) {
        const newCocktails = cocktails.filter((cocktail) => cocktail.id !== id)
        setCocktails(newCocktails)
    }

    const cocktailList = cocktails.map(cocktail => {
        return <CocktailCard key={cocktail.id} cocktailData={cocktail} removeCocktail={removeCocktail} setSelectedCocktail={setSelectedCocktail}/>
    })

    return(
        <div className="container">
            <h2 id="menu-title">Cocktail Menu</h2>
            <div >
                <div className="cards">
                    {cocktailList}
                </div>
            </div>
        </div>
    )
}

export default CocktailMenu