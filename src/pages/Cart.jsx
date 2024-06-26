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
    <main className="flex flex-col items-center gap-4 p-4 lg:gap-6 lg:p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="w-full space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <CardTitle>{item.name}</CardTitle>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button onClick={() => updateQuantity(item, item.quantity - 1)}>-</Button>
                <Input 
                  type="number" 
                  value={item.quantity} 
                  onChange={(e) => updateQuantity(item, e.target.value)} 
                  className="w-16 text-center"
                />
                <Button onClick={() => updateQuantity(item, item.quantity + 1)}>+</Button>
                <Button onClick={() => removeFromCart(item)} className="bg-red-500 text-white">Remove</Button>
              </div>
            </Card>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="w-full mt-4 space-y-4">
          <p className="text-xl font-bold">Total: ${calculateTotal()}</p>
          <Button onClick={handleCheckout} className="w-full bg-blue-500 text-white">
            Proceed to Checkout
          </Button>
          <Button onClick={() => navigate("/menu")} className="w-full bg-gray-500 text-white">
            Continue Shopping
          </Button>
        </div>
      )}
    </main>
  );
}

export default Cart;