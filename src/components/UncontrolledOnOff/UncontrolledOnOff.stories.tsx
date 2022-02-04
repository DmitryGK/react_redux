import React, {useState} from "react";
import UncontrolledOnOff from "../UncontrolledOnOff/UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

export const OnMode = () => <UncontrolledOnOff defaultOn={true}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false}/>