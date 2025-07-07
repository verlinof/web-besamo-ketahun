"use client";
import Logo from "@/items/logo";
import { act, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ active }) => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="sticky top-0 z-[20] font-poppins bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          {/* Nav Link */}
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/"
                className={`${
                  active === "home"
                    ? "text-main-green font-semibold"
                    : "text-main-green hover:font-semibold"
                } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
              >
                Beranda
              </Link>
              <Link
                href="/pariwisata"
                className={`${
                  active === "pariwisata"
                    ? "text-main-green font-semibold"
                    : "text-main-green hover:font-semibold"
                } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
              >
                Pariwisata dan Budaya
              </Link>
              <Link
                href="/program-kerja"
                className={`${
                  active === "program kerja"
                    ? "text-main-green font-semibold"
                    : "text-main-green hover:font-semibold"
                } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
              >
                Program Kerja
              </Link>
            </div>
          </div>
          {/* Responsive Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              className="inline-flex w-auto items-center justify-center p-2 rounded-md text-main-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <Image
                  priority={false}
                  width={24}
                  height={24}
                  src="/close-menu.svg"
                  alt="menu"
                />
              ) : (
                <Image
                  priority={false}
                  width={24}
                  height={24}
                  src="/menu.svg"
                  alt="menu"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      <div
        className={`lg:hidden absolute top-20 w-full z-30 bg-white transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isClick ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className={`${
              active === "home"
                ? "bg-main-green text-white"
                : "text-main-green hover:bg-main-green hover:text-white"
            } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
          >
            Beranda
          </Link>
          <Link
            href="/pariwisata"
            className={`${
              active === "pariwisata"
                ? "bg-main-green text-white"
                : "text-main-green hover:bg-main-green hover:text-white"
            } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
          >
            Pariwisata dan Budaya
          </Link>
          <Link
            href="/program-kerja"
            className={`${
              active === "program kerja"
                ? "bg-main-green text-white"
                : "text-main-green hover:bg-main-green hover:text-white"
            } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
          >
            Program Kerja
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
