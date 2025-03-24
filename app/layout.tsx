import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const mona_Sans = Mona_Sans({
  variable: "--font-mina-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Updin",
  description: "Uma plataforma para preparação de entrevistas simuladas com IA e feedbacks personalizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body
        className={`${mona_Sans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
