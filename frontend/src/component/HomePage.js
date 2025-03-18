import { useContext } from "react";
import {Context} from './MyContext.js'

const HomePage = ()=>{
    const {user} = useContext(Context)
    return(
        <h1> this is the Homepage {user.name}</h1>
    )
}

export default HomePage;