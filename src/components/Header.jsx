import React, { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header({ navLinks }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/60 backdrop-blur-md border-b border-white/30">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex-1 flex items-center justify-start md:justify-center">
          <a
            href="#"
            aria-label="ProdDepth home"
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-sky-600 shadow-md flex items-center justify-center text-black font-extrabold">
              PD
            </div>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex-1 flex items-center justify-end gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 border border-none text-sm"
          >
            Request assessment
          </a>
          <button
            className="md:hidden p-2 rounded-md bg-white/4"
            onClick={() => setOpen(true)}
            aria-label="open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
}
