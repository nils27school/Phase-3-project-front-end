import React from "react"

function CocktailCard({cocktailData, removeCocktail, setSelectedCocktail}) {
    const {name, ingredients, description, id, image} = cocktailData

    function handleDelete() {
        fetch(`http://localhost:9292/cocktails/${id}`, {
            method: "Delete",
        })
        removeCocktail(id)
    }

    function handleClick() {
        setSelectedCocktail(cocktailData)
    }

return(
    <div className="cards">
        <h3>{name}</h3> 
        {/* <img src={require(`../Assets/${image.string}.jpg`)}/> */}
        <p>"{description}"</p>
        <h4>Ingredients:</h4>
        <p>- {ingredients}</p>
        <button onClick={handleDelete} className="button">Delete</button>
        <button type="button" onClick={handleClick} className="button">Edit Cocktail</button>

    </div>
)
}

export default CocktailCard