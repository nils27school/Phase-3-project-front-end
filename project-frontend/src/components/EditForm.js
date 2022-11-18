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

    const {name, spirit_id, glassware_id, description, ingredients} = selectedCocktail

    return(
        <div>
            <h3>Edit Cocktail Details</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name:</label>
                <input name="name" placeholder="Cocktail Name Here" value={name} type="text" onChange={handleInputChange}/>
                </div>
                {/* <label>Spirit:</label>
                <select name="spirit_id" value={spirit_id} onChange={handleInput2}>
                    <option>Select Spirit</option>
                    <option value="1">Whiskey</option>
                    <option value="2">Tequila</option>
                    <option value="3">Vodka</option>
                    <option value="4">Rum</option>
                    <option value="5">Gin</option>
                    <option value="6">Brandy</option>
                </select>
                <label>Glassware:</label>
                <select name="glassware_id" value={glassware_id} onChange={handleInput2}>
                    <option>Select Glassware</option>
                    <option value="1">Rock's Glass</option>
                    <option value="2">Coupe</option>
                    <option value="3">Collins Glass</option>
                    <option value="4">Martini Glass</option>
                    <option value="5">Highball Glass</option>
                    <option value="6">Shot Glass</option>
                </select> */}
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