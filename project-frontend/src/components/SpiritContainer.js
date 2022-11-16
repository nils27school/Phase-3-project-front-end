import React from "react"
import CocktailCard from "./CocktailCard"

function SpiritContainer({spiritCocktails}) {

    //This is where the cocktails fetched in the SpiritCards are displayed

    const list = spiritCocktails.map(cocktail => {
        return <CocktailCard key={cocktail.id} cocktailData={cocktail}/>
    })

    return(
        <div>
            {list}
        </div>
    )

}

export default SpiritContainer