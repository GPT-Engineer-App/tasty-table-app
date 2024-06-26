import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Grilled Chicken Sandwich", category: "Sandwich", price: 8.99, quantity: 1, image: "/images/grilled-chicken-sandwich.jpg" },
    { id: 2, name: "Classic Beef Burger", category: "Burger", price: 10.49, quantity: 2, image: "/images/classic-beef-burger.jpg" },
    { id: 3, name: "Caesar Salad", category: "Salad", price: 7.49, quantity: 1, image: "/images/caesar-salad.jpg" },
  ]);
  const navigate = useNavigate();

  const updateQuantity = (item, quantity) => {
    setCart(cart.map((cartItem) => 
      cartItem.id === item.id ? { ...cartItem, quantity: quantity } : cartItem
    ));
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-3xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cart.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={item.image} alt={item.name} className="mb-2 w-full h-32 object-cover" />
                <p>Category: {item.category}</p>
                <p>Price: ${item.price}</p>
                <div className="flex items-center space-x-2">
                  <Button onClick={() => updateQuantity(item, item.quantity - 1)}>-</Button>
                  <Input 
                    type="number" 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item, e.target.value)} 
                    className="w-16"
                  />
                  <Button onClick={() => updateQuantity(item, item.quantity + 1)}>+</Button>
                  <Button onClick={() => removeFromCart(item)} className="bg-red-500 text-white">Remove</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-4">
          <p className="text-xl font-bold">Total: ${calculateTotal()}</p>
          <Button onClick={handleCheckout} className="mt-4 bg-blue-500 text-white">
            Proceed to Checkout
          </Button>
          <Button onClick={() => navigate("/menu")} className="mt-4 ml-4 bg-gray-500 text-white">
            Continue Shopping
          </Button>
        </div>
      )}
    </main>
  );
}

export default Cart;