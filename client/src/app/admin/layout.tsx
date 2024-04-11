import { ReactNode } from "react";
import AuthProvider from "../components/auth/auth";

export default function Admin({ children }: { children: ReactNode }) {
    return (
        <AuthProvider>
            <div className="bg-gray-50 cursor-default">
                {/* <Header />
                <div className="flex my-10 min-h-screen mt-20 container mx-auto gap-10">
                    <Sidebar />
                    <main className="w-full">
                        {children}
                    </main>
                </div>
                <Footer /> */}
                {children}
            </div>
        </AuthProvider>
    )
}