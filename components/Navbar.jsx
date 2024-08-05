import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-xl">ViNol</div>
        <div className="space-x-4">
          <Link href="/">
            <button className="text-black hover:text-gray-200">
              Home Page
            </button>
          </Link>
          <Link href="/contact us">
            <button className="text-black hover:text-gray-200">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
