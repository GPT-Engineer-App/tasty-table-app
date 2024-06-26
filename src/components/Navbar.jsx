import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="ghost" className="text-white">Home</Button>
        </Link>
        <Link to="/menu">
          <Button variant="ghost" className="text-white">Menu</Button>
        </Link>
        <Link to="/cart">
          <Button variant="ghost" className="text-white">Cart</Button>
        </Link>
        <Link to="/events">
          <Button variant="ghost" className="text-white">Events</Button>
        </Link>
      </div>
    </nav>
  );
}

function SecondHeader() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-700 text-white">
      <div className="flex items-center space-x-4">
        <Link to="/restaurant1">
          <Button variant="ghost" className="text-white">Restaurant 1</Button>
        </Link>
        <Link to="/restaurant2">
          <Button variant="ghost" className="text-white">Restaurant 2</Button>
        </Link>
        <Link to="/restaurant3">
          <Button variant="ghost" className="text-white">Restaurant 3</Button>
        </Link>
      </div>
    </nav>
  );
}

export { Navbar, SecondHeader };