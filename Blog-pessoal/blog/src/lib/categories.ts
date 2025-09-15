// Simula uma lista de categorias com a contagem de posts.
// Em um projeto real, essa função contaria os posts de cada categoria
// com base nos dados que você busca.
export function getCategoriesWithCounts() {
  const categories = [
    { name: 'Carreira Dev', slug: 'carreira', count: 5 },
    { name: 'Vida Pessoal', slug: 'vida-pessoal', count: 3 },
    { name: 'Projetos', slug: 'projetos', count: 7 },
    { name: 'Tutoriais', slug: 'tutoriais', count: 2 },
  ];
  return categories;
}