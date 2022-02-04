import {useState} from "react";


type PropsType = {
    defaultOn?: boolean
}


function OnOff (props:PropsType) {


    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStile = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStile = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStile = {
        width : '10px',
        height : '10px',
        borderRadius : '5px',
        border : '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }


    return (

        <div>
            <div style={onStile} onClick={ () => { setOn(true) }}>on</div>
            <div style={offStile} onClick={ () => { setOn(false) }}>off</div>
            <div style={indicatorStile}></div>
        </div>
    )
}


export default OnOff