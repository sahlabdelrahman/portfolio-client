export interface PageMetadataProps {
    title: string;
    description: string;
    keywords?: string[];
    openGraph: {
        url: string;
        siteName: string;
        imageUrl: string;
        twitterHandle: string;
    };
    category?: string;
}
