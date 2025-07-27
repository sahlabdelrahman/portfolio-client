export interface BookConfigProps {
    background?: string;
    width?: number;
    height?: number;
    withSound?: boolean;
}

export interface BookItemProps {
    id: string;
    alt?: string;
    url?: string;
    blurDataURL?: string;
}

export interface BookProps {
    id: string;
    title?: string;
    description?: string;
    items: BookItemProps[];
    cover: BookItemProps;
    keywords?: string[];
    config: BookConfigProps;
    url?: string;
    category?: string;
}
