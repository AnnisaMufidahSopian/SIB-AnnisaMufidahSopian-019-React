//Hooks - useState

import React, { useState } from "react";

function Counter({initialCount}){
    const [count, setCount] = useState(0)
    return (
        <>
            <h3>First Counter Example</h3>
            Count : {count}
            <button onClick={() => setCount (0)}>Reset</button>
            <button onClick={() => setCount (prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount (prevCount => prevCount - 1)}>-</button>
        </>
    )
}

export default Counter