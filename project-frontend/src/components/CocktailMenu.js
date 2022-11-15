import React, {useState, useEffect} from "react";
import CocktailCard from "./CocktailCard"

function CocktailMenu() {
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/cocktails')
        .then(r => r.json())
        .then(data => setCocktails(data))
    },[])

    const cocktailList = cocktails.map(cocktail => {
        return <CocktailCard key={cocktail.id} cocktailData={cocktail}/>
    })

    return(
        <div>
        
        <h3>Menu</h3>
        {cocktailList}
        </div>
    )
}

export default CocktailMenu