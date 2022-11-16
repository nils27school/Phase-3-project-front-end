import React from "react"

function CocktailCard({cocktailData, removeCocktail}) {
    const {name, ingredients, description, id} = cocktailData

    function handleDelete() {
        fetch(`http://localhost:9292/cocktails/${id}`, {
            method: "Delete",
        })
        removeCocktail(id)
    }

return(
    <div>
        <h3>{name}</h3>        
        <p>"{description}"</p>
        <h4>Ingredients:</h4>
        <p>- {ingredients}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
)
}

export default CocktailCard