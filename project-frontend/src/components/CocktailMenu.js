import React from "react";
import CocktailCard from "./CocktailCard"

function CocktailMenu({cocktails, setCocktails}) {

    function removeCocktail(id) {
        const newCocktails = cocktails.filter((cocktail) => cocktail.id !== id)
        setCocktails(newCocktails)
    }

    const cocktailList = cocktails.map(cocktail => {
        return <CocktailCard key={cocktail.id} cocktailData={cocktail} removeCocktail={removeCocktail}/>
    })

    return(
        <div>
            <h2>Menu</h2>
            {cocktailList}
        </div>
    )
}

export default CocktailMenu