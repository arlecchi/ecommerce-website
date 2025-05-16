import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Cart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const handleRemoveItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleIncrease = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, count: Math.min(item.count + 1, 10) } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleDecrease = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, count: Math.max(item.count - 1, 1) } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Calculate price breakdown
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.count, 0);
    const discount = subtotal * 0.1; // 10% discount
    const shipping = subtotal > 150 ? 0 : 10;
    const total = subtotal - discount + shipping;

    return (
        <div className="cart-page container mt-5">
            <Navigation />
            <h2 className="mb-4">
                <strong>Cart</strong> 
                <span className="text-muted"> {cart.reduce((acc, item) => acc + item.count, 0)} ITEM(S)</span>
            </h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-container d-flex justify-content-between">
                    {/* Left Section: Cart Items + Discount Banner */}
                    <div className="left-section col-md-8">
                        <div className="cart-items-container">
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item d-flex align-items-center p-3 mb-3">
                                    {/* Clickable Image */}
                                    <Link to={`/product/${item.id}`}>
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="cart-image me-3" 
                                            style={{ width: "80px", height: "80px", cursor: "pointer" }} 
                                        />
                                    </Link>

                                    <div className="cart-details flex-grow-1">
                                        {/* Clickable Product Name */}
                                        <h5>
                                            <Link to={`/product/${item.id}`} className="text-dark text-decoration-none">
                                                {item.name}
                                            </Link>
                                        </h5>

                                        <p className="fw-bold">${item.price}</p>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-light border px-2" onClick={() => handleDecrease(item.id)}>−</button>
                                            <span className="mx-3">{item.count}</span>
                                            <button className="btn btn-light border px-2" onClick={() => handleIncrease(item.id)}>+</button>
                                            <button className="btn btn-link text-danger ms-3" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stationary Discount Banner */}
                        <div className="discount-banner mt-3">
                            <i className="bi bi-percent"></i> 10% Instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA
                        </div>
                    </div>
                    
                    {/* Right Section: Order Summary */}
                    <div className="right-section col-md-4">
                        <div className="border p-4">
                            <h4 className="mb-4"><strong>Order Summary</strong></h4>

                            <p className="mb-3">Price <span className="float-end">${subtotal.toFixed(2)}</span></p>
                            <p className="mb-3">Discount <span className="float-end text-success">-${discount.toFixed(2)}</span></p>
                            <p className="mb-3">Shipping <span className="float-end">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></p>
                            <p className="mb-4">Coupon Applied <span className="float-end">$0.00</span></p>

                            <hr className="my-4" />

                            <h5 className="mb-8 totalCost"><strong>Total <span className="float-end">${total.toFixed(2)}</span></strong></h5>

                            <p className="mb-8 deliveryTime">Estimated Delivery by <strong>01 Apr, 2025</strong></p>

                            {/* Coupon Code Input */}
                            <input type="text" className="form-control mb-4" placeholder="Coupon Code" />

                            {/* Checkout Button */}
                            <button className="primaryBtn w-100" onClick={() => navigate("/checkout")}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
