import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ItemsWanted from "./Pages/ItemsWanted";
import Home from "./Pages/Home";
import ItemsForSale from "./Pages/ItemsForSale";
import Services from "./Pages/Services";
import Navbar from "./components/navbar/Navbar";
import Compose from "./components/Compose";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Link to="/" style={{ marginInline: "1rem" }}>Home </Link>

      <Link to="/items-wanted" style={{ marginInline: "1rem" }}>Items Wanted</Link>

      <Link to="/items-for-sale" style={{ marginInline: "2rem" }}>Items for Sale</Link>

      <Link to="/services" style={{ marginInline: "1rem" }}>Services</Link>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/items-wanted" element={<ItemsWanted />} />
        <Route path="/items-for-sale" element={<ItemsForSale />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Compose />
    </BrowserRouter>
  )
}

export default App
