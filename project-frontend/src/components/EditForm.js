import React from "react"

function EditForm({editCocktail, handleEditForm, selectedCocktail}) {

    function handleInputChange(e) {
        handleEditForm(e.target.name, e.target.value)
    }

    // function handleInput2(e) {
    //     const {name, value} = e.target
    //     handleEditForm(name, parseInt(value))
    // }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/cocktails/${selectedCocktail.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedCocktail),
        })
        .then(r => r.json())
        .then(editCocktail)
    }

    if (!selectedCocktail) return null;

    const {name, description, ingredients} = selectedCocktail

    return(
        <div>
            <h3>Edit Cocktail Details:</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name:</label>
                <input name="name" placeholder="Cocktail Name Here" value={name} type="text" onChange={handleInputChange}/>
                </div>
                <div>
                <label>Description:</label>
                <input name="description" placeholder="enter description here" value={description} type="text" onChange={handleInputChange}/>
                </div>
                <div>
                <label>Ingredients:</label>
                <input name="ingredients" placeholder="list ingredients here" type="text" value={ingredients} onChange={handleInputChange}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default EditForm