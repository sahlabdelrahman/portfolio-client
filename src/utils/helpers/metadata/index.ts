import { Metadata } from "next";

import { DefaultValues } from "./config";

export async function generateGlobalMetadata(
    overrides: Partial<Metadata> = {}
): Promise<Metadata> {
    const defaultMetadata: Metadata = {
        title: {
            default: DefaultValues.title,
            template: `%s | ${DefaultValues.title}`,
        },
        description: DefaultValues.description,
        keywords: DefaultValues.keywords,
        generator: DefaultValues.generator,
        applicationName: DefaultValues.applicationName,
        authors: DefaultValues.authors,
        creator: DefaultValues.creator,
        publisher: DefaultValues.publisher,
        openGraph: {
            title: DefaultValues.title,
            description: DefaultValues.description,
            type: "website",
            url: DefaultValues.openGraph.url,
            siteName: DefaultValues.openGraph.siteName,
            images: [
                {
                    url: DefaultValues.openGraph.imageUrl,
                    width: 800,
                    height: 600,
                    alt: DefaultValues.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: DefaultValues.title,
            description: DefaultValues.description,
            creator: DefaultValues.openGraph.twitterHandle,
            images: {
                url: DefaultValues.openGraph.imageUrl,
                alt: DefaultValues.title,
            },
        },
        robots: {
            index: false,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: false,
                noimageindex: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        metadataBase: DefaultValues.metadataBase,
        alternates: {
            canonical: "/",
        },
        bookmarks: [DefaultValues.metadataBase.toString()],
        category: DefaultValues.category,
    };

    return {
        ...defaultMetadata,
        ...overrides,
        title: overrides.title || defaultMetadata.title,
        description: overrides.description || defaultMetadata.description,
        keywords: overrides.keywords || defaultMetadata.keywords,
        openGraph: {
            ...defaultMetadata.openGraph,
            ...overrides.openGraph,
        },
        twitter: {
            ...defaultMetadata.twitter,
            ...overrides.twitter,
        },
    };
}
