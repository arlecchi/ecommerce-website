import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./MyContext";

const ProductDetail = () => {
    const { id } = useParams(); // Get product ID from URL
    const { product } = useContext(Context);

    // Find the product by ID
    const selectedProduct = product.find((p) => p.id === parseInt(id));

    if (!selectedProduct) {
        return <h2 className="text-center mt-4">Product not found</h2>;
    }

    return (
        <div className="container mt-5 product-detail">
            <div className="row">
                {/* Left: Product Image */}
                <div className="col-md-6">
                    <div className="product-image">
                        <img src={selectedProduct.image} alt={selectedProduct.brand} className="img-fluid" />
                    </div>
                </div>

                {/* Right: Product Details */}
                <div className="col-md-6">
                    <h1 className="product-title">{selectedProduct.brand}</h1>
                    <h3 className="product-price">${selectedProduct.price}</h3>
                    <p className="product-description">{selectedProduct.description}</p>

                    <div className="rating">
                        <span>⭐ {selectedProduct.rating} / 5.0</span>
                        <span> ({selectedProduct.reviews} reviews)</span>
                    </div>

                    <div className="button-group mt-3">
                        <button className="btn primaryBtn">Add to Cart</button>
                        <button className="btn secondaryBtn">Wishlist ❤️</button>
                    </div>

                    <p className="mt-3 shipping-info"><strong>Shipping:</strong> Free 3-5 day shipping • 30-day trial</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
