import Navbar from "./routes/navbar/navbar";
import Home from "./routes/home";
import { Routes , Route } from "react-router-dom";
import Authentication from "./routes/Authentication/authentication";

function App() {
return(
  <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>} />
      <Route path='authentication' element={<Authentication />} />
    </Route>
    
  </Routes>

);
  
}

export default App;
