import React from 'react'
import { UserContext } from './ContextProvider'

export default function User() {
    const value = React.useContext(UserContext)
    return (
        <div>

            {value}

        </div>
    )
}
