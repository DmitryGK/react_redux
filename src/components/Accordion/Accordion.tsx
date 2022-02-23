import React from "react";

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}


export function Accordion(props: AccordionPropsType) {

        return (
            <div>
                <AccordionTitle title={props.titleValue}  onChange={props.onChange}/>
                {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
        )

}
type AccordionTitlePropsType = {
    title: string
    onChange: () => void

}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => {props.onChange()}}>{props.title}</h3>
}



function AccordionBody(props: AccordionBodyPropsType) {
    return<ul>
        {props.items.map((i, index) => <li key={index} onClick={() => {props.onClick(i.value)}}>{i.title}</li>)}
        </ul>

}