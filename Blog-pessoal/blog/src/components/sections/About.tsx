export default function About() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md my-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src="/seu-avatar.jpg"
          alt="Sua foto de perfil"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h2 className="text-3xl font-semibold text-gray-700">Olá, sou Henry!</h2>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Sou um desenvolvedor full-stack e entusiasta de tecnologia. Sou apaixonado por criar soluções que ajudam as pessoas a resolver problemas do dia a dia. Neste blog, compartilho minhas experiências, aprendizados e insights sobre desenvolvimento web, produtividade e equilíbrio entre vida pessoal e profissional.
          </p>
        </div>
      </div>
    </section>
  );
}