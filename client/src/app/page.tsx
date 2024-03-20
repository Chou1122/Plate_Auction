import Image from "next/image";
import Bg_img from "@/assets/bg_top.svg"
import Nav from "./components/nav";
import Social from "./components/social";
import Contact from "./components/contact";
import Event from "./components/event";
import Footer from "./components/footer";

export default function Homepage() {
  return (
    <div className="relative">
      <Image alt="" src={Bg_img} className="w-full overflow-hidden absolute top-0 left-0" />

      <main className="relative px-16 min-h-screen">
        <div className="absolute top-80 -right-32 rotate-90">
          <Contact />
        </div>

        <Nav />
        <div className="h-24"></div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-16">
            <Social />
            <div>
              <div className="uppercase text-white flex flex-col gap-3 font-lato tracking-wider">
                <span className="block text-4xl font-light">Online</span>
                <span className="block text-9xl font-extrabold">Auction</span>
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

          <Event />
        </div>
      </main>

      <Footer />
    </div>
  )
}