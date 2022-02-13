import React, {useRef, useState } from 'react';


export default {
  title: 'input',

}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  return <><input onChange={(e) => {
    const actualValue = e.currentTarget.value
    setValue(actualValue)
  }
  }/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}</>
}
