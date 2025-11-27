import Image from "next/image";
import Link from "next/link";
import { CakeIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-200 to-amber-400 text-center text-amber-900">
        <div className="z-10 px-4">
          <h1 className="text-5xl sm:text-6xl font-serif mb-4">Palm & Pastry</h1>
          <p className="text-xl sm:text-2xl mb-8">
            Dairy-free scones that honor the victory of the cross
          </p>
          <Link
            href="/menu"
            className="bg-amber-600 text-white px-6 py-3 rounded hover:bg-amber-700 transition"
          >
            View Menu
          </Link>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center mb-8 text-lg">
          Discover our delicious dairy-free scones made with love and healthy ingredients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded shadow">
            <div className="relative h-48 w-full bg-amber-100 flex items-center justify-center rounded mb-2">
                <CakeIcon className="h-24 w-24 text-amber-400" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl">Blueberry Lemon</h3>
            <p>Bursting with fresh flavors.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
            <div className="relative h-48 w-full bg-amber-100 flex items-center justify-center rounded mb-2">
                <CakeIcon className="h-24 w-24 text-amber-400" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl">Chocolate Chip</h3>
            <p>Rich and indulgent, dairy-free.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
            <div className="relative h-48 w-full bg-amber-100 flex items-center justify-center rounded mb-2">
                <CakeIcon className="h-24 w-24 text-amber-400" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl">Cranberry Orange</h3>
            <p>Tangy and sweet.</p>
          </div>
        </div>
      </section>
    </>
  );
}