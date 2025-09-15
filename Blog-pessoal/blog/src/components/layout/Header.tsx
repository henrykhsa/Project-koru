import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 md:py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Título do blog */}
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          Código Humano
        </Link>
        
        {/* Links de navegação */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/sobre" className="hover:text-gray-300 transition-colors">
            Sobre
          </Link>
          <Link href="/contato" className="hover:text-gray-300 transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}