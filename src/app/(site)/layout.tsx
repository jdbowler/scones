import Link from "next/link";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50 text-amber-900">
      <header className="sticky top-0 bg-amber-100 shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif">
            Palm & Pastry
          </Link>
          <nav aria-label="Main navigation" className="space-x-4">
            <Link href="/" className="hover:text-amber-600">
              Home
            </Link>
            <Link href="/menu" className="hover:text-amber-600">
              Menu
            </Link>
            <Link href="/order" className="hover:text-amber-600">
              Order
            </Link>
            <Link href="/about" className="hover:text-amber-600">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-amber-200 py-4 text-center text-sm">
        <p className="italic">
          &quot;The righteous shall flourish like the palm tree&quot; - Psalm 92:12
        </p>
        <p>&copy; 2025 Palm & Pastry. All rights reserved.</p>
      </footer>
    </div>
  );
}