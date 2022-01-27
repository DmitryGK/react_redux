import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsedValue: boolean) => void
}


export function Accordion(props: AccordionPropsType) {

        return (
            <div>
                <AccordionTitle title={props.titleValue} value={props.collapsed} onClick={props.onClick}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )

}
type AccordionTitlePropsType = {
    title: string
    onClick: (collapsedValue: boolean) => void
    value: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => {props.onClick(!props.value)}}>{props.title}</h3>
}

function AccordionBody() {
    return<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

}