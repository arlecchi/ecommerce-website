import express from 'express'
import cors from 'cors'
import fs from 'fs'

const app = express()
const port = 3200
app.use(cors())

app.get('/banner', (req, res)=>{
    const data = getData('data/Banner.json');
    res.json(data);
})

app.get('/category', (req, res)=>{
    const data = getData('data/Category.json')
    res.json(data)
})

app.get('/product', (req, res)=>{
    const data = getData('data/Product_Data.json')
    res.json(data)
})

app.get('/product/:id', (req, res)=>{
    const data = findData(req.params.id)
    res.json(data)
})

app.listen(port, ()=> (
    console.log(`Server is on in localhost port : ${port}`)
))

const getData= (path) =>{
    const data = fs.readFileSync(path, 'utf-8', (err, data)=> data)
    return JSON.parse(data)
}

const findData = (id)=>{
    const dataProduct = getData('data/Product_Data.json');
    const findProduct = dataProduct.find((data)=> data.id == id)
    if(!findProduct){
        let dummy = [{
            "series_title": "not found",
            "product_type": "not found",
            "product_name": "Product not Found",
            "price": 999999999,
            "available_quantity": 999999999,
            "release_date": "2/27/2021",
            "rating": 0,
            "id": 9999
        }]
        return dummy
    }
    return findProduct
}