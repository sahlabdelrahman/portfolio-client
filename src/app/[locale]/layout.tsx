import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono, Roboto } from "next/font/google";

import { routing } from "@/i18n/routing";

import { generateGlobalMetadata } from "@/utils/helpers/metadata";

import "../../styles/globals.scss";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const roboto = Roboto({
    weight: "400", // TODO: specify a weight for the font
    variable: "--font-roboto",
    subsets: ["latin"],
});

export const viewport = {
    themeColor: [
        // TODO: Change colors to variables
        { media: "(prefers-color-scheme: light)", color: "cyan" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export async function generateMetadata(): Promise<Metadata> {
    return generateGlobalMetadata();
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!routing.locales.includes(locale as never)) {
        notFound();
    }

    const messages = await getMessages();
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
        <html lang={locale} dir={direction}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
