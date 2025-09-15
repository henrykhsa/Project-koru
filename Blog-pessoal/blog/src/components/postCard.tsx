import Link from 'next/link';
import { PostCardProps } from '@/types/blog';

export default function PostCard({ post, isFeatured = false }: PostCardProps) {
  const cardClasses = isFeatured
    ? "bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
    : "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300";

  return (
    <Link href={`/posts/${post.slug}`} className="block">
      <article className={cardClasses}>
        <h3 className={`font-semibold ${isFeatured ? 'text-2xl' : 'text-xl'} text-gray-800`}>
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
        <p className={`mt-4 text-gray-600 ${isFeatured ? 'text-base' : 'text-sm'}`}>
          {post.excerpt}
        </p>
      </article>
    </Link>
  );
}