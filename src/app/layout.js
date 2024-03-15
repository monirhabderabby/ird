import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <section className="h-screen p-4 flex gap-[30px]">
          <div className="w-[100px] bg-white rounded-3xl h-full py-6">
            <Sidebar />
          </div>
          <Navbar />
          <section className="w-full gap-x-[30px] h-[calc(100vh-130px)] mt-[100px] flex">
            <div className="flex-1">{children}</div>
            <div className="w-[330px]">Profile</div>
          </section>
        </section>
      </body>
    </html>
  );
}
