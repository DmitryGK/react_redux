import { useState } from "@storybook/addons";
import React from "react";


export default {
    title: 'useState',
}

export const Example = () => {
    
    
    const [counter, setCounter] = useState(0)
       
    return <>
        <button onClick = { () => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}