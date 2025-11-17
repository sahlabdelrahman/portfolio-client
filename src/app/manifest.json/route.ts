import { NextResponse } from "next/server";

import { DefaultValues } from "@/utils/helpers/metadata/config";

export function GET() {
    const m = DefaultValues;

    const manifest = {
        name: m.manifest?.name || m.applicationName,
        short_name: m.manifest?.shortName || m.applicationName,
        start_url: m.manifest?.startUrl || "/",
        display: m.manifest?.display || "standalone",
        background_color: m.backgroundColor,
        theme_color: m.themeColor,
        icons: [
            {
                src: m.icons.icon192,
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: m.icons.icon512,
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };

    return NextResponse.json(manifest);
}
