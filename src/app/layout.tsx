import type { Metadata } from "next";

import { Geist, Geist_Mono, Roboto } from "next/font/google";

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

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio",
};

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
