import {useState, KeyboardEvent, useEffect} from "react";
import {ItemType} from "../Accordion/Accordion";
import s from './Select.module.css'

type SelectType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.keyCode === 40 || e.keyCode === 38) {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.keyCode === 40
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (


        <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>

            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map(i => <div key={i.value}
                                               onMouseEnter={() => {
                                                   setHoveredElementValue(i.value)
                                               }}
                                               className={s.item + ' ' + (hoveredItem === i ? s.active : '')}
                                               onClick={() => {
                                                   onItemClick(i.value)
                                               }}
                    >{i.title}</div>)}
                </div>
            }

        </div>
    )
}

