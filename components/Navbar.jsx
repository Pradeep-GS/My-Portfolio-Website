"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none transition-all duration-500 pt-6">
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] 
        ${
          scrolled
            ? "w-[90%] md:w-[90%] lg:w-[60%] bg-[#1a0b2e9f] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-full px-6 py-2"
            : "w-full bg-transparent px-8 py-4 border-transparent"
        }
      `}
      >
        <div className="max-w-l7x mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter bg-linear-to-r from-[#763CAC] to-[#320f85] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            PRADEEP G S
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-400 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-4 mx-4 transition-all duration-300 origin-top
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
        `}
        >
          <div className="bg-[#1a0b2ee1] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-zinc-300 hover:text-white transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}