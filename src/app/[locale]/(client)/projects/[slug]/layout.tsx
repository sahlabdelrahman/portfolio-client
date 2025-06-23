// TODO: Remember to replace static metadata with metadata from the project response

import type { Metadata } from "next";

import { PageMetadataProps } from "@/types/client/metadata";

import { generateGlobalMetadata } from "@/utils/helpers/metadata";
import { projects } from "./config";
import { generalInfo } from "@/app/[locale]/config";

const projectMetadata = projects[0];

const staticPageMetadata = {
    title: projectMetadata?.title || "",
    description: projectMetadata?.description || "",
    openGraph: {
        url: projectMetadata?.url || "",
        siteName: generalInfo?.siteName,
        imageUrl: projectMetadata?.cover?.url || "",
        twitterHandle: generalInfo?.twitterHandle,
    },
    keywords: projectMetadata?.keywords,
    category: projectMetadata?.category,
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

export default function Project({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
