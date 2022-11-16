import React, {useState, useEffect} from "react"
import SpiritCard from "./SpiritCard"
import SpiritContainer from "./SpiritContainer"

function Spirits() {
    const [allSpirits, setAllSpirits] = useState([])

    const [spiritCocktails, setSpiritCocktails] = useState([])

    // Component displays all of the Spirit options

    useEffect(() => {
        fetch('http://localhost:9292/spirits')
        .then(r => r.json())
        .then(data => setAllSpirits(data))
    }, [])

    const spiritList = allSpirits.map(spirit => {
        return <SpiritCard key={spirit.id} spiritData={spirit} setSpiritCocktails={setSpiritCocktails}/>
    })

    return(
        <div>
            <h2>Our Spirits</h2>
            {spiritList}
            <SpiritContainer spiritCocktails={spiritCocktails}/>
        </div>
    )
}

export default Spirits