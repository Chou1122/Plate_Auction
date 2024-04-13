'use client';

import Image from "next/image";
import Bg_img from "@/assets/bg_top.svg"
import EventPanel from "./components/event";
import Footer from "../components/footer";
import Cursor from "../components/cursor";
import List from "../components/list";
import Cover from "./components/cover";
import Header from "../components/header";

export default function Homepage() {
  console.count("He");
  return (
    <div className="relative bg-gray-100">
      <Image alt="" src={Bg_img} className="w-full overflow-hidden absolute top-0 left-0 blur-2xl" />
      <Cursor />

      <Header type="transparent" className="relative py-16"/>

      <main className="relative px-10 md:px-16 py-16">
        <section className="flex flex-row justify-center 2xl:justify-between min-h-screen">
          <div className="h-16"></div>
          <Cover className="hidden 2xl:flex flex-row gap-16" />
          <EventPanel />
        </section>

        <section className="mb-16 cursor-default">
          <List />
        </section>

      </main>

      <Footer />
    </div>
  )
}