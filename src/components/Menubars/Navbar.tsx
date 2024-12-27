"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image';

interface MenuItem {
  name: string;
  path: string;
}

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const menuItems: MenuItem[] = [
    { name: "Home", path: "/" },
    { name: "Article", path: "/article" },
    { name: "Poetry", path: "/poetry" },
    { name: "Stories", path: "/stories" },
    { name: "About Us", path: "/about" },
    { name: "Submission", path: "/submission" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 px-4 lg:px-10 xl:px-6 2xl:px-32">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/tatvani_logo.jpg"
            alt="Tatvani Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl sm:text-3xl font-bold text-[#1c7636] dark:text-white">
            Tatvani
          </span>
        </div>

        {/* Search Bar (Mobile) */}
        <div className="lg:hidden flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-500 dark:border-gray-400 rounded-2xl px-2 py-1 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Dark Mode and Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-xl rounded-full border border-gray-500 dark:border-gray-400 p-2"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="text-2xl dark:text-white"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="px-3 py-2 rounded-2xl font-semibold text-gray-700 dark:text-white hover:bg-[#1c7636] hover:text-white dark:hover:bg-gray-700"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-xl ml-2 rounded-full border border-gray-500 dark:border-gray-400 p-2"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:block w-[300px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-500 dark:border-gray-400 rounded-2xl px-2 py-1 dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 text-black dark:text-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-6 space-y-6 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-[#1c7636] dark:text-white">
              Tatvani
            </span>
          </div>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={toggleMobileMenu}
              className="block px-4 py-2 text-lg font-semibold rounded-lg hover:bg-[#1c7636] hover:text-white dark:hover:bg-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
