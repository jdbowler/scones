import Image from "next/image";
import { CakeIcon } from "@heroicons/react/24/solid";

const scones = [
  { name: "Blueberry Lemon", description: "Fresh blueberries and zesty lemon.", price: 5, image: "/scones/blueberry.jpg" },
  { name: "Chocolate Chip", description: "Dairy-free chocolate in every bite.", price: 5, image: "/scones/chocolate.jpg" },
  { name: "Cranberry Orange", description: "Tart cranberries with citrus.", price: 5, image: "/scones/cranberry.jpg" },
  { name: "Apple Cinnamon", description: "Warm spices and apple chunks.", price: 5, image: "/scones/apple.jpg" },
  { name: "Raspberry White Chocolate", description: "Sweet raspberries and dairy-free white chocolate.", price: 5, image: "/scones/raspberry.jpg" },
  { name: "Pumpkin Spice", description: "Seasonal favorite with cozy spices.", price: 5, image: "/scones/pumpkin.jpg" },
  { name: "Lemon Poppyseed", description: "Bright lemon with crunchy seeds.", price: 5, image: "/scones/lemon.jpg" },
  { name: "Classic Plain", description: "Simple and perfect for any topping.", price: 5, image: "/scones/plain.jpg" },
];

export default function Menu() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {scones.map((scone) => (
        <div key={scone.name} className="bg-white p-4 rounded shadow">
        <div className="relative h-48 w-full bg-amber-100 flex items-center justify-center rounded mb-2">
            <CakeIcon className="h-24 w-24 text-amber-400" aria-hidden="true" />
        </div>
        <h3 className="font-serif text-xl">{scone.name}</h3>
        <p className="text-sm mb-2">{scone.description}</p>
        <p className="font-bold">${scone.price}</p>
        </div>
        ))}
      </div>
    </section>
  );
}