import React from 'react'
import User from './User'
export const UserContext = React.createContext()
export default function ContextProvider() {
    return (
        <UserContext.Provider value='1'>
            <User></User>
        </UserContext.Provider>
    )
}
