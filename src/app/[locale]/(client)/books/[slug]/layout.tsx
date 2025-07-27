// TODO: Remember to replace static metadata with metadata from the book response

import type { Metadata } from "next";

import { PageMetadataProps } from "@/types/client/metadata";

import { generateGlobalMetadata } from "@/utils/helpers/metadata";
import { books } from "./config";
import { generalInfo } from "@/app/[locale]/config";

const bookMetadata = books[0];

const staticPageMetadata = {
    title: bookMetadata?.title || "",
    description: bookMetadata?.description || "",
    openGraph: {
        url: bookMetadata?.url || "",
        siteName: generalInfo?.siteName,
        imageUrl: bookMetadata?.cover?.url || "",
        twitterHandle: generalInfo?.twitterHandle,
    },
    keywords: bookMetadata?.keywords,
    category: bookMetadata?.category,
};

export async function generateMetadata(): Promise<Metadata> {
    const pagemetadata: PageMetadataProps = staticPageMetadata;

    return generateGlobalMetadata({
        title: {
            default: pagemetadata?.title,
            template: `%s | ${pagemetadata?.title}`,
        },
        description: pagemetadata?.description,
        openGraph: {
            title: pagemetadata?.title,
            description: pagemetadata?.description,
            url: pagemetadata?.openGraph?.url,
            siteName: pagemetadata?.openGraph?.siteName,
            images: [
                {
                    url: pagemetadata?.openGraph?.imageUrl,
                    alt: pagemetadata?.title,
                },
            ],
        },
        twitter: {
            title: pagemetadata?.title,
            description: pagemetadata?.description,
            creator: pagemetadata?.openGraph?.twitterHandle,
            images: {
                url: pagemetadata?.openGraph?.imageUrl,
                alt: pagemetadata?.title,
            },
        },
        keywords: pagemetadata?.keywords,
        category: pagemetadata?.category,
    });
}

export default function Book({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
