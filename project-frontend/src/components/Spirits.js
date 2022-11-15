import React, {useState, useEffect} from "react"
import SpiritCard from "./SpiritCard"

function Spirits() {
    const [allSpirits, setAllSpirits] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/spirits')
        .then(r => r.json())
        .then(data => setAllSpirits(data))
    }, [])

    const spiritList = allSpirits.map(spirit => {
        return <SpiritCard key={spirit.id} spiritData={spirit}/>
    })

    return(
        <div>
            <h2>Our Spirits</h2>
            {spiritList}
        </div>
    )
}

export default Spirits