import { layoutTypes } from "@/components/client/About/Content/config";

export interface ImageProps {
    id: string;
    alt: string;
    url: string;
    blurDataURL?: string;
    width: number;
    height: number;
    caption?: string;
}

export interface SectionItem {
    id: string;
    title: string;
    content: string;
}

export type LayoutType = (typeof layoutTypes)[keyof typeof layoutTypes];

export interface AboutProps {
    id: string;
    layout: LayoutType;
    image?: ImageProps;
    text?: string;
    sections?: SectionItem[];
}
