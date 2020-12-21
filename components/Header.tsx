import Image from "next/image";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header className="flex justify-center py-4 md:justify-between md:py-8">
      <Image src="/img/logo.svg" alt="Do While" width="150" height="33" />
      <nav className="hidden md:block space-x-8">
        <Link href="/nextjs">
          <a className="tracking-wide hover:text-gray-400">Next</a>
        </Link>
        <Link href="/tailwindcss">
          <a className="tracking-wide hover:text-gray-400">TailwindCSS</a>
        </Link>
        <Link href="/framer">
          <a className="tracking-wide hover:text-gray-400">Framer Motion</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
