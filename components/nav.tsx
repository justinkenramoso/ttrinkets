import React from "react";

function nav() {
  return (
    <nav className="flex items-center w-screen h-16 fixed top-0 z-10 bg-light1 text-dark2 drop-shadow-lg">
      <div className="container mx-auto px-3">
        <div className="flex items-center text-xl justify-center lg:justify-between">
          <div className="flex items-center">
            <a href="/">
              <img src="/logo.png" alt="" className="w-12 h-12" />
            </a>
            <a href="/" className="hidden lg:block font-bold text-3xl pr-10">
              TIMELESS TRINKETS
            </a>
          </div>
          <div className="flex items-center">
            <a href="#" className="px-2 lg:px-6 hover:text-dark1">
              Products
            </a>
            <a href="/about" className="px-2 lg:px-6 hover:text-dark1">
              About
            </a>
            <a href="#" className="px-2 lg:px-6 hover:text-dark1">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default nav;
