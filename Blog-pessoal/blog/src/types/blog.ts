// types/blog.ts

// 1. Interface base que define a estrutura de um post
export interface PostData {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
}

// 2. Interfaces para os componentes, reutilizando a interface PostData
export interface LatestPostProps {
    post: PostData;
}

export interface PostCardProps {
    post: PostData;
    isFeatured?: boolean;
}

export interface RecentPostsProps {
    posts: PostData[]; // 'PostData[]' é um array de objetos do tipo PostData
}