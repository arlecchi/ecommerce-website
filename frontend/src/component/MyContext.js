import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

const Context = createContext(null)

const Provider = ({children})=>{
    const [product, setProduct] = useState([])
//run 'node app' in terminal from server folder
    const getDataProduct = async () => {
        const response = await axios.get('http://api.localhost:3200/product')
        setProduct(response.data)
    }

    useEffect(()=>{
        getDataProduct()
    }, [])

    return(
        <Context.Provider value={{product}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}