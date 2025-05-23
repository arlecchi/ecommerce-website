import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

const Context = createContext(null)

const Provider = ({children})=>{
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [banner, setBanner] = useState([])


//run 'node app' in terminal from server folder
    const getDataProduct = async () => {
        const response = await axios.get('http://api.localhost:3200/product')
        setProduct(response.data)
    }

    const getDataCategory = async () => {
        const response = await axios.get('http://api.localhost:3200/category')
        setCategory(response.data)
    }
    
    const getDataBanner = async () => {
        const response = await axios.get('http://api.localhost:3200/banner')
        setBanner(response.data)
    }

    useEffect(()=>{
        getDataProduct()
        getDataCategory()
        getDataBanner()
    }, [])

    return(
        <Context.Provider value={{product, category, banner}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}