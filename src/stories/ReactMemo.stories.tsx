import React, { useState } from "react"

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}
const SecretUsers = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(SecretUsers)

export const Examlple_1 = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dmitry', 'Svetlana', 'Nikita'])

    const addUser = () => {
        const newUsers = [...users, 'Oleg' + new Date().getTime()]
        setUsers(newUsers)
    }


    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>add user
        </button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>


}
