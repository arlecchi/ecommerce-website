import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

const Context = createContext(null)

const Provider = ({children})=>{
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [banner, setBanner] = useState([])


//run 'node app' in terminal from server folder
    const getDataProduct = async () => {
        const response = await axios.get('/api/Product')
        setProduct(response.data)
    }

    const getDataCategory = async () => {
        const response = await axios.get('/api/Category')
        setCategory(response.data)
    }
    
    const getDataBanner = async () => {
        const response = await axios.get('/api/Banner')
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