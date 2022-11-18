import React from "react"

function GlasswareCard({glasswareData, setGlassCocktails}) {
    const {glass_type, id, image} = glasswareData

    // This component displays each type of glass 
    //as well as a click button that displays only the cocktails made with that glass

    function handleClick() {
        fetch(`http://localhost:9292/glassware/${id}`)
        .then(r => r.json())
        .then(data => setGlassCocktails(data))
    }
return(
    <div >
        <img src={require(`../Assets/${image}.jpg`)} alt="Glass" className="glassware_image"/>
        <p>{glass_type}</p>
        <button onClick={handleClick}>Cocktails</button>
    </div>
)
}

export default GlasswareCard