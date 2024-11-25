// components/Navbar.js
import Link from "next/link"; // Import Link from Next.js

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 text-gray-900 p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left: Logo (if needed, you can add the logo again) */}
        {/* <div className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div> */}

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-green-500 px-2 py-1 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:text-green-500 px-2 py-1 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/terms"
            className="hover:text-green-500 px-2 py-1 transition-colors"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacy"
            className="hover:text-green-500 px-2 py-1 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/register"
            className="hover:text-green-500 px-2 py-1 transition-colors"
          >
            Register as Field Owner
          </Link>
        </div>

        {/* Right: Sign In Button */}
        <div>
          <Link
            href="/signin"
            className="hover:text-green-500 px-2 py-1 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
