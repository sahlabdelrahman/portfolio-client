import type { Metadata } from "next";

import { PageMetadataProps } from "@/types/client/metadata";

import { generateGlobalMetadata } from "@/utils/helpers/metadata";

const staticPageMetadata = {
    title: "Books",
    description: "Explore my latest books.",
    openGraph: {
        url: "",
        siteName: "",
        imageUrl: "",
        twitterHandle: "",
    },
    keywords: ["books"],
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
    });
}

export default function Projects({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
