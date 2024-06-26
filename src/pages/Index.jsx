import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Index() {
  const user = {
    name: "John Doe",
    bio: "Food enthusiast. Love trying out new recipes and exploring different cuisines.",
    profilePicture: "/images/profile-picture.jpg",
    recentOrders: [
      { id: 1, name: "Grilled Chicken Sandwich", date: "2023-10-01" },
      { id: 2, name: "Classic Beef Burger", date: "2023-09-28" },
    ],
    upcomingEvents: [
      { id: 1, title: "Wine Tasting", date: "2023-10-15" },
      { id: 2, title: "Halloween Party", date: "2023-10-30" },
    ],
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-col items-center">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={user.profilePicture} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold">{user.name}</h1>
        <p className="text-lg text-center">{user.bio}</p>
      </div>
      <div className="flex space-x-4 mt-4">
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
      <div className="w-full max-w-3xl mt-6 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {user.recentOrders.length === 0 ? (
              <p>No recent orders.</p>
            ) : (
              <ul>
                {user.recentOrders.map((order) => (
                  <li key={order.id}>
                    {order.name} - {order.date}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            {user.upcomingEvents.length === 0 ? (
              <p>No upcoming events.</p>
            ) : (
              <ul>
                {user.upcomingEvents.map((event) => (
                  <li key={event.id}>
                    {event.title} - {event.date}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default Index;