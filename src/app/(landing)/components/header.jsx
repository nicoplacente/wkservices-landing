import MobileNav from "./mobile-nav";
import Link from "next/link";

import { NAV_ITEMS } from "../lib/constanst";

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-black/95 text-white z-40 backdrop-blur-sm border-b border-green-500/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="https://wk-services.vercel.app/dashboard"
          rel="noopener noreferrer nofollow"
          aria-label="Ir al dashboard de WK Services"
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-black font-bold text-xl">
            WK
          </div>
          <span className="text-xl font-bold tracking-tight">Services</span>
        </Link>

        <nav className="hidden lg:flex gap-8 font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.txt}
              className="hover:text-green-400 transition-colors"
            >
              {item.txt}
            </Link>
          ))}
        </nav>

        <MobileNav navItems={NAV_ITEMS} />
      </div>
    </header>
  );
}
