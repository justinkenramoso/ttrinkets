import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Head from "next/head";
import Image from "next/image";

function products() {
  return (
    <>
      <Head>
        <title>Timeless Trinkets | Products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {/* <main className="bg-light1 pt-16">
        <div className="container mx-auto py-10">
          <h2 className="text-5xl text-dark2 font-semibold">Latest Products</h2>
          <hr className="my-5" />
          <h3 className="text-3xl font-bold mb-2 px-5">Retroid Pocket 3</h3>
          <div className="grid lg:grid-cols-2">
            <div className="px-5">
              <iframe
                className="w-full h-full aspect-video mb-3"
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FTimeless.Trinkets.PH%2Fvideos%2F424995469706218%2F&show_text=false&width=560&t=0"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="px-5 text-sm">
              <p className="font-semibold text-lg mb-3">
                Is the Retroid Pocket 3 the ultimate affordable handheld
                emulator to get? See for yourself! We only have few units left!
                Message us now to get your own unit!
              </p>
              <ul className="list-disc mb-5">
                <li>Brand new 3+32gb Retroid Pocket 3</li>
                <li>
                  Sealed/unopened, includes 32gb red Sandisk sd card,
                  replacement buttons, charging cord, and screen protector.
                </li>
                <li>
                  Opened black & 16bit units in the photo are for reference
                  only, currently setting up the units for customers.
                </li>
                <li className="font-bold">
                  Basic Package: Sealed/unopened unit with the basic inclusions
                  for only 10,500 pesos!
                </li>
                <li className="font-bold">
                  Pro Package: 128gb SanDisk sd card (with pre-installed games
                  and custom set up) + basic inclusions for only 12,000 pesos.
                  Requires 10 days lead time, currently setting up multiple
                  units sold.
                </li>
              </ul>
              <a
                href="#"
                className="border border-blue-500 bg-blue-500 font-bold text-light1 py-2 px-10 rounded mr-2 hover:bg-transparent hover:text-blue-500 transition"
              >
                Order Now <i className="fa-brands fa-facebook-messenger"></i>
              </a>
              <a
                href="#"
                className="border border-dark2 text-dark2 py-2 px-5 rounded hover:bg-dark2 hover:text-light1 transition"
              >
                Specs <i className="fa-solid fa-gears"></i>
              </a>
            </div>
          </div>
        </div>
      </main> */}
      <Footer />
    </>
  );
}

export default products;
