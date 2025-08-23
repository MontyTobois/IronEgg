// components/Footer.tsx
import { Youtube, Instagram, Github, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 border-t border-zinc-700">
      <div className="max-w-6xl mx-auto text-center px-4 grid md:grid-cols-3 gap-8 items-start">
        {/* Left: Brand */}
        <div>
          <div className="text-lg font-semibold  text-black/50  mb-2">
            Monty & The Iron Egg
          </div>
          <p className="text-sm text-black ">
            A cinematic motovlog riding through the heart of Florida. Forged in
            motion. Bound by the road.
          </p>
        </div>

        {/* Middle: Nav Links */}
        <nav className="flex mx-auto text-center gap-4 text-lg">
          <Link href="/" className="hover:text-red-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-500 transition">
            About
          </Link>
          <Link href="/gear" className="hover:text-red-500 transition">
            Gear
          </Link>
          <Link href="/episodes" className="hover:text-red-500 transition">
            Episodes
          </Link>
          <Link href="/gallery" className="hover:text-red-500 transition">
            Gallery
          </Link>
        </nav>

        {/* Right: Contact */}
        <div className="">
          <h3 className="text-black/50   md:mx-auto text-sm font-semibold mb-2">
            Get in Touch
          </h3>
          <p className="text-sm text-black  mb-4">
            Want to ride, collab, or chat? Reach out anytime.
          </p>
          <div className="flex justify-center items-center gap-4 mx-auto text-center">
            <Link
              href="mailto:monty@motovlog.com"
              target="_blank"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 hover:text-red-500 transition" />
            </Link>
            <Link
              href="https://youtube.com/@yourchannel"
              target="_blank"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 hover:text-red-500 transition" />
            </Link>
            <Link
              href="https://instagram.com/yourhandle"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 hover:text-pink-400 transition" />
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 hover:text-white transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-xs text-center mt-10 text-black">
        &copy; {new Date().getFullYear()} Monty & The Iron Egg. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
