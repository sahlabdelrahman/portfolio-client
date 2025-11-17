export const themeColor = [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
];

export const DefaultValues = {
    title: "Portfolio",
    description: "Portfolio",
    keywords: ["portfolio", "projects"],
    generator: "Sahl Abdelrahman",
    applicationName: "Sahl Abdelrahman",
    authors: [{ name: "Sahl Abdelrahman", url: "https://sahlabdelrahman.com" }],
    creator: "Sahl Abdelrahman",
    publisher: "Sahl Abdelrahman",
    metadataBase: new URL("https://sahlabdelrahman.com"),
    category: "Portfolio",
    openGraph: {
        url: "",
        siteName: "Portfolio",
        imageUrl: "",
        twitterHandle: "",
    },

    //  "favicon": "https://cdn.example.com/icons/favicon.png",
    // "shortcut": "https://cdn.example.com/icons/favicon.png",
    // "appleTouchIcon": "https://cdn.example.com/icons/apple.png",
    // "icon192": "https://cdn.example.com/icons/icon-192.png",
    // "icon512": "https://cdn.example.com/icons/icon-512.png"

    icons: {
        favicon:
            "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
        shortcut:
            "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",

        appleTouchIcon:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/180px-React-icon.svg.png",

        icon192:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/192px-React-icon.svg.png",

        icon512:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    },

    themeColor,
    backgroundColor: "#ffffff",

    manifest: {
        name: "Sahl Abdelrahman Portfolio",
        shortName: "Sahl's Portfolio",
        startUrl: "/",
        display: "standalone",
    },
};
