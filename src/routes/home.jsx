
import "../catogories.styles.scss";
import snekers from "../images/snekers.jpg";
import jacket from "../images/Jackets.jpg";
import tops from "../images/Tops.jpg";
import hat from "../images/Hats.jpg";
import Pants from "../images/Pants.jpg";
import CatogryItem from "../components/catogry-item/catogry-item";
import { Outlet } from "react-router-dom";
function Home() {

    const catogories = [
        {
          id: 1,
          catogory: "SNEAKERS",
          imageUrl: snekers,
        },
        {
          id: 2,
          catogory: "JACKETS",
          imageUrl: jacket,
        },
        {
          id: 3,
          catogory: "PANTS",
          imageUrl: Pants,
        },
        {
          id: 4,
          catogory: "TOPS",
          imageUrl: tops,
        },
        {
          id: 5,
          catogory: "HATS",
          imageUrl: hat,
        },
      ];
    
      return (
        
        <div className="container">
            <Outlet />
          
    
          <div className="catogories-container">
            {catogories.map((catogry) => (
              <CatogryItem
                imageUrl={catogry.imageUrl}
                id={catogry.id}
                catogory={catogry.catogory}
              />
            ))}
          </div>
          <footer> @Vya-World</footer>
          
        </div>
      );
}

export default Home;
