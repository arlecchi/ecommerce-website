import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import AddressList from "./AddressList";

const Checkout = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [step, setStep] = useState(1);
    const [shippingInfo, setShippingInfo] = useState({ name: "", address: "" });
    const [selectedShipment, setSelectedShipment] = useState("free");
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [estimatedDelivery, setEstimatedDelivery] = useState("01 Apr, 2025");

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.count, 0);
    const discount = subtotal * 0.1;
    const shipping = selectedShipment === "priority" ? 8.5 : 0;
    const total = subtotal - discount + shipping;
 
    const estimatedDates = {
        free: "01 Apr, 2025",
        priority: "28 Mar, 2025",
        schedule: "Select Date ▼",
    };
    const selectedDate = estimatedDates[selectedShipment];

    const handleStepChange = (newStep) => setStep(newStep);

    const handleAddressSelect = (selectedAddress) => {
        setShippingInfo({
            name: selectedAddress.name,
            address: selectedAddress.address,
        });
    };

    const handlePlaceOrder = () => {
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        navigate("/");
    };

    return (
        <div className="checkout-page container mt-5">
            <Navigation />
            <h2 className="mb-4"><strong>Checkout</strong></h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="checkout-container d-flex justify-content-between">
                    {/* Left Section: Steps Navigation & Content */}
                    <div className="left-section col-md-7">
                        {/* Step Navigation */}
                        <div className="step-navigation d-flex mb-4">
                            <span className={`step-text ${step === 1 ? "active-step" : "inactive-step"}`} 
                                onClick={() => handleStepChange(1)}>Address</span>
                            <span className="step-separator"> &gt; </span>

                            <span className={`step-text ${step === 2 ? "active-step" : "inactive-step"}`} 
                                onClick={() => handleStepChange(2)}>Shipping</span>
                            <span className="step-separator"> &gt; </span>

                            <span className={`step-text ${step === 3 ? "active-step" : "inactive-step"}`} 
                                onClick={() => handleStepChange(3)}>Payment</span>
                        </div>

                        {/* Address Selection Step */}
                        {step === 1 && (
                            <div>
                                <h4>Address</h4>
                                <AddressList onSelectAddress={handleAddressSelect} />
                            </div>
                        )}

                        {/* Shipment Section */}
                        {step === 2 && (
                            <div>
                                <h4 className="mt-4">Shipment Method</h4>
                                <div className="shipment-method border p-3 rounded">
                                    {/* Free Shipping */}
                                    <label className={`shipment-option ${selectedShipment === "free" ? "selected" : ""}`}>
                                        <input type="radio" name="shipment" value="free"
                                            checked={selectedShipment === "free"}
                                            onChange={() => setSelectedShipment("free")} />
                                        <span className="radio-circle"></span>
                                        <div className="shipment-info">
                                            <strong>Free</strong> <span className="text-muted">Regular Shipment</span>
                                        </div>
                                        <span className="shipment-date">{estimatedDates["free"]}</span>
                                    </label>

                                    {/* Priority Shipping */}
                                    <label className={`shipment-option ${selectedShipment === "priority" ? "selected" : ""}`}>
                                        <input type="radio" name="shipment" value="priority"
                                            checked={selectedShipment === "priority"}
                                            onChange={() => setSelectedShipment("priority")} />
                                        <span className="radio-circle"></span>
                                        <div className="shipment-info">
                                            <strong>$8.50</strong> <span className="text-muted">Priority Shipping</span>
                                        </div>
                                        <span className="shipment-date">{estimatedDates["priority"]}</span>
                                    </label>

                                    {/* Schedule Delivery */}
                                    <label className={`shipment-option ${selectedShipment === "schedule" ? "selected" : ""}`}>
                                        <input type="radio" name="shipment" value="schedule"
                                            checked={selectedShipment === "schedule"}
                                            onChange={() => setSelectedShipment("schedule")} />
                                        <span className="radio-circle"></span>
                                        <div className="shipment-info">
                                            <strong>Schedule</strong> <span className="text-muted">Choose a date that works for you.</span>
                                        </div>
                                        <span className="shipment-date">Select Date</span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Payment Section */}
                        {step === 3 && (
                            <div>
                                <h4 className="mt-4">Payment Method</h4>
                                <div className="payment-method border rounded p-3">
                                    {/* Card 1 */}
                                    <label className={`payment-option d-flex align-items-center justify-content-between p-3 ${selectedPayment === "card1" ? "selected" : ""}`}>
                                        <div className="d-flex align-items-center">
                                            <input type="radio" id="card1" name="payment" value="card1"
                                                checked={selectedPayment === "card1"}
                                                onChange={() => setSelectedPayment("card1")}
                                                className="d-none" />
                                            <span className="custom-radio me-2">{selectedPayment === "card1" && <span className="inner-dot"></span>}</span>
                                            <img src="https://raw.githubusercontent.com/arlecchi/image-hosting/main/Logo-visa-icon-PNG.png" alt="Visa" className="payment-icon me-2" />
                                            <strong>•••• 6754</strong>
                                        </div>
                                        <span className="text-muted">Expires 06/2026</span>
                                        <span className="remove-payment text-danger">Remove</span>
                                    </label>

                                    {/* Card 2 */}
                                    <label className={`payment-option d-flex align-items-center justify-content-between p-3 ${selectedPayment === "card2" ? "selected" : ""}`}>
                                        <div className="d-flex align-items-center">
                                            <input type="radio" id="card2" name="payment" value="card2"
                                                checked={selectedPayment === "card2"}
                                                onChange={() => setSelectedPayment("card2")}
                                                className="d-none" />
                                            <span className="custom-radio me-2">{selectedPayment === "card2" && <span className="inner-dot"></span>}</span>
                                            <img src="https://raw.githubusercontent.com/arlecchi/image-hosting/main/MasterCardIcon.png" alt="MasterCard" className="payment-icon me-2" />
                                            <strong>•••• 5643</strong>
                                        </div>
                                        <span className="text-muted">Expires 11/2028</span>
                                        <span className="remove-payment text-danger">Remove</span>
                                    </label>
                                </div>

                                {/* Add Payment Method */}
                                <div className="add-payment d-flex align-items-center mt-3">
                                    <span className="add-icon me-2">+</span> 
                                    <span>Add Payment Method</span>
                                </div>
                            </div>
                        )}

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
                            <p className="text-muted">Estimated Delivery by <strong>{selectedDate}</strong></p>

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
