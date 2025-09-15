import PostCard from '@/components/PostCard';
import { LatestPostProps } from '@/types/blog';

export default function LatestPost({ post }: LatestPostProps) {
  return (
    <section className="my-12">
      <h2 className="text-4xl font-bold mb-6 text-foreground-title">Última postagem</h2>
      <PostCard post={post} isFeatured={true} />
    </section>
  );
}