import { useState } from "react";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false); 

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm w-full">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <a href="/">
            <img
              src="src/assets/logo.svg"
              alt="logo"
              className="h-3 md:h-4 lg:h-5 cursor-pointer"
            />
          </a>

          <ul className="hidden md:flex space-x-8 text-gray-700">
            <Link to="/signup" className="hover:text-blue-600 text-gray-600">Signup</Link>
            <Link to="/about" className="hover:text-blue-600 text-gray-600">About</Link>
            <Link to="/products" className="hover:text-blue-600 text-gray-600">Products</Link>
            <Link to="/pricing" className="hover:text-blue-600 text-gray-600">Pricing</Link>
            <Link to="/support" className="hover:text-blue-600 text-gray-600">Support</Link>
          </ul>

          {/* Mobile Toggle (visible only on small screens) */}
          <div className="md:hidden">
            <ToggleButton
              value="menu"
              selected={open}
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </div>
        </div>

        {/* Mobile menu — rendered only when open*/}
        {open && (
          <div
            className="md:hidden bg-white rounded-lg shadow-lg border border-gray-200 
                       px-5 py-4 mt-2 space-y-3 transform transition-all duration-200 origin-top"
          >
            <Link to="/signup" className="block text-gray-700 py-2 px-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen(false)}>Signup</Link>

            <Link to="/about" className="block text-gray-700 py-2 px-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen(false)}>About</Link>

            <Link to="/products" className="block text-gray-700 py-2 px-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen(false)}>Products</Link>

            <Link to="/pricing" className="block text-gray-700 py-2 px-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen(false)}>Pricing</Link>

            <Link to="/support" className="block text-gray-700 py-2 px-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen(false)}>Support</Link>
          </div>
        )}
      </nav>
    </>
  );
}
