import Link from 'next/link';
import { getCategoriesWithCounts } from '@/lib/categories';

export default function Categories() {
  const categories = getCategoriesWithCounts();

  return (
    <section className="text-center my-12">
      <h2 className="text-3xl font-semibold text-foreground-title mb-4">Explore por Tópico</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Link 
            key={category.slug} 
            href={`/categorias/${category.slug}`}
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition-colors font-semibold">
            {category.name} ({category.count})
          </Link>
        ))}
      </div>
    </section>
  );
}