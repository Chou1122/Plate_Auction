'use client';

import Image from "next/image";
import Bg_img from "@/assets/bg_top.svg"
import Nav from "./components/nav";
import Social from "./components/social";
import EventPanel from "./components/event";
import Footer from "./components/footer";
import Cursor from "./components/cursor";
import List from "./components/list";

export default function Homepage() {
  return (
    <div className="relative bg-gray-100">
      <Image alt="" src={Bg_img} className="w-full overflow-hidden absolute top-0 left-0 blur-2xl" />

      <main className="relative px-10 md:px-16 py-16">
        <section className="min-h-screen">
          <Cursor />
          <Nav whiteMode/>
          <div className="h-24"></div>

          <section className="flex flex-row justify-center 2xl:justify-between">
            <div className="hidden 2xl:flex flex-row gap-16">
              <Social />
              <div>
                <div className="uppercase text-white flex flex-col gap-3 font-lato tracking-wider">
                  <span className="block text-4xl font-light">Online</span>
                  <span className="block text-9xl font-black">Auction</span>
                  <span className="block text-4xl font-light">Of the plate</span>
                </div>

                <div className="rounded-full overflow-hidden py-1 bg-white flex flex-row px-1 w-fit mt-10">
                  <input type="text" className="border-none focus:outline-none focus:ring-0 w-full" />

                  <button className="rounded-full bg-blue-900 hover:bg-blue-950 text-white px-5 ml-3">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="2xl:absolute right-16">
              <EventPanel />
            </div>
          </section>

        </section>

        <section className="mb-16">
          <List />
        </section>

      </main>
      <Footer />
    </div>
  )
}