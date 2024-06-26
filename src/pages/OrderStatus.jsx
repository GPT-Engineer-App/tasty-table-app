import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const mockOrderData = [
  {
    id: 1,
    status: "Preparing",
    progress: 30,
    details: "Your order is being prepared.",
  },
  {
    id: 2,
    status: "Out for Delivery",
    progress: 70,
    details: "Your order is on the way.",
  },
  {
    id: 3,
    status: "Delivered",
    progress: 100,
    details: "Your order has been delivered.",
  },
];

function OrderStatus() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching order data from an API
    setTimeout(() => {
      setOrders(mockOrderData);
    }, 1000);
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-3xl font-bold">Order Status</h1>
      {orders.length === 0 ? (
        <p>Loading orders...</p>
      ) : (
        orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle>Order #{order.id}</CardTitle>
              <Badge>{order.status}</Badge>
            </CardHeader>
            <CardContent>
              <p>{order.details}</p>
              <Progress value={order.progress} />
            </CardContent>
          </Card>
        ))
      )}
    </main>
  );
}

export default OrderStatus;