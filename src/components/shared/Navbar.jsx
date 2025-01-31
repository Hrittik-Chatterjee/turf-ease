// components/Navbar.js
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo1.png";
import { Bokor } from "next/font/google";

const bokor = Bokor({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 text-gray-900 p-4 contianer">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left: Logo (if needed, you can add the logo again) */}
        <div className="flex items-center ">
          <Image src={logo} alt="Logo" width={70} height={70} />
          <div className={bokor.className}>
            <p className="text-3xl hover:text-primary">Turf Ease</p>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-primary px-2 py-1 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary px-2 py-1 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/terms"
            className="hover:text-primary px-2 py-1 transition-colors"
          >
            Terms and Conditions
          </Link>

          <Link
            href="/register"
            className="hover:text-primary px-2 py-1 transition-colors"
          >
            Register as Field Owner
          </Link>
        </div>

        {/* Right: Sign In Button */}
        <div>
          <Link
            href="/signin"
            className="hover:text-primary px-2 py-1 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
