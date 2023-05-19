import React from "react";

function Body(){
    const colors=[<h1>Am red color</h1>,
<h1>Am blue color</h1>,
<h1>Am yellow color</h1>,
<h1>Am orange color</h1>,
<h1>Am violet color</h1>]
    return(
        <div>
            {colors}
        </div>
    )
}
export default Body