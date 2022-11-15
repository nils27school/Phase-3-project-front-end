import React from "react"

function GlasswareCard({glasswareData}) {
    const {glass_type} = glasswareData
return(
    <div>
        <p>{glass_type}</p>
    </div>
)
}

export default GlasswareCard