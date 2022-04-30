import { useEffect, useState } from "react"


export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Simple Example')

    useEffect( () => {
        console.log('useEffect every render');
        
    })
    // нет зависимостей
    useEffect( () => {
        console.log('useEffect only first render');
        
    }, [])
    // 
    useEffect( () => {
        console.log('useEffect first render and every counter changed');
        
    }, [counter])
    //зависимость от counter
    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)} >+</button>
    </>
}