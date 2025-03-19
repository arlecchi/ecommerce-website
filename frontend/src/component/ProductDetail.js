import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";  // Import the Navbar

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
            <Navigation /> {/* Show Navbar */}
            <div className="container mt-5 pt-5"> {/* Adjusted padding/margin */}
                <button onClick={() => navigate(-1)} className="back-button">
                    <i className="bi bi-arrow-left"></i>
                </button>

                <div className="row mt-3">
                    <div className="col-md-6">
                        <img src={product.image[0]} alt={product.brand} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.brand}</h2>
                        <p>{product.description}</p>
                        <h4>Price: ${product.price}</h4>
                        {product.promo && <h5 className="text-danger">Promo: ${product.promo}</h5>}
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
