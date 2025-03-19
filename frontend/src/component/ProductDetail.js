import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";  

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://api.localhost:3200/product/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error("Error fetching product data:", error));
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navigation />
            <div className="container mt-5 pt-5">
                {/* Back Button */}
                <button onClick={() => navigate(-1)} className="back-button mb-3">
                    <i className="bi bi-arrow-left"></i>
                </button>

                {/* Breadcrumb */}
                <nav className="breadcrumb-container align-items-center mb-4">
                    <span className="breadcrumb-category">{product.category}</span>
                    <span className="breadcrumb-divider"> / </span>
                    <span className="breadcrumb-product">{product.brand}</span>
                </nav>

                {/* Product Details */}
                <div className="row mt-3">
                    <div className="col-md-6">
                        <img src={product.image[0]} alt={product.brand} className="img-fluid mb-4" />
                    </div>
                    <div className="col-md-6">
                        <div className="product-name mb-2">{product.brand}</div>
                        <div className="productPrice mb-3">${product.price}</div>
                        <div className="productDesc mb-4">{product.description}</div>
                        {product.promo && <h5 className="text-danger mb-3">Promo: ${product.promo}</h5>}
                        <button className="primaryBtn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
