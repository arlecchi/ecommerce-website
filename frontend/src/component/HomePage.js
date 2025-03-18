import Navigation from "./Navigation";
import BannerPromotion from "./Banner";
import { Provider } from "./MyContext";

const HomePage = ()=>{
    return(
            <Provider>
                <Navigation/>
                <BannerPromotion/>
            </Provider>
    )
}

export default HomePage;