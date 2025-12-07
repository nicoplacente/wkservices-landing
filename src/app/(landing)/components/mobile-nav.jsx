"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavMobile({ navItems }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="md:hidden text-green-500 hover:text-green-400 transition-colors cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 p-4 flex flex-col gap-4 absolute top-full left-0 w-full">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.txt}
              className="hover:text-green-400 block"
              onClick={() => setOpen(false)}
            >
              {item.txt}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
