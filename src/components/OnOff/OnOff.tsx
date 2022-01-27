import {useState} from "react";


type OnOffType = {
    value:boolean
    onClick: (value: boolean) => void
}

function OnOff (props:OnOffType) {




    const onStile = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.value ? 'green' : 'white'
    }
    const offStile = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        padding: '2px',
        backgroundColor: props.value ? 'white' : 'red'
    }
    const indicatorStile = {
        width : '10px',
        height : '10px',
        borderRadius : '5px',
        border : '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.value ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStile} onClick={ () =>{props.onClick(true)} }>on</div>
            <div style={offStile} onClick={ () => { props.onClick(false) }}>off</div>
            <div style={indicatorStile}></div>
        </div>
    )
}


export default OnOff