import { Route, Routes } from "react-router-dom";
import app from './App.css';
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import About from "./screens/about/About";
import Contact from "./screens/contact/Contact.jsx";
import Home from './screens/home/Home.jsx'
import Products from "./screens/products/Products";


function App() {
  return (
    <div className="App">
       <NavBar/>

       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/products' element={<Products/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/about' element={<About/>}/>

       </Routes>

       <Footer/>
    </div>
  );
}

export default App;
