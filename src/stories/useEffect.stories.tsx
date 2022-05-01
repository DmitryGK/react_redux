import { useEffect, useState } from "react"


export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Simple Example')

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString()
    })
    // нет зависимостей
    useEffect(() => {
        console.log('useEffect only first render');
        document.title = counter.toString()

    }, [])
    // 
    useEffect(() => {
        console.log('useEffect first render and every counter changed');
        document.title = counter.toString()

    }, [counter])
    //зависимость от counter
    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)} >+</button>
    </>
}

export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeout example');

    useEffect(() => {

        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])



    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('ResetExample')

    useEffect(() => {
        console.log('Effect occurred' + counter);

        return () => {
            console.log('EFFECT RESET');

        }

    }, [counter])

    return <>
        Hello, counter: {counter} <button onClick={() => { setCounter(counter + 1) }}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    
    const [text, setText] = useState('')

    console.log('Component rendered with' + text);

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText((state) => state + e.key)
        }

        window.document.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return <>
        Typed text: {text}
    </>

}