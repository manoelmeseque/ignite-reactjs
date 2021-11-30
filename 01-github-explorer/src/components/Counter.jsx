import { useState } from "react"

export function Counter() {
    const [counter, setCouter] = useState(0)

    const increment = () => {
        setCouter(counter + 1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type='button' onClick={increment}>Increment + 1</button>
        </div>
    )
}