"use client"

import { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "./components/sidebar";
import Button from "../components/form/button";
import { TbPlus } from "react-icons/tb";
import Table from "./components/table";

export default function Admin({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gray-50 cursor-default">
            <Header />
            <div className="flex my-10 min-h-screen mt-20 container mx-auto gap-10">
                <Sidebar />
                <main className="w-full">
                    <div className="flex justify-between mb-5">
                        <h1 className="text-2xl font-montserat font-semibold text-gray-700">Manage accounts</h1>
                        <Button title="Create" icon={TbPlus} color="cyan" />
                    </div>
                    <div className="shadow-xl">
                        <Table />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}