import HomePage from './component/HomePage.js';
import ProductDetail from "./component/ProductDetail";
import CartPage from "./component/CartPage";
import Navigation from "./component/Navigation";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp";

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
        </Router>
    );
};

export default App;
