import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-primaryText text-white">
      <div
        className="max-w-7xl mx-auto px-6 py-6 
                      flex flex-col md:flex-row 
                      items-center justify-between 
                      gap-4 text-sm"
      >
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Masari Logo" width={24} height={24} />
          <span className="font-semibold">MASARI</span>
        </div>

        {/* Center - Links */}
        <div className="flex gap-6 text-gray-400">
          <Link href="https://salahslab.com/" className="hover:text-white transition">
            About
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms
          </Link>
        </div>

        {/* Right - Copyright */}
        <p className="text-gray-500 text-xs ">
          © {new Date().getFullYear()} MASARI
        </p>
      </div>
    </footer>
  );
}
