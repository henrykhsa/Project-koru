import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  
  title: {
    default: "Código Humano | Blog de um Desenvolvedor",
    template: "%s | Código Humano",
  },
  description: "Um blog sobre a jornada de um desenvolvedor, explorando a vida pessoal, projetos, carreira e tecnologia. Por Henry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}