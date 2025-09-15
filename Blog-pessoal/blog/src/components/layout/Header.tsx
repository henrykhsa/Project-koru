import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 md:py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Título do blog */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image
        src="/logo.png"
        alt="Logo do blog"
        width={50}
        height={50}
        />
        </Link>
        {/* Links de navegação */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/posts" className="hover:text-gray-300 transition-colors">
          Todas as Postagens
          </Link>
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