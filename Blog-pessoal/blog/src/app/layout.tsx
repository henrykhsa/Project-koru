import type { Metadata } from "next";
// As fontes "Geist" são específicas da Vercel. 
// Para um projeto mais genérico, você pode usar o "Inter" do Google Fonts.
// import { Inter } from "next/font/google"; 
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// Crie esses arquivos em /components/Header.tsx e /components/Footer.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  // 1. Meta dados do seu blog para SEO
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
    // 2. Mude o idioma para português do Brasil
    <html lang="pt-br">
      <body>
        <div className="flex flex-col min-h-screen">
          {/* 3. Componentes de UI que aparecem em todas as páginas */}
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