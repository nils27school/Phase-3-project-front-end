import React, {useState, useEffect} from "react"
import GlasswareCard from "./GlasswareCard"
import GlasswareContainer from "./GlasswareContainer"

function Glassware() {
    const [allGlasswares, setAllGlasswares] = useState([])
    const [glassCocktails, setGlassCocktails] = useState([])

    // Component displays all of the glass options

    useEffect(() => {
        fetch('http://localhost:9292/glassware')
        .then(r => r.json())
        .then(data => setAllGlasswares(data))
    }, [])

    const glasswareList = allGlasswares.map(glassware => {
        return <GlasswareCard key={glassware.id} glasswareData={glassware} setGlassCocktails={setGlassCocktails}/>
    })
    return(
        <div>
            <h2 className="page-title">Glassware Options</h2>
            <div id="glassware-bar">
            {glasswareList}
            </div>
            <GlasswareContainer glassCocktails={glassCocktails}/>
        </div>
    )
}

export default Glassware