import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = () => action('open and close body')
const onClickCallback = () => action('some item was clicked')
export const CloseAccordionMode = () => <Accordion titleValue='Menu'
                                                   collapsed={true}
                                                   onChange={callback} items={[]}
                                                   onClick={onClickCallback}/>
export const OpenAccordionMode = () => <Accordion titleValue='Users'
                                                  collapsed={false}
                                                  onChange={callback}
                                                  onClick={onClickCallback}
                                                  items={
                                                      [
                                                          {title: 'Dmitry', value: 1},
                                                          {title: 'Evgeniy', value: 2},
                                                          {title: 'Oleg', value: 3},
                                                          {title: 'Sveta', value: 4}
                                                      ]
                                                  }/>
export const OpenCloseModeChanging = () => {
    let [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'title'}
                      collapsed={value}
                      onClick={onClickCallback}
                      items={
                          [
                              {title: 'Dmitry', value: 1},
                              {title: 'Evgeniy', value: 2},
                              {title: 'Oleg', value: 3},
                              {title: 'Sveta', value: 4}
                          ]
                      }
                      onChange={() => {
                          setValue(!value)
                      }}
    />
}
