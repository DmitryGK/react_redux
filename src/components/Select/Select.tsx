import {ItemType} from "../Accordion/Accordion";
import s from './Select.module.css'

type SelectType = {
    value?: any
    onChange: () => void
    items: ItemType[]
}

export function Select(props: SelectType) {

    const selectedItem = props.items.find(i => i.value === props.value)

    return (


        <div>

            <h3>{selectedItem && selectedItem.title}</h3>
            <div className={s.items}>
                {props.items.map(i => <div key={i.value}>{i.title}</div>)}
            </div>
        </div>
    )
}

