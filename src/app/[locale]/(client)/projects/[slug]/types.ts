import { MediaControlsProps } from "@/types/client/global";

export interface ConfigItemProps {
    background?: string;
    spaceInTopAndBottom?: string;
    spaceBetweenItems?: string;
    autoPlay?: boolean;
    withBullets?: boolean;
    withArrows?: boolean;
}

export interface TextItemProps {
    content?: string;
    direction?: "start" | "end" | "left" | "right" | "center";
    verticallyDirection?: "start" | "end" | "center";
}

export interface SubItemProjectItemProps {
    id: string;
    type: string;
    alt?: string;
    url?: string;
    blurDataURL?: string;
    width?: number;
    height?: number;
    text?: TextItemProps;
    ariaLabel?: string;
    duration?: number;
    mediaControls?: MediaControlsProps;
}

export interface ProjectItemProps {
    id: string;
    type: string;
    alt?: string;
    url?: string;
    blurDataURL?: string;
    width?: number;
    height?: number;
    ariaLabel?: string;
    duration?: number;
    mediaControls?: MediaControlsProps;
    description?: string;
    text?: TextItemProps;
    size?: string;
    config?: ConfigItemProps;
    caption?: {
        content?: string;
        direction?: "start" | "end" | "left" | "right" | "center";
        color?: string;
    };
    items?: SubItemProjectItemProps[];
}

export interface ProjectConfigProps {
    background?: string;
    contentSpacing?: string;
    showCoverWithTheContent: boolean;
}

export interface ProjectProps {
    id: string;
    title?: string;
    description?: string;
    items: ProjectItemProps[];
    cover: ProjectItemProps;
    keywords?: string[];
    config: ProjectConfigProps;
    url?: string;
    category?: string;
}
