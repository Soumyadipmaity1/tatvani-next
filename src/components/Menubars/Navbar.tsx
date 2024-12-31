"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

interface MenuItem {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const initialDarkMode = localStorage.getItem('theme') === 'dark';
    setDarkMode(initialDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems: MenuItem[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Article", path: "/article" },
    { name: "Poetry", path: "/poetry" },
    { name: "Stories", path: "/stories" },
    { name: "Submission", path: "/submission" },
    { name: "Contact", path: "/contact" },
  ];

  const activeClassName =
    "bg-pitch px-2.5 lg:pb-1 text-darkBlue lg:pt-[1px] py-2 lg:py-0 font-semibold rounded-lg lg:rounded-2xl";

  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-[#111827] shadow-lg sticky top-0 z-50 lg:px-10 xl:px-6 2xl:px-32" suppressHydrationWarning={true}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center pr-14">
            <img
              src="./tatvani_logo.jpg"
              alt="logo"
              className="sm:w-10 w-8 mr-2 rounded-full"
            />
            <span className="sm:text-3xl text-2xl font-bold text-darkBlue dark:text-pitch lg:pb-2 pb-1 pt-0.5">
              Tatvani
            </span>
          </div>

          <div className="lg:hidden w-3/5 sm:pl-6 mr-2">
            <input
              type="text"
              placeholder="Search..."
              className="border border-darkBlue dark:border-pitch w-full rounded-2xl px-2 py-1 dark:bg-darkBlue dark:text-pitch text-darkBlue"
            />
          </div>

          <div className="lg:hidden z-50 flex items-center">
            <button
              onClick={toggleDarkMode}
              className="mr-4 text-xl rounded-full border border-darkBlue dark:border-pitch p-1.5"
            >
              {darkMode ? <FaSun className="text-pitch" /> : <FaMoon className="text-darkBlue" />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none dark:text-pitch text-darkBlue text-2xl"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div className="hidden lg:flex space-x-2 items-center">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path} legacyBehavior>
                <a
                  className={
                    pathname === item.path
                      ? activeClassName
                      : "hover:bg-pitch hover:text-darkBlue px-2.5 pb-1 pt-[1px] rounded-2xl font-semibold text-darkBlue dark:text-darkBlue dark:hover:bg-darkBlue"
                  }
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className="text-xl hidden lg:block ml-2 rounded-full border border-darkBlue dark:border-pitch p-2"
          >
            {darkMode ? <FaSun className="text-pitch" /> : <FaMoon className="text-darkBlue" />}
          </button>

          <div
            className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-[#111827] text-darkBlue dark:text-pitch text-lg font-semibold py-1 text-center transition-transform duration-300 ease-in-out z-40 ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-6 flex flex-col space-y-6">
              <div className="flex-col flex items-center justify-center m-5">
                <img
                  src="./tatvani_logo.jpg"
                  alt="logo"
                  className=" mb-5 mt-4 rounded-full w-16"
                />
                <span className="text-4xl font-bold text-darkBlue dark:text-pitch">
                  Tatvani
                </span>
              </div>

              {menuItems.map((item) => (
                <Link key={item.path} href={item.path} legacyBehavior>
                  <a
                    onClick={toggleMobileMenu}
                    className={
                      pathname === item.path
                        ? `text-darkBlue dark:text-pitch text-lg font-semibold ${activeClassName}`
                        : "hover:bg-pitch hover:text-darkBlue text-darkBlue dark:text-pitch dark:hover:bg-darkBlue"
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-[300px]">
            <input
              type="text"
              placeholder="Search..."
              className="border border-darkBlue dark:border-pitch w-full rounded-2xl px-2 py-1 dark:bg-darkBlue dark:text-pitch text-darkBlue"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
