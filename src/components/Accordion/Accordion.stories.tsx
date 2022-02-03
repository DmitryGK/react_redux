import React, { useState } from 'react';
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = () =>  action('open and close body')

export const CloseAccordionMode = () => <Accordion titleValue= 'Menu' collapsed={true} onChange={callback} />
export const OpenAccordionMode = () => <Accordion titleValue='Users' collapsed={false} onChange={callback}/>
export const OpenCloseModeChanging = () => {
    let [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'title'} collapsed={value} onChange={() => {
        setValue(!value)
    }}
    />
}
