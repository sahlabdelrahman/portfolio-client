import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { generateGlobalMetadata } from "@/utils/helpers/metadata";

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations({
        locale: params.locale,
        namespace: "auth.otpAuthentication",
    });

    const title = t("title");
    const description = t("description");

    return generateGlobalMetadata({
        title: {
            default: title,
            template: `%s | ${title}`,
        },
        description: description,
    });
}

export default function OtpAuthentication({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
