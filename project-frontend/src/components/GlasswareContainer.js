import React from "react"
import CocktailCard from "./CocktailCard"

function GlasswareContainer({glassCocktails}) {

    //This is where the cocktails fetched in the glasswareCards are displayed

    const list = glassCocktails.map(cocktail => {
        return <CocktailCard key={cocktail.id} cocktailData={cocktail}/>
    })

    return(
        <div >
            
            <div class="container">
            <h2 id="menu-title">Cocktails</h2>
                <div class="cards">
                    {list}
                </div>
            </div>
        </div>
    )

}

export default GlasswareContainer