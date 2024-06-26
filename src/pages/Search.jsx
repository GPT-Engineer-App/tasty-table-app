import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  { id: 1, name: "Grilled Chicken Sandwich", category: "Sandwich", price: 8.99 },
  { id: 2, name: "Classic Beef Burger", category: "Burger", price: 10.49 },
  { id: 3, name: "Caesar Salad", category: "Salad", price: 7.49 },
  // Add more products as needed
];

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory ? product.category === filterCategory : true)
    );
  });

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-3xl font-bold">Search Products</h1>
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Select onValueChange={setFilterCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="Sandwich">Sandwich</SelectItem>
            <SelectItem value="Burger">Burger</SelectItem>
            <SelectItem value="Salad">Salad</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <Button>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Search;