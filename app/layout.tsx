import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "MycoFarm — Jamur Tiram Premium Malang",
  description:
    "Supplier & Budidaya Jamur Tiram Segar Premium. Langsung dari kebun ke meja makan Anda. Organik, berkualitas, dipanen setiap hari.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-theme="forest">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <WAFloat />
        <Navbar />
        {/* pt-[72px] fixes the mobile space below fixed navbar */}
        <main className="pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
