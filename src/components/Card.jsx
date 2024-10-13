import React, { useContext } from 'react'
import { UserContext } from "../App"

    function Card() {

        const {user, setUser} = useContext(UserContext)
 
        
        return (
            <div>
                <h3>{user.name}</h3>
                <h4>{user.age}</h4>
            </div>
        )
    }

export default Card