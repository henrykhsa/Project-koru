import PostCard from '@/components/PostCard';
import { getSortedPostsData } from '@/lib/posts';
import { PostPreview } from '@/types/blog';


export default async function PostsPage() {
  // Busca todas as postagens (sem limite)
  const allPostsData: PostPreview[] = await getSortedPostsData();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-8">Todas as Postagens</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPostsData.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}