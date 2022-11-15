import React, {useState, useEffect} from "react"
import GlasswareCard from "./GlasswareCard"

function Glassware() {
    const [allGlasswares, setAllGlasswares] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/glassware')
        .then(r => r.json())
        .then(data => setAllGlasswares(data))
    }, [])

    const glasswareList = allGlasswares.map(glassware => {
        return <GlasswareCard key={glassware.id} glasswareData={glassware}/>
    })
    return(
        <div>
            <h2>Glassware Options</h2>
            {glasswareList}
        </div>
    )
}

export default Glassware