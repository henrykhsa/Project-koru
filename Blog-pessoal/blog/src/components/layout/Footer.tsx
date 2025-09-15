export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Código Humano. Todos os direitos reservados.
        </p>
        
        {/* Links para redes sociais */}
        <div className="mt-4 flex justify-center space-x-6">
          {/* inserir link das redes sociais */}
        </div>
      </div>
    </footer>
  );
}