import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {
    product: {
      id: 1,
      name: "Grilled Chicken Sandwich",
      description: "A delicious grilled chicken sandwich with fresh ingredients.",
      price: 8.99,
      image: "/images/grilled-chicken-sandwich.jpg",
    },
  };

  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    // Implement add to cart logic here
    console.log(`Added ${quantity} of ${product.name} to cart.`);
    navigate("/cart");
  };

  return (
    <main className="flex flex-1 flex-col items-center gap-4 p-4 lg:gap-6 lg:p-6">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={product.image} alt={product.name} className="mb-4 w-full h-64 object-cover rounded" />
          <p className="mb-4">{product.description}</p>
          <p className="mb-4 text-xl font-bold">${product.price.toFixed(2)}</p>
          <div className="flex items-center space-x-4">
            <Button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</Button>
            <span>{quantity}</span>
            <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
          </div>
          <Button onClick={addToCart} className="mt-4 bg-blue-500 text-white">Add to Cart</Button>
        </CardContent>
      </Card>
    </main>
  );
}

export default ProductDetails;