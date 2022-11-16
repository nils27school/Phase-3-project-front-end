import React, {useState, useEffect} from "react";
import CocktailCard from "./CocktailCard"

function CocktailMenu() {
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/cocktails')
        .then(r => r.json())
        .then(data => setCocktails(data))
    },[])

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