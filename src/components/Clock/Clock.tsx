import { useEffect, useState } from "react"
import './Clock.css'


type PropsType = {
    mode?: 'digital' | 'analog'
}


const get2digitsString = (number: number) => number < 10 ? '0' + number : number


export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])



    const secondsString = get2digitsString(date.getSeconds())
    const minutesString = get2digitsString(date.getMinutes())
    const hoursString = get2digitsString(date.getHours())



    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return <div>
        {props.mode === 'digital'
            ? <><span>{hoursString}</span>
                :
                <span>{minutesString}</span>
                :
                <span>{secondsString}</span>
            </>
            : <><div className={"clock"}>
                <div className={"analog-clock"}>
                    <div className={"dial seconds"} style={secondsStyle} />
                    <div className={"dial minutes"} style={minutesStyle} />
                    <div className={"dial hours"} style={hoursStyle} />
                </div>
            </div>
            </>
        }
    </div>
}