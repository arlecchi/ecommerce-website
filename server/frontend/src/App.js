import {Provider} from './component/MyContext.js';
import HomePage from './component/HomePage.js';

const App = ()=>{
  return(
    <>
      <Provider>
        <HomePage />
      </Provider>
      <h1>Hello world</h1>
    </>
  )
}

export default App