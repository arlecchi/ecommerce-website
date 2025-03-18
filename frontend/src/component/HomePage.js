import { useContext } from "react";
import {Context} from './MyContext.js'

const HomePage = ()=>{
    const {product} = useContext(Context)
    console.log(product)
    return(
        <h1> this is the Homepage </h1>
    )
}

export default HomePage;