import HomePage from './component/HomePage.js';
import'./App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./component/ProductDetail"; // Ensure correct path

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
