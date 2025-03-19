import Navigation from "./Navigation";
import BannerPromotion from "./Banner";
import { Provider } from "./MyContext";
import CategoryCard from "./CategoryCard";
import Product from "./Product";

const HomePage = () => {
    return (
        <Provider>
            <Navigation />
            <div id="home">
                <BannerPromotion />
            </div>
            <div id="category">
                <CategoryCard />
            </div>
            <div id="product">
                <Product />
            </div>
        </Provider>
    );
};

export default HomePage;
