import { getPostBySlug } from '@/lib/posts';
import LikeButton from '@/components/LikeButton';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(await params.slug);

  if (!post) {
    return <div>Post não encontrado!</div>; 
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