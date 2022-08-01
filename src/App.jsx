import './App.css';
import Navbar from "./Component/Navba/Navbar";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./Component/Menu/Home/Home";
import Blog from "./Component/Menu/Blog/Blog";
import Distributors from "./Component/Menu/Distributors/Distributors";
import Manufacturers from "./Component/Menu/Manufacturers/Manufacturers";
import Product from "./Component/Menu/Product/Product";
import LoginPage from "./Auth/LoginPage"
import HomeTap from "./Component/HomeTaps/HomeTap";
import CardPage from "./Component/Card/Card";
import Iamges from "./Component/Imageses/Iamges";
import CardProduct from "./Component/Product/CardProduct";
import Reviews from "./Component/Reviewes/Reviews";

function App() {
    return (
        <div className="Container">
            <BrowserRouter>
                <Routes >
                    <Route path="/" element={<Navbar/>}/>
                    <Route path="Home" element={<Home/>}/>
                    <Route path="Blog" element={<Blog/>}/>
                    <Route path="Distributors" element={<Distributors/>}/>
                    <Route path="Manufacturers" element={<Manufacturers/>}/>
                    <Route path="Product" element={<Product/>}/>
                    <Route path="LoginPage" element={<LoginPage/>}/>
                    <Route path="HomeTap" element={<HomeTap/>}/>
                    <Route path="CardPage" element={<CardPage/>}/>
                </Routes>
                <div>
                    <Iamges/>
                </div>
                <div>
                    <CardProduct/>
                </div>
                <div className="Reviews__Wrap">
                    <Reviews/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
