import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-red-700 p-4 mt-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/settings">
          <button className="text-white hover:text-gray-200">Settings</button>
        </Link>
        <Link href="/about us">
          <button className="text-white hover:text-gray-200">About us</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
