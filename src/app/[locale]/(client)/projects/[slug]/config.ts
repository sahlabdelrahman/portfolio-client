import { ProjectItemProps, ProjectProps } from "./types";

export const textItems: ProjectItemProps[] = [
    {
        id: "text-001",
        type: "text",
        text: {
            content: `<h2>This is a Heading</h2><p>This paragraph explains more details with <strong>bold text</strong> and <em>italic styles</em>.</p>`,
            direction: "start",
        },
    },
];

export const embedItems: ProjectItemProps[] = [
    {
        id: "embed-01",
        type: "embed",
        alt: "YouTube Video",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        ariaLabel: "YouTube Embed",
        caption: {
            content: "This is a YouTube video embed example.",
            direction: "center",
            color: "#999",
        },
    },
    {
        id: "embed-02",
        type: "embed",
        alt: "Vimeo Video",
        url: "https://vimeo.com/76979871",
        ariaLabel: "Vimeo Embed",
        caption: {
            content: "This is a Vimeo video embed example.",
            direction: "start",
            color: "#ccc",
        },
    },
    {
        id: "embed-03",
        type: "embed",
        alt: "Instagram Post",
        url: "https://www.instagram.com/p/DKSZv2TsdTM/",
        ariaLabel: "Instagram Embed",
    },
    {
        id: "tw",
        type: "embed",
        url: "https://twitter.com/jack/status/20",
    },
    {
        id: "fb",
        type: "embed",
        url: "https://www.facebook.com/SAHL07/posts/pfbid02dJiBJAWDvwRdZo7wUrA9mvh1RT2KEca5FhASPWRWn377xkeSKBoXijzJ9uegLZS7l",
    },
];

export const gridItems: ProjectItemProps[] = [
    {
        id: "3949403",
        type: "grid",
        config: {
            spaceBetweenItems: "1rem",
        },
        size: "full",
        items: [
            {
                id: "5409950",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "54945005",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "540990",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "95903",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "0333334",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "00909334",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            // {
            //     id: "0549004",
            //     type: "text",
            //     text: {
            //         content: `<h2>This is a Heading</h2><p>This paragraph explains more details with <strong>bold text</strong> and <em>italic styles</em>.</p>`,
            //         direction: "start",
            //     },
            // },
        ],
    },
    {
        id: "903209",
        type: "grid",
        config: {
            spaceBetweenItems: "1rem",
        },
        items: [
            {
                id: "03334",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "03337",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "033074",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "06534",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
        ],
    },
    {
        id: "903222309",
        type: "grid",
        config: {
            spaceBetweenItems: "1rem",
        },
        size: "full",
        items: [
            {
                id: "03334",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "03337",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "033074",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
        ],
    },
    {
        id: "9032323209",
        type: "grid",
        config: {
            spaceBetweenItems: "1rem",
        },
        items: [
            {
                id: "03334",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "03337",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
        ],
    },
    {
        id: "903232we3209wq",
        type: "grid",
        config: {
            spaceBetweenItems: "1rem",
        },
        items: [
            {
                id: "03334",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "03337",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
        ],
    },
    {
        id: "903232323309",
        type: "grid",
        config: {
            spaceBetweenItems: "1rem",
        },
        items: [
            {
                id: "03334",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
        ],
    },
];
export const sliderItems: ProjectItemProps[] = [
    {
        id: "9032322342343209",
        type: "slider",
        config: {
            autoPlay: false,
            withBullets: false,
            withArrows: true,
        },
        items: [
            {
                id: "03323423423434",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467802148-QQQS0I11A7PW1K9DVDHW/Markosian_001-small-2.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467802148-QQQS0I11A7PW1K9DVDHW/Markosian_001-small-2.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "03337",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
        ],
    },
    {
        id: "903232we3209",
        type: "slider",
        items: [
            {
                id: "033334",
                type: "video",
                alt: "image",
                url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                width: 1500,
                height: 1000,
                ariaLabel: "video",
                duration: 15000,
                mediaControls: {
                    type: "video/mp4",
                    controls: false,
                    muted: true,
                    autoPlay: true,
                    loop: true,
                    playsInline: true,
                    preload: "auto",
                    poster: {
                        url: "",
                    },
                },
            },
            {
                id: "0323243334",
                type: "video",
                alt: "image",
                url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                width: 1500,
                height: 1000,
                ariaLabel: "video",
                duration: 15000,
                mediaControls: {
                    type: "video/mp4",
                    controls: false,
                    muted: true,
                    autoPlay: true,
                    loop: true,
                    playsInline: true,
                    preload: "auto",
                    poster: {
                        url: "",
                    },
                },
            },
        ],
    },
];

export const imageOrVideoAndText: ProjectItemProps[] = [
    {
        id: "903232we320349",
        type: "imageOrVideoAndText",
        config: {
            spaceBetweenItems: "1rem",
        },
        items: [
            {
                id: "03334",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "324324234231",
                type: "text",
                text: {
                    content: "<h2>This is a caption</h2>",
                    direction: "start",
                    verticallyDirection: "end",
                },
            },
        ],
    },
    {
        id: "903232we32320349",
        type: "imageOrVideoAndText",
        config: {
            spaceBetweenItems: "1rem",
        },
        items: [
            {
                id: "324324234231",
                type: "text",
                text: {
                    content: "<h2>This is a caption</h2>",
                    direction: "start",
                    verticallyDirection: "center",
                },
            },
            {
                id: "03334",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
        ],
    },
    {
        id: "903232we32320qweq32349",
        type: "imageOrVideoAndText",
        config: {
            spaceBetweenItems: "1rem",
        },
        items: [
            {
                id: "03334",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "324324234231",
                type: "text",
                text: {
                    content:
                        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
                    direction: "start",
                    verticallyDirection: "start",
                },
            },
        ],
    },
    {
        id: "903232we3232032349",
        type: "imageOrVideoAndText",
        config: {
            spaceBetweenItems: "1rem",
        },
        items: [
            {
                id: "03334",
                type: "image",
                alt: "image",
                url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                blurDataURL:
                    "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
                width: 1500,
                height: 1000,
            },
            {
                id: "324324234231",
                type: "text",
                text: {
                    content:
                        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
                    direction: "start",
                    verticallyDirection: "start",
                },
            },
        ],
    },
    {
        id: "903232we323qwqe2032349",
        type: "imageOrVideoAndText",
        config: {
            spaceBetweenItems: "1rem",
        },
        items: [
            {
                id: "03334",
                type: "video",
                alt: "image",
                url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                width: 1500,
                height: 1000,
                ariaLabel: "video",
                duration: 15000,
                mediaControls: {
                    type: "video/mp4",
                    controls: false,
                    muted: true,
                    autoPlay: true,
                    loop: true,
                    playsInline: true,
                    preload: "auto",
                    poster: {
                        url: "",
                    },
                },
            },
            {
                id: "324324234231",
                type: "text",
                text: {
                    content: "<p>Hello world</p>",
                    direction: "start",
                    verticallyDirection: "start",
                },
            },
        ],
    },
];

export const audioItems: ProjectItemProps[] = [
    {
        id: "audio-1",
        type: "audio",
        url: "http://webaudioapi.com/samples/audio-tag/chrono.mp3",
        mediaControls: {
            autoPlay: true,
            controls: false,
            loop: true,
            muted: false,
        },
    },
];

export const items: ProjectItemProps[] = [
    {
        id: "01",
        type: "image",
        alt: "image",
        url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467802148-QQQS0I11A7PW1K9DVDHW/Markosian_001-small-2.jpg?format=2500w",
        blurDataURL:
            "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467802148-QQQS0I11A7PW1K9DVDHW/Markosian_001-small-2.jpg?format=2500w",
        width: 1500,
        height: 1000,
        ariaLabel: "image",
        size: "full",
    },
    {
        id: "02",
        type: "image",
        alt: "image",
        url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
        blurDataURL:
            "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
        width: 1500,
        height: 1000,
        ariaLabel: "image",
        size: "normal",
        caption: {
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            direction: "start",
            color: "#f00",
        },
    },
    {
        id: "06",
        type: "image",
        alt: "image",
        url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1598753706203-8P4IVCY7NR241K1EIDFX/markosian-mornings-001.JPG",
        blurDataURL:
            "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1598753706203-8P4IVCY7NR241K1EIDFX/markosian-mornings-001.JPG",
        width: 1500,
        height: 1000,
        ariaLabel: "image",
        size: "normal",
        config: {
            background: "#000",
            spaceInTopAndBottom: "4rem",
        },
    },
    {
        id: "05",
        type: "video",
        alt: "image",
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        width: 1500,
        height: 1000,
        ariaLabel: "video",
        duration: 15000,
        mediaControls: {
            type: "video/mp4",
            controls: false,
            muted: true,
            autoPlay: true,
            loop: true,
            playsInline: true,
            preload: "auto",
            poster: {
                url: "",
            },
        },
        size: "normal",
    },
];

export const projects: ProjectProps[] = [
    {
        id: "project-001",
        title: "Daily Moments",
        description:
            "A collection of images representing everyday life and personal narratives.",
        items: [
            ...textItems,
            items[1],
            items[2],
            items[3],
            ...embedItems,
            ...gridItems,
            ...imageOrVideoAndText,
            ...sliderItems,
            ...audioItems,
        ],
        cover: items[0],
        keywords: ["life", "moments", "storytelling"],
        config: {
            background: "#ffffff",
            contentSpacing: "2rem",
            showCoverWithTheContent: true,
        },
        url: "sahlabdelrahman.com",
        category: "Documentary",
    },
    {
        id: "project-002",
        title: "Urban Silence",
        description:
            "Capturing the silent side of urban spaces through candid visuals.",
        items: [items[1], items[2]],
        cover: items[1],
        keywords: ["urban", "silence", "documentary"],
        config: {
            background: "#f4f4f4",
            contentSpacing: "3rem",
            showCoverWithTheContent: false,
        },
    },
];
