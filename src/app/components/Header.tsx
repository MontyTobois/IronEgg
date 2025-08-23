"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-black/40 text-white shadow-md ">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center ">
        <Link
          href="/"
          className="flex gap-x-3.5 text-2xl font-bold tracking-wide"
        >
          <Image
            src="/ironEggLogo.jpg"
            alt="Iron Egg Logo"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full"
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
            Monty &amp; The Iron Egg
          </span>
        </Link>

        <div className="md:hidden ">
          <button onClick={toggleNav}>
            {navOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav
          className={`${
            navOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full text-center bg-black/70 border-y md:border-0  md:bg-white/0 md:static md:flex md:w-auto md:space-x-8`}
        >
          <Link
            href="/"
            className="block py-2 px-4 hover:text-red-500 transition"
            onClick={() => setNavOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 px-4 hover:text-red-500 transition"
            onClick={() => setNavOpen(false)}
          >
            About
          </Link>
          <Link
            href="/gear"
            className="block py-2 px-4 hover:text-red-500 transition"
            onClick={() => setNavOpen(false)}
          >
            Gear
          </Link>
          <Link
            href="/episodes"
            className="block py-2 px-4 hover:text-red-500 transition"
            onClick={() => setNavOpen(false)}
          >
            Episodes
          </Link>
          <Link
            href="/gallery"
            className="block py-2 px-4 hover:text-red-500 transition"
            onClick={() => setNavOpen(false)}
          >
            Gallery
          </Link>
          <a
            href="https://www.youtube.com/@YourChannel"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-4 text-red-600 font-semibold hover:text-red-400 transition"
            onClick={() => setNavOpen(false)}
          >
            YouTube
          </a>
        </nav>
      </div>
    </header>
  );
}
