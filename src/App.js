import Navbar from "./routes/navbar/navbar";
import Home from "./routes/home";
import { Routes , Route } from "react-router-dom";
import SignIn from "./routes/sign-in/signin";

function App() {
return(
  <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>} />
      <Route path='sign-in' element={<SignIn />} />
    </Route>
    
  </Routes>

);
  
}

export default App;
