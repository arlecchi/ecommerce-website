import HomePage from './component/HomePage.js';
import ProductDetail from "./component/ProductDetail";
import CartPage from "./component/CartPage";
import Navigation from "./component/Navigation";
import Checkout from "./component/Checkout";
import SignUp from "./component/SignUp";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default App;
