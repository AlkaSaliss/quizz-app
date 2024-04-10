import React, { createContext, useState } from "react"


export const LoginContext = createContext(null)

const LoginContextProvider = ({ children }) => {
    const [pseudo, setPseudo] = useState('')

    return (
        <LoginContext.Provider value={{ pseudo, setPseudo }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider 
