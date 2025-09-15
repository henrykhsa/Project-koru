import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Sobre Mim</h1>

      <section className="bg-white p-8 rounded-lg shadow-md my-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="/photo.jpg"
            alt="Sua foto de perfil"
            className="w-40 h-40 rounded-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-700">Olá, sou Henry!</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Sou um desenvolvedor apaixonado por unir a lógica do código com a criatividade da vida. Comecei a programar para resolver problemas e, com o tempo, descobri que a maior satisfação é construir algo que possa ajudar outras pessoas. Este blog é um espaço para compartilhar a minha jornada, desde os desafios técnicos até as reflexões pessoais que moldam a minha carreira.
            </p>
          </div>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Encontre-me</h2>
        <div className="flex justify-center space-x-8">
          <Link href="https://github.com/henrykhsa" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors">
            <FaGithub size={32} />
            <span className="text-lg">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/henrykhsa" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors">
            <FaLinkedin size={32} />
            <span className="text-lg">LinkedIn</span>
          </Link>
        </div>
      </section>
    </main>
  );
}