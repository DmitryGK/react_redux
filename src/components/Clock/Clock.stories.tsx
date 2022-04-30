
import { Clock } from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}

export const DigitalClockExample = () => {
    return <Clock mode={'digital'}/>
}

export const AnalogClockExample = () => {
    return <Clock mode={'analog'}/>
}