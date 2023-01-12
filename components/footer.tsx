import React from "react";

const footer = () => {
  return (
    <footer className="bg-dark2 text-light1 p-10 text-center">
      <div className="container flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="text-xl font-bold">Timeless Trinkets</h4>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/Timeless.Trinkets.PH"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i className="fa-brands fa-facebook text-2xl text-light1 hover:text-dark1 transition"></i>
            </a>
            <a
              href="https://www.facebook.com/messages/t/109517494814975"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i className="fa-brands fa-facebook-messenger text-2xl text-light1 hover:text-dark1 transition"></i>
            </a>
            <a href="#" className="mx-2">
              <i className="fa-brands fa-instagram text-2xl text-light1 hover:text-dark1 transition"></i>
            </a>
            <a href="#" className="mx-2">
              <i className="fa-brands fa-twitter text-2xl text-light1 hover:text-dark1 transition"></i>
            </a>
          </div>
        </div>
        <div>
          <p className="italic mt-4 md:mt-0">Happy Gaming! :&gt;</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
