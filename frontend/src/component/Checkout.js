import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Checkout = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [shippingInfo, setShippingInfo] = useState({ name: "", address: "", city: "", zip: "" });
    const [selectedShipment, setSelectedShipment] = useState("free");

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.count, 0);
    const discount = subtotal * 0.1;
    const shipping = selectedShipment === "priority" ? 8.5 : 0;
    const total = subtotal - discount + shipping;

    const handleInputChange = (e) => {
        setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = () => {
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        navigate("/");
    };

    return (
        <div className="checkout-page container mt-5 pt-4">
            <Navigation />
            <h2 className="mb-4"><strong>Checkout</strong></h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="checkout-container d-flex justify-content-between align-items-start">
                    {/* Left Section: Address & Shipment Method */}
                    <div className="left-section col-md-7">
                        {/* Address Section */}
                        <h4>Address</h4>
                        <input type="text" className="form-control mb-2" name="name" placeholder="Full Name" onChange={handleInputChange} required />
                        <input type="text" className="form-control mb-2" name="address" placeholder="Address" onChange={handleInputChange} required />
                        <input type="text" className="form-control mb-2" name="city" placeholder="City" onChange={handleInputChange} required />
                        <input type="text" className="form-control mb-2" name="zip" placeholder="ZIP Code" onChange={handleInputChange} required />

                        {/* Shipment Method Section */}
                        <h4 className="mt-4">Shipment Method</h4>
                        <div className="shipment-method border p-3 rounded">
                            <div className="shipment-option">
                                <input type="radio" id="free" name="shipment" value="free"
                                    checked={selectedShipment === "free"}
                                    onChange={() => setSelectedShipment("free")} />
                                <label htmlFor="free">
                                    <strong>Free</strong> Regular Shipment <span className="float-end">01 Apr, 2025</span>
                                </label>
                            </div>

                            <div className="shipment-option">
                                <input type="radio" id="priority" name="shipment" value="priority"
                                    checked={selectedShipment === "priority"}
                                    onChange={() => setSelectedShipment("priority")} />
                                <label htmlFor="priority">
                                    <strong>$8.50</strong> Priority Shipping <span className="float-end">28 Mar, 2025</span>
                                </label>
                            </div>

                            <div className="shipment-option">
                                <input type="radio" id="schedule" name="shipment" value="schedule"
                                    checked={selectedShipment === "schedule"}
                                    onChange={() => setSelectedShipment("schedule")} />
                                <label htmlFor="schedule">
                                    <strong>Schedule</strong> Choose a date that works for you.
                                    <span className="float-end text-muted">Select Date ▼</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Order Summary */}
                    <div className="right-section col-md-4">
                        <div className="border p-4">
                            <h4 className="mb-4"><strong>Order Summary</strong></h4>
                            <p>Price <span className="float-end">${subtotal.toFixed(2)}</span></p>
                            <p>Discount <span className="float-end text-success">-${discount.toFixed(2)}</span></p>
                            <p>Shipping <span className="float-end">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></p>
                            <p>Coupon Applied <span className="float-end">$0.00</span></p>
                            <hr />
                            <h5><strong>Total <span className="float-end">${total.toFixed(2)}</span></strong></h5>

                            {/* Coupon Code Input */}
                            <input type="text" className="form-control mb-3" placeholder="Coupon Code" />

                            {/* Place Order Button */}
                            <button className="primaryBtn w-100 mt-3" onClick={handlePlaceOrder}>Place Order</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
