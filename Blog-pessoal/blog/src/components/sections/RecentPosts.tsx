import PostCard from '@/components/postCard';
import { RecentPostsProps } from '@/types/blog';

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="my-12">
      <h2 className="text-4xl font-bold mb-6 text-primary">Recentes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}