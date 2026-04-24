export type MessagesProps = {
    common: Record<string, string>;
    auth: Record<string, string>;
};

export type TranslationFnProps = (
    key: string,
    values?: Record<string, string | number>,
) => string;
