import { getSortedPostsData } from '@/lib/posts';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import LatestPost from '@/components/sections/LatestPost';
import RecentPosts from '@/components/sections/RecentPosts';
import Categories from '@/components/sections/Categories';
import { PostData } from '@/types/blog';

export default function Home() {
  const allPostsData: PostData[] = getSortedPostsData();
  const latestPost = allPostsData[0];
  const recentPosts = allPostsData.slice(0, 4);
  
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      <About />
      {latestPost && <LatestPost post={latestPost} />}
      <RecentPosts posts={recentPosts}/>
      <Categories />
    </main>
  );
}
