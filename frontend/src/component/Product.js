import { Context } from "./MyContext"
import { useContext } from "react"

const Product=()=>{
    const {product} = useContext(Context)
    return(
        <div className="container">
            {/* Search Section*/}
            <div className="row justify-content-center mb-2">
                <div className="col-8">
                    <h2 className="text-center tagline mb-4 mt-2">All Product</h2>
                    <div className="input-group">
                        <form className="d-flex w-100">
                            <input className="searchInput" placeholder="search something..."/>
                            <button className="primaryBtn">Search</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Search Section*/}
            <div className="row">
                {product.map((p)=>{
                    return(
                        <div className="col-3 my-3" key={p.id}>
                            <div className="product-card">
                                <div className="image-wrapper">
                                    <img src={p.image} alt="product" className="w-100"/>
                                </div>
                                <div>
                                    <span className="title-category">{p.category}</span>
                                    <span className="title-brand">{p.brand}</span>
                                    <span className="title-description">{p.description}</span>
                                </div>
                                <div className="price-wraper d-flex justify-content-between align-items-center">
                                    <span className="title-price">{p.price}</span>
                                    <button className="sm-btnprimary">Buy <i className="bi bi-bag-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Product