/*import {createContext, useEffect, useState} from 'react'
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

export {Context, Provider} */

import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const Context = createContext(null);

const Provider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [banner, setBanner] = useState([]);

  // Since API is inside frontend/api, fetch from relative path
  const getDataProduct = async () => {
    try {
      const response = await axios.get('/api/product');
      setProduct(response.data);
    } catch (err) {
      console.error('Failed to fetch products', err);
    }
  };

  const getDataCategory = async () => {
    try {
      const response = await axios.get('/api/category');
      setCategory(response.data);
    } catch (err) {
      console.error('Failed to fetch categories', err);
    }
  };

  const getDataBanner = async () => {
    try {
      const response = await axios.get('/api/banner');
      setBanner(response.data);
    } catch (err) {
      console.error('Failed to fetch banner', err);
    }
  };

  useEffect(() => {
    getDataProduct();
    getDataCategory();
    getDataBanner();
  }, []);

    return (
    <Context.Provider value={{ product, category, banner }}>
        {children}
    </Context.Provider>
    );
};

export { Context, Provider };
