import { useContext } from "react"
import { Context } from "./MyContext"

const BannerPromotion = ()=>{
    const {banner} = useContext(Context)
    return(
        <>
            <h1>Promotion Banner</h1>
            {banner.map((b)=>{
                return(
                    <img key={b.id} alt='promotional banners' src={b.image} />
                )
            })}
        </>
    )
}

export default BannerPromotion