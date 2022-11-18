import React from "react"
import CocktailCard from "./CocktailCard"

function SpiritContainer({spiritCocktails}) {

    //This is where the cocktails fetched in the SpiritCards are displayed

    const list = spiritCocktails.map(cocktail => {
        return <CocktailCard key={cocktail.id} cocktailData={cocktail}/>
    })

    return(
        <div class="container">
            <h2 id="menu-title">Cocktails</h2>
            <div class="cards">
                {list}
            </div>
        </div>
    )

}

export default SpiritContainer