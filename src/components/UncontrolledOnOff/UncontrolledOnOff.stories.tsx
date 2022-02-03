import React, {useState} from "react";
import UncontrolledOnOff from "../UncontrolledOnOff/UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

export const OnMode = () => <UncontrolledOnOff />
export const OffMode = () => <UncontrolledOnOff/>

export const SwitchedOnOff = () => {
    let [on, setOn] = useState<boolean>(false)


}