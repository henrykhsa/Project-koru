import { getPostBySlug } from '@/lib/posts'; // Vamos criar essa função

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    // Se o post não for encontrado, você pode renderizar uma página 404
    return <div>Post não encontrado!</div>; 
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      <div className="prose lg:prose-xl">
        {post.content}
      </div>
    </article>
  );
}