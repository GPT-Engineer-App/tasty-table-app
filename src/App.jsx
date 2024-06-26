import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart.jsx";
import Events from "./pages/Events.jsx";
import Checkout from "./pages/Checkout.jsx";
import Receipt from "./pages/Receipt.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/receipt" element={<Receipt />} />
        <Route exact path="/restaurant1/*" element={<Restaurant1 />} />
        <Route exact path="/restaurant2/*" element={<Restaurant2 />} />
        <Route exact path="/restaurant3/*" element={<Restaurant3 />} />
      </Routes>
    </Router>
  );
}

export default App;