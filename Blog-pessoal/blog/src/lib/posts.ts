import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostPreview } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const dateString = matterResult.data.date.toLocaleDateString('pt-BR');

    return {
      slug,
      title: matterResult.data.title,
      date: dateString,
      excerpt: matterResult.data.excerpt,
      content: matterResult.content,
    };
  } catch (error) {
    return null;
  }
}

export async function getSortedPostsData(): Promise<PostPreview[]> {
  const fileNames = await fs.readdir(postsDirectory);
  
  const allPostsDataPromises = fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const dateString = matterResult.data.date.toLocaleDateString('pt-BR');

    return {
      slug,
      title: matterResult.data.title,
      date: dateString,
      excerpt: matterResult.data.excerpt,
    };
  });

  const allPostsData = await Promise.all(allPostsDataPromises);

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}