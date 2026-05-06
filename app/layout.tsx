import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bluebox SAS ESP | Gestión de Residuos en Bogotá",
  description: "Líderes en recolección y gestión de residuos aprovechables en Bogotá. Cumplimos con el Decreto 596 de 2016. Certificamos la disposición final de sus materiales.",
  keywords: "gestión de residuos Bogotá, Bluebox reciclaje, Decreto 596 de 2016, recolección de residuos aprovechables, certificados de disposición final, empresa de servicios públicos ESP",
  openGraph: {
    title: "Bluebox SAS ESP | Gestión Ambiental Corporativa",
    description: "Transformamos sus residuos en responsabilidad ambiental.",
    type: "website",
    locale: "es_CO",
    url: "https://www.blueboxreciclajes.com",
    siteName: "Bluebox SAS ESP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es" 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}