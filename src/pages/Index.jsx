import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-3xl font-bold">Welcome to Our Restaurant</h1>
      <p className="text-lg">
        Explore our delicious menu, add items to your cart, and check out our upcoming events!
      </p>
      <div className="flex space-x-4">
        <Link to="/menu">
          <Button variant="outline">Browse Menu</Button>
        </Link>
        <Link to="/cart">
          <Button variant="outline">View Cart</Button>
        </Link>
        <Link to="/events">
          <Button variant="outline">Upcoming Events</Button>
        </Link>
      </div>
    </main>
  );
}

export default Index;