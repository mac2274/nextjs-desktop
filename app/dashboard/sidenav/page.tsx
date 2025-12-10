import Link from 'next/link';

export default function SideNav() {
  return (
    <nav className="flex flex-col gap-4 p-4 bg-gray-100 h-full border-r">
      <Link href="/dashboard" className="text-gray-700 hover:text-black">
        Dashboard
      </Link>
      <Link href="/dashboard/customers" className="text-gray-700 hover:text-black">
        Customers
      </Link>
      <Link href="/dashboard/invoices" className="text-gray-700 hover:text-black">
        Invoices
      </Link>
    </nav>
  );
}