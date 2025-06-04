import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

const Context = createContext(null)

const Provider = ({children})=>{
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [banner, setBanner] = useState([])

    const getDataProduct = async () => {
        try {
            const response = await axios.get('/api/Product')
            // Change this line - access the products array from response
            setProduct(response.data.products || response.data)
        } catch (error) {
            console.error('Error fetching products:', error)
        }
    }

    const getDataCategory = async () => {
        try {
            const response = await axios.get('/api/Category')
            // Change this line - access the categories array from response
            setCategory(response.data.categories || response.data)
        } catch (error) {
            console.error('Error fetching categories:', error)
        }
    }
    
    const getDataBanner = async () => {
        try {
            const response = await axios.get('/api/Banner')
            // Change this line - access the banners array from response
            setBanner(response.data.banners || response.data)
        } catch (error) {
            console.error('Error fetching banners:', error)
        }
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