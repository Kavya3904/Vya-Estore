import Navbar from "./routes/navbar/navbar";
import Home from "./routes/core/home";
import { Routes , Route } from "react-router-dom";
import Authentication from "./routes/Authentication/authentication";
import Shop from "./routes/shop/shop.component";
import { ChekoutPage } from "./routes/checkout/checkout-component";

function App() {
return(
  <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>} />
      <Route path='authentication' element={<Authentication />} />
      <Route path='shop' element={<Shop />} />
      <Route path='checkout' element={<ChekoutPage />} />
    </Route>
    
  </Routes>

);
  
}

export default App;
