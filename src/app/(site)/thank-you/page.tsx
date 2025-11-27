import Link from "next/link";

export default function ThankYou() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h1 className="text-4xl font-serif mb-4">Thank You!</h1>
      <p className="text-lg mb-8">
        Your order has been received. We'll contact you soon to confirm.
      </p>
      <Link
        href="/"
        className="bg-amber-600 text-white px-6 py-3 rounded hover:bg-amber-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}