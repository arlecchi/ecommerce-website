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
    const data = getData('data/Product.json')
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
    const dataProduct = getData('data/Product.json');
    const findProduct = dataProduct.find((data)=> data.id == id)
    if(!findProduct){
        let dummy = [{
            "id" : 999, 
            "brand" : "not found", 
            "description" : "not found", 
            "price" : 9999,
            "promo" :9999, 
            "category" : "not found",
            "image" : ["https://raw.githubusercontent.com/arlecchi/image-hosting/refs/heads/main/Rectangle%205.png"]
        }]
        return dummy
    }
    return findProduct
}