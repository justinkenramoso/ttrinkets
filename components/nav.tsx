import React from "react";
import Image from "next/image";
import Link from "next/link";

function nav() {
  return (
    <nav className="flex items-center w-screen h-16 fixed top-0 z-10 bg-light1 text-dark2 drop-shadow-lg">
      <div className="container mx-auto px-3">
        <div className="flex items-center text-xl justify-center lg:justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </Link>
            <Link href="/" className="hidden lg:block font-bold text-3xl pr-10">
              TIMELESS TRINKETS
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/" className="px-2 lg:px-6 hover:text-dark1">
              Home
            </Link>
            <Link href="/products" className="px-2 lg:px-6 hover:text-dark1">
              Products
            </Link>
            <Link href="/contact" className="px-2 lg:px-6 hover:text-dark1">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default nav;
