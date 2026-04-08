import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
