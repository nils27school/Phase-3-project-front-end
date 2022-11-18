import React from "react"
import CocktailCard from "./CocktailCard"

function SpiritContainer({spiritCocktails}) {

    //This is where the cocktails fetched in the SpiritCards are displayed

    const list = spiritCocktails.map(cocktail => {
        return <CocktailCard key={cocktail.id} cocktailData={cocktail}/>
    })

    return(
        <div className="container">
            <h2 id="menu-title">Cocktails</h2>
            <div className="cards">
                {list}
            </div>
        </div>
    )

}

export default SpiritContainer