import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ar"];
export const defaultLocale = "en";

export const routing = defineRouting({
    locales,
    defaultLocale,
});
