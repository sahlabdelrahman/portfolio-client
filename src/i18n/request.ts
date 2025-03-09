import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

import { MessagesProps } from "@/types/client/i18n";

async function loadMessages(
    locale: string
): Promise<MessagesProps | undefined> {
    try {
        const [commonMessages, loginMessages] = await Promise.all([
            import(`../messages/common/${locale}.json`).then(
                (m) => m.default as Record<string, string>
            ),
            import(`../messages/login/${locale}.json`).then(
                (m) => m.default as Record<string, string>
            ),
        ]);

        return { common: commonMessages, login: loginMessages };
    } catch (error) {
        console.error(
            `Error loading translation files for locale "${locale}":`,
            error
        );
        return undefined;
    }
}

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale;

    const resolvedLocale: string = routing.locales.includes(locale ?? "")
        ? locale!
        : routing.defaultLocale;

    const messages =
        (await loadMessages(resolvedLocale)) ??
        (await loadMessages(routing.defaultLocale));

    return {
        locale: resolvedLocale,
        messages,
    };
});
