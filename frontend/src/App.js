import {Provider} from './component/MyContext.js';
import HomePage from './component/HomePage.js';
import CategoryCard from './component/CategoryCard.js';
import BannerPromotion from './component/Banner.js';

const App = ()=>{
  return(
    <>
      <Provider>
        <HomePage />
        <CategoryCard/>
        <BannerPromotion/>
      </Provider>
      <h1>Hello world</h1>
    </>
  )
}

export default App