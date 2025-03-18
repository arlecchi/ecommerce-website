import { useContext } from "react";
import {Context} from './MyContext.js'

const HomePage = ()=>{
    const {product} = useContext(Context)
    return(
        <>
            <h1> this is the Homepage </h1>
            {product.map((p)=>{
                return(
                    <p key={p.id}>{p.series_title}</p>
                )
            })}
        </>
    )
}

export default HomePage;