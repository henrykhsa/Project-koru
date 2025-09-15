import { getSortedPostsData } from '@/lib/posts';
import Hero from '@/components/sections/Hero';
import LatestPost from '@/components/sections/LatestPost';
import RecentPosts from '@/components/sections/RecentPosts';
import Categories from '@/components/sections/Categories';
import { PostPreview } from '@/types/blog';

export default async function Home() {
  
  const allPostsData: PostPreview[] = await getSortedPostsData();
  
  const latestPost = allPostsData[0];
  const recentPosts = allPostsData.slice(1, 5);
  
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      {latestPost && <LatestPost post={latestPost} />}
      <RecentPosts posts={recentPosts}/>
      <Categories />
    </main>
  );
}