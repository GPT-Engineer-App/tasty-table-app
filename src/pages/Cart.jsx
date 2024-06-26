import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
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
                <p>Category: {item.category}</p>
                <p>Price: ${item.price}</p>
                <div className="flex items-center space-x-2">
                  <Input 
                    type="number" 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item, e.target.value)} 
                    className="w-16"
                  />
                  <Button onClick={() => removeFromCart(item)}>Remove</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <Button onClick={handleCheckout} className="mt-4">
          Proceed to Checkout
        </Button>
      )}
    </main>
  );
}

export default Cart;