import {createContext} from 'react'

const Context = createContext(null)

const Provider = ({children})=>{
    return(
        <Context.Provider value={'idk'}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}