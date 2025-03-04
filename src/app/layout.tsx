import type { Metadata } from "next";

import { Geist, Geist_Mono, Roboto } from "next/font/google";

import { generateGlobalMetadata } from "@/utils/helpers/metadata";

import "../styles/globals.scss";

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
