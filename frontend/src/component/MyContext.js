import {createContext} from 'react'

const Context = createContext(null)

const Provider = ({children})=>{
    let user = {
        name : 'Andrea Kimi Antonelli'
    }
    return(
        <Context.Provider value={{user}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}