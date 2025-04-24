import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Header/Header.png";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Achievers", href: "/achievers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Admission", href: "/admission" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-t from-red-700/70 to-black/80 text-white shadow-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 md:py-5 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="inline-flex items-center font-bold text-lg">
          <img
            src={logo}
            alt="Warrior"
            className="h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-orange-500"
                  : "text-lg font-semibold hover:text-orange-500 transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <NavLink to="/contact">
            <button className="rounded-md bg-orange-600 px-6 py-2 text-sm font-semibold hover:bg-black/80 transition">
              Join now
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay background */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={toggleMenu}
        ></div>

        {/* Sidebar panel with transparent background */}
        <div className="absolute right-0 top-0 h-full w-full bg-black text-white p-6">
          <div className="flex justify-between items-center">
            <NavLink
              to="/"
              className="inline-flex items-center font-bold text-lg"
            >
              <img
                src={logo}
                alt="Warrior"
                className="h-12 w-auto object-contain"
              />
            </NavLink>
            <button onClick={toggleMenu} className="text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-6 space-y-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md text-base font-semibold text-orange-500"
                    : "block px-3 py-2 rounded-md text-base font-medium text-white hover:text-orange-400"
                }
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="mt-4 w-full rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold hover:bg-black/80 transition">
                Join now
              </button>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
