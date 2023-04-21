import React from "react";

function ColorList() {
    const colors = [
        "firebrick",
        "rebeccapurple",
        "salmon",
        "darkslategray",
        "hotpink",
    ];
    const colorElements = colors.map((color) => {
        return <li key = { color }
        style = {
            { color: color }
        } > { color } < /li>
    })
    return ( < ol > { colorElements } < /ol>)

    }

    export default ColorList;