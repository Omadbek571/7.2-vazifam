import React, { useContext } from 'react'
import { UserContext } from '../App'

function Change() {

    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <button className='btn btn-info' onClick={() => setUser({ ...user, age: user.age + 1 })}>+</button>
            <button className='btn btn-info' onClick={() => setUser({...user, age: user.age-1})}>-</button>
        </div>
    )
}

export default Change