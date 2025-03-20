import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage
  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
    setCart(cartItem);
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Increase quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count += 1;
    setCart(updatedCart);
  };

  // Decrease quantity (min 1)
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].count > 1) {
      updatedCart[index].count -= 1;
      setCart(updatedCart);
    }
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.count * item.price, 0);
  const discount = totalPrice * 0.1; // Example discount (10%)
  const finalPrice = totalPrice - discount;

  return (
    <div className="p-6 md:p-10 lg:p-16 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Cart <span className="text-gray-500 text-sm">{cart.length} ITEM(S)</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 bg-gray-100 p-6 rounded-lg">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border-b pb-4 mb-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-xl font-bold">${item.price.toLocaleString()}</p>
                  <div className="flex items-center mt-2">
                    <button className="px-3 py-1 border" onClick={() => decreaseQuantity(index)}>-</button>
                    <span className="px-4">{item.count}</span>
                    <button className="px-3 py-1 border" onClick={() => increaseQuantity(index)}>+</button>
                    <button className="text-red-500 ml-4" onClick={() => removeFromCart(index)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between"><span>Price</span><span>${totalPrice.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>${discount.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="text-red-500">Free</span></div>
            <div className="border-t pt-2 flex justify-between font-bold"><span>Total</span><span>${finalPrice.toLocaleString()}</span></div>
          </div>
          <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded">Proceed to Checkout</button>
        </div>
      </div>

      {/* Offer Banner */}
      <div className="mt-6 bg-pink-100 text-pink-600 p-4 rounded flex items-center">
        <span className="mr-2">💳</span> 10% Instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA
      </div>
    </div>
  );
};

export default CartPage;
