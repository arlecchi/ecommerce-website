import { useState, useRef } from "react";
import Navigation from "./Navigation";
import BannerPromotion from "./Banner";
import { Provider } from "./MyContext";
import CategoryCard from "./CategoryCard";
import Product from "./Product";

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const productRef = useRef(null); // Create reference to Product section

    return (
        <Provider>
            <Navigation />
            <div id="home">
                <BannerPromotion />
            </div>
            <div id="category">
                <CategoryCard setSearchQuery={setSearchQuery} productRef={productRef} />
            </div>
            <div id="product" ref={productRef}>
                <Product searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
        </Provider>
    );
};

export default HomePage;
