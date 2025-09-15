import { PostData } from '@/types/blog';

export function getSortedPostsData(): PostData[] {
  const posts: PostData[] = [
    { slug: 'post-5', title: 'Como me mantive motivado na programação', date: '2025-09-12', excerpt: 'História sobre como lidei com o burnout...' },
    { slug: 'post-4', title: 'Meu primeiro projeto em Next.js', date: '2025-08-25', excerpt: 'Compartilho os aprendizados do meu projeto...' },
    { slug: 'post-3', title: 'Aprendendo a dizer não', date: '2025-07-15', excerpt: 'Sobre a importância de gerenciar expectativas...' },
    { slug: 'post-2', title: 'O poder dos projetos paralelos', date: '2025-06-01', excerpt: 'Como um projeto pessoal pode impulsionar a carreira...' },
    { slug: 'post-1', title: 'Por que comecei a programar', date: '2025-05-10', excerpt: 'Minha história de como a tecnologia mudou minha vida...' },
  ];
  return posts;
}