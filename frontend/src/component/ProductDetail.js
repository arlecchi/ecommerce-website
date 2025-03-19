import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";  

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [wishlist, setWishlist] = useState(false);

    useEffect(() => {
        axios.get(`http://api.localhost:3200/product/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error("Error fetching product data:", error));
    }, [id]);

    const handleIncrease = () => setQuantity((prev) => Math.min(prev + 1, 10)); 
    const handleDecrease = () => setQuantity((prev) => Math.max(prev - 1, 1));

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            name: product.brand,
            price: product.price,
            quantity: quantity,
        };
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
        alert("Added to Cart!");
    };

    const toggleWishlist = () => {
        setWishlist(!wishlist);
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-details-page product-details-container">
            <Navigation />
            <div className="container mt-5 pt-5">
                {/* Back Button */}
                <button onClick={() => navigate(-1)} className="back-button mb-4">
                    <i className="bi bi-arrow-left"></i>
                </button>

                {/* Breadcrumb */}
                <nav className="breadcrumb-container align-items-center mb-4">
                    <span className="breadcrumb-category">{product.category}</span>
                    <span className="breadcrumb-divider"> / </span>
                    <span className="breadcrumb-product">{product.brand}</span>
                </nav>

                {/* Reversed Layout */}
                <div className="row mt-3 flex-row-reverse">
                    {/* Image on the Right */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={product.image[0]} alt={product.brand} className="img-fluid product-image" />
                    </div>

                    {/* Product Info on the Left */}
                    <div className="col-md-6">
                        <div className="product-name mb-4">{product.brand}</div>
                        <div className="productPrice mb-4 fs-4 fw-bold">${product.price}</div>
                        <div className="productDesc mb-4">{product.description}</div>
                        {product.promo && <h5 className="text-danger mb-4">Special Price: ${product.promo}</h5>}

                        {/* Quantity Selector + Add to Cart Button */}
                        <div className="d-flex align-items-center mb-4">
                            <div className="quantity-selector d-flex align-items-center border rounded px-4 py-2 me-4">
                                <button onClick={handleDecrease} className="btn btn-sm">−</button>
                                <span className="mx-4">{quantity}</span>
                                <button onClick={handleIncrease} className="btn btn-sm">+</button>
                            </div>

                            {/* Add to Cart */}
                            <button onClick={handleAddToCart} className="primaryBtn add-to-cart-btn px-4 py-2">
                                Add to Cart
                            </button>
                        </div>

                        {/* Shipping Info */}
                        <p className="shipping-info mb-4">
                            <strong>Free 3-5 day shipping</strong> • <strong>30-day trial</strong>
                        </p>

                        {/* Wishlist Button */}
                        <button className="wishlist-btn mt-3" onClick={toggleWishlist}>
                            <i className={`bi ${wishlist ? "bi-heart-fill" : "bi-heart"} wishlist-icon`}></i>
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
