import React from "react"

function SpiritCard({spiritData, setSpiritCocktails}) {
    const {spirit_name, id, description} = spiritData

    // This component displays each type of Spirit 
    //as well as a click button that displays only the cocktails made with that Spirit

    function handleClick() {
        fetch(`http://localhost:9292/spirits/${id}`)
        .then(r => r.json())
        .then(data => setSpiritCocktails(data))
    }

return(
    <div>
        <p>{spirit_name}</p>
        <p>description: {description}</p>
        <button onClick={handleClick}>Drinks List</button>
    </div>
)
}

export default SpiritCard