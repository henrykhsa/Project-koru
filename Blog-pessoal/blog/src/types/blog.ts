// Interface base que define a estrutura de um post
export interface PostData {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
}

// Interface para exibir o resumo do post (na pagina inicial)
export interface PostPreview {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
}

// Interface par o post completo (na página do post individual)
export interface Post extends PostPreview {
    content: string;
}

export interface PostCardProps {
    post: PostData;
    isFeatured?: boolean;
}

// Interfaces para os componentes, reutilizando a interface PostData
export interface LatestPostProps {
    post: PostData;
}

export interface RecentPostsProps {
    posts: PostData[]; // 'PostData[]' é um array de objetos do tipo PostData
}

export interface LikeButtonProps {
    slug: string;
}