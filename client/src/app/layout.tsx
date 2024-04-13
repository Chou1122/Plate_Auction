import type { Metadata } from "next";
import { Lato, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthGetter from "@/hooks/auth/auth_getter";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: '--font-lato',
});
const montserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-montserat',
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface IProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body className={`${montserat.variable} ${lato.variable}`}>
        <AuthGetter>
          {children}
          <ToastContainer stacked theme="colored" position="top-center" />
        </AuthGetter>
      </body>
    </html>
  );
}
