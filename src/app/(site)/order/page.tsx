"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormData = {
  name: string;
  email: string;
  phone: string;
  selections: { [key: string]: number };
  pickupDate: string;
  notes: string;
};

const flavors = [
  "Blueberry Lemon",
  "Chocolate Chip",
  "Cranberry Orange",
  "Apple Cinnamon",
  "Raspberry White Chocolate",
  "Pumpkin Spice",
  "Lemon Poppyseed",
  "Classic Plain",
];

export default function Order() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    // Filter selections to only include >0
    const filteredSelections = Object.fromEntries(
      Object.entries(data.selections).filter(([_, qty]) => qty > 0)
    );
    const submitData = { ...data, selections: filteredSelections };

    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitData),
    });
    router.push("/thank-you");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center mb-8">Place Your Order</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: true })}
            className="mt-1 block w-full border-amber-300 rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            className="mt-1 block w-full border-amber-300 rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone", { required: true })}
            className="mt-1 block w-full border-amber-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Scone Selections</label>
          {flavors.map((flavor) => (
            <div key={flavor} className="flex items-center space-x-2 mt-2">
              <span>{flavor}</span>
              <select
                {...register(`selections.${flavor}`)}
                defaultValue={0}
                className="border-amber-300 rounded p-1"
              >
                {[...Array(13)].map((_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="pickupDate" className="block text-sm font-medium">
            Pickup Date
          </label>
          <input
            id="pickupDate"
            type="date"
            {...register("pickupDate", { required: true })}
            className="mt-1 block w-full border-amber-300 rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm font-medium">
            Notes
          </label>
          <textarea
            id="notes"
            {...register("notes")}
            className="mt-1 block w-full border-amber-300 rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-600 text-white px-6 py-3 rounded hover:bg-amber-700 transition"
        >
          Submit Order
        </button>
      </form>
    </section>
  );
}