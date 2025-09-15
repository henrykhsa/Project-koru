// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostPreview } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  // Converte a data para uma string antes de retornar
  const dateString = matterResult.data.date.toLocaleDateString('pt-BR');

  return {
    slug,
    title: matterResult.data.title,
    date: dateString,
    excerpt: matterResult.data.excerpt,
    content: matterResult.content,
  };
}

export function getSortedPostsData(): PostPreview[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // Converte o objeto de data para uma string no formato "dia/mês/ano"
    const dateString = matterResult.data.date.toLocaleDateString('pt-BR');
    
    return {
      slug,
      title: matterResult.data.title,
      date: dateString,
      excerpt: matterResult.data.excerpt,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}