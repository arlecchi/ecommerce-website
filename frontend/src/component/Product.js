import { useContext } from "react";
import { Context } from "./MyContext";
import { Link } from "react-router-dom";

const Product = ({ searchQuery, setSearchQuery }) => {
    const { product } = useContext(Context);

    // Filter products based on searchQuery
    const filteredProducts = product.filter((p) =>
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <div className="row justify-content-center mb-2">
                <div className="col-8">
                    <h2 className="text-center tagline mb-4 mt-2">All Products</h2>
                    <div className="input-group">
                        <form className="d-flex w-100" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                className="searchInput"
                                placeholder="Search for a product..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="primaryBtn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Display Filtered Products */}
            <div className="row">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                        <div className="col-3 my-3" key={p.id}>
                            <Link to={`/product/${p.id}`} className="product-link">
                                <div className="product-card">
                                    <div className="image-wrapper">
                                        <img src={p.image} alt={p.brand} className="w-100"/>
                                    </div>
                                    <div>
                                        <span className="title-category">{p.category}</span>
                                        <span className="title-brand">{p.brand}</span>
                                        <span className="title-description">{p.description}</span>
                                    </div>
                                    <div className="price-wrapper d-flex justify-content-between align-items-center">
                                        <span className="title-price">${p.price}</span>
                                        <button className="sm-btnprimary">Buy <i className="bi bi-bag-plus"></i></button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center mt-4">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Product;
