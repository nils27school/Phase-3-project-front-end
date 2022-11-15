import React from "react"

function SpiritCard({spiritData}) {
    const {spirit_name} = spiritData
return(
    <div>
        <p>{spirit_name}</p>
    </div>
)
}

export default SpiritCard