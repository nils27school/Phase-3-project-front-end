import React, {useState} from "react"
import EditForm from "./EditForm"

function CocktailForm({cocktails, setCocktails, editCocktail, handleEditForm, selectedCocktail}){
    const [formData, setFormData] = useState('')

    function handleInput(e) {
        const {name, value} = e.target
        setFormData({
            ...formData, [name]: value,
        })
    }
    function handleInput2(e) {
        const {name, value} = e.target
        setFormData({
            ...formData, [name]: parseInt(value),
        })
    }

    function addCocktail(e) {
        e.preventDefault()
        const newCocktail = {
            name: formData.name,
            spirit_id: formData.spirit_id,
            glassware_id: formData.glassware_id,
            description: formData.description,
            ingredients: formData.ingredients
        }
        fetch('http://localhost:9292/cocktails', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCocktail)
        })
        .then(r => r.json())
        .then(data => updateCocktails(data))
    }

    function updateCocktails(newCocktail) {
        setCocktails([...cocktails, newCocktail])
    }
    return(
        <div>
            <h2 class="page-title">Suggest an Addition or Edit!</h2>
            <div>
                <h3>Addition Form</h3>
                <form onSubmit={addCocktail} class="form">
                    <div>
                        <label >Name:</label>
                        <input name="name" placeholder="Cocktail Name Here" type="text" onChange={handleInput}class="form-box"/>
                    </div>
                    <div>
                        <label>Spirit:</label>
                        <select name="spirit_id"  class="form-box" onChange={handleInput2}>
                            <option>Select Spirit</option>
                            <option value="1">Whiskey</option>
                            <option value="2">Tequila</option>
                            <option value="3">Vodka</option>
                            <option value="4">Rum</option>
                            <option value="5">Gin</option>
                            <option value="6">Brandy</option>
                        </select>
                    </div>
                    <div>
                    <label>Glassware:</label>
                    <select name="glassware_id" class="form-box" onChange={handleInput2}>
                        <option>Select Glassware</option>
                        <option value="1">Rock's Glass</option>
                        <option value="2">Coupe</option>
                        <option value="3">Collins Glass</option>
                        <option value="4">Martini Glass</option>
                        <option value="5">Highball Glass</option>
                        <option value="6">Shot Glass</option>
                    </select>
                    </div>
                    <div>
                    <label>Description:</label>
                    <input name="description" class="form-box" placeholder="enter description here" type="text" onChange={handleInput}/>
                    </div>
                    <div>
                    <label>Ingredients:</label>
                    <input name="ingredients" class="form-box" placeholder="list ingredients here" type="text" onChange={handleInput}/>
                    </div>
                    <input type="submit"/>
            </form>
            </div>
            <div>
            <EditForm editCocktail={editCocktail} handleEditForm={handleEditForm} selectedCocktail={selectedCocktail}/>
            </div>
        </div>
    )
}

export default CocktailForm