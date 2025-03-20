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

    // Fetch product details
    useEffect(() => {
        axios.get(`http://api.localhost:3200/product/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error("Error fetching product data:", error));
    }, [id]);

    // Check if product is in wishlist on page load
    useEffect(() => {
        const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(wishlistItems.includes(id)); // Check if product ID is in the wishlist
    }, [id]);

    const handleIncrease = () => setQuantity((prev) => Math.min(prev + 1, 10)); 
    const handleDecrease = () => setQuantity((prev) => Math.max(prev - 1, 1));

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            name: product.brand,
            price: product.price,
            image: product.image[0], 
            count: quantity, 
        };
    
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItemIndex = cart.findIndex(item => item.id === cartItem.id);
        
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].count += quantity;
        } else {
            cart.push(cartItem);
        }
    
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to Cart!");
    };
    
    const toggleWishlist = () => {
        let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

        if (wishlistItems.includes(id)) {
            wishlistItems = wishlistItems.filter(item => item !== id);
            setWishlist(false);
        } else {
            wishlistItems.push(id);
            setWishlist(true);
        }

        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-details-page product-details-container">
            <Navigation />
            <div className="container mt-5 pt-5">
                <button onClick={() => navigate(-1)} className="back-button mb-4">
                    <i className="bi bi-arrow-left"></i>
                </button>

                <nav className="breadcrumb-container align-items-center mb-4">
                    <span className="breadcrumb-category">{product.category}</span>
                    <span className="breadcrumb-divider"> / </span>
                    <span className="breadcrumb-product">{product.brand}</span>
                </nav>

                <div className="row mt-3 flex-row-reverse">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={product.image[0]} alt={product.brand} className="img-fluid product-image" />
                    </div>

                    <div className="col-md-6">
                        <div className="product-name mb-4">{product.brand}</div>
                        <div className="productPrice mb-4 fs-4 fw-bold">${product.price}</div>
                        <div className="productDesc mb-4">{product.description}</div>
                        {product.promo && <h5 className="text-danger mb-4">Special Price: ${product.promo}</h5>}

                        {/* Quantity Selector + Add to Cart Button */}
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <div className="quantity-selector d-flex align-items-center border rounded px-3 py-2" style={{ height: "40px" }}>
                                <button onClick={handleDecrease} className="btn btn-sm p-2">−</button>
                                <span className="mx-3">{quantity}</span>
                                <button onClick={handleIncrease} className="btn btn-sm p-2">+</button>
                            </div>

                            <button onClick={handleAddToCart} className="primaryBtn add-to-cart-btn px-4 py-2 d-flex align-items-center justify-content-center" style={{ height: "40px", display: "flex", alignItems: "center" }}>
                                Add to Cart
                            </button>
                        </div>
                    
                        <p className="shipping-info mb-4">
                            <strong>Free 3-5 day shipping</strong> • <strong>30-day trial</strong>
                        </p>

                        {/* Wishlist Button */}
                        <button className="wishlist-btn mt-3" onClick={toggleWishlist}>
                            <i className={`bi ${wishlist ? "bi-heart-fill" : "bi-heart"} wishlist-icon`}></i>
                            {wishlist ? " Remove from Wishlist" : " Add to Wishlist"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
