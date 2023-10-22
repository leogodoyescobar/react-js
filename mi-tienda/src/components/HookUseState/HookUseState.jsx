import { useState } from "react"

export const HookUseState = () => {
    Count [Count, setCount] = useState(0);

    const handleSum = () => {
        setCount(Count + 1);
    }

    return (
        <>
        <div>{Count}</div>
        <button onClick={handleSum}>Sumar</button>
        </>
    )
}
