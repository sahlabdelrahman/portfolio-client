export interface VideoControlsProps {
    controls?: boolean;
    muted?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    playsInline?: boolean;
    preload?: string;
    poster?: {
        url: string;
    };
    type?: string;
}

export interface ItemProps {
    id: string;
    type: string;
    alt: string;
    url: string;
    blurDataURL?: string;
    width: number;
    height: number;
    ariaLabel: string;
    duration?: number;
    videoControls?: VideoControlsProps;
    title?: string;
    description?: string;
}
