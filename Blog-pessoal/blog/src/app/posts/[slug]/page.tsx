import { getPostBySlug } from '@/lib/posts';
import LikeButton from '@/components/LikeButton';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: { slug: string } }) {

  let post;
  const awaitedParams = await params; // Aguarda a resolução dos parâmetros
  try {
    post = await getPostBySlug(awaitedParams.slug);
  } catch (error) {
    console.error("Erro ao buscar o post:", error);
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>

      <div className="mb-8">
        <LikeButton slug={post.slug} />
      </div>

      <div className="prose lg:prose-xl">
        {post.content}
      </div>
    </article>
  );
}