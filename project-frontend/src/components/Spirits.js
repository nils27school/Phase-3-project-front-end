import React, {useState, useEffect} from "react"
import SpiritCard from "./SpiritCard"
import SpiritContainer from "./SpiritContainer"

function Spirits() {
    const [allSpirits, setAllSpirits] = useState([])

    const [spiritCocktails, setSpiritCocktails] = useState([])

    const [spiritImages, setSpiritImages] = useState([])

    // Component displays all of the Spirit options

    useEffect(() => {
        fetch('http://localhost:3001/spirit-images')
        .then(r => r.json())
        .then(data => setSpiritImages(data))
    }, [])

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
            <h2 className="page-title">Our Spirits</h2>
            <div className="spirit-bar">
                {spiritList}
            </div>
            <div className="container">
                <SpiritContainer spiritCocktails={spiritCocktails}/>
            </div>
        </div>
    )
}

export default Spirits