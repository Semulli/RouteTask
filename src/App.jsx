import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/Layout/NavBar/NavBar";
import Footer from "./components/Layout/Footer/Footer";
import About from "./components/Abouts/About";
import ProductDetails from "./components/Details/ProductDetails";
import Menu from "./components/Menu/Menu";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./Constants/Router";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.About} element={<About />} />
        <Route path={ROUTER.Contact} element={<Contact />} />
        <Route path={ROUTER.Product} element={<Menu />} />
        <Route path={ROUTER.Product + "/:id"} element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
