import { Route, Routes } from "react-router-dom";
import Index from "./Index.jsx";
import Menu from "./Menu.jsx";
import Cart from "./Cart.jsx";
import Events from "./Events.jsx";
import Checkout from "./Checkout.jsx";
import Receipt from "./Receipt.jsx";
import Navbar from "../components/Navbar.jsx";

function Restaurant1() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/receipt" element={<Receipt />} />
      </Routes>
    </>
  );
}

export default Restaurant1;