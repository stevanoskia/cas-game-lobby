
"use client"; // client component for useState

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-yellow-400 transition cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          Casino Games
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/login" className="hover:text-yellow-400 transition cursor-pointer">
            Login
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition cursor-pointer">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 px-2">
          <Link
            href="/login"
            className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
