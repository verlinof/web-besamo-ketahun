"use client";
import Logo from "@/items/logo";
import { act, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  const router = useRouter();
  const active = router.asPath;

  return (
    <nav className="bg-black sticky top-0 z-[20] font-urbanist">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          {/* Nav Link */}
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/"
                className={`${
                  active === "/"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white hover:text-black"
                } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={`${
                  active === "/projects"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white hover:text-black"
                } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
              >
                Projects
              </Link>
              <Link
                href="/process"
                className={`${
                  active === "/process"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white hover:text-black"
                } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
              >
                Process
              </Link>
            </div>
          </div>
          {/* Responsive Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              className="inline-flex w-auto items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
        className={`lg:hidden absolute top-16 w-full z-30 bg-black transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isClick ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className={`${
              active === "/"
                ? "bg-white text-black"
                : "text-white hover:bg-white hover:text-black"
            } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`${
              active === "/projects"
                ? "bg-white text-black"
                : "text-white hover:bg-white hover:text-black"
            } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
          >
            Projects
          </Link>
          <Link
            href="/process"
            className={`${
              active === "/process"
                ? "bg-white text-black"
                : "text-white hover:bg-white hover:text-black"
            } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
          >
            Process
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
