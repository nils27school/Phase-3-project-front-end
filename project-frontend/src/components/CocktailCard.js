import React from "react"

function CocktailCard({cocktailData}) {
    const {name, ingredients, description} = cocktailData
return(
    <div>
        <p>{name}</p>
        <p>{ingredients}</p>
        <p>{description}</p>
    </div>
)
}

export default CocktailCard