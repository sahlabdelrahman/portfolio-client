export interface ServiceItem {
    id: string;
    title: string;
    content?: string;
}

export interface ContactProps {
    id: string;
    title: string;
    description: string;
    services?: ServiceItem[];
}
