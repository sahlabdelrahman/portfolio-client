import { BookItemProps, BookProps } from "./types";

// TODO: Remember to replace these links with real photo book images
export const items: BookItemProps[] = [
    {
        id: "01",
        alt: "image",
        url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467802148-QQQS0I11A7PW1K9DVDHW/Markosian_001-small-2.jpg?format=2500w",
        blurDataURL:
            "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467802148-QQQS0I11A7PW1K9DVDHW/Markosian_001-small-2.jpg?format=2500w",
    },
    {
        id: "02",
        alt: "image",
        url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
        blurDataURL:
            "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
    },
    {
        id: "06",
        alt: "image",
        url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1598753706203-8P4IVCY7NR241K1EIDFX/markosian-mornings-001.JPG",
        blurDataURL:
            "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1598753706203-8P4IVCY7NR241K1EIDFX/markosian-mornings-001.JPG",
    },
    {
        id: "07 ",
        alt: "image",
        url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467802148-QQQS0I11A7PW1K9DVDHW/Markosian_001-small-2.jpg?format=2500w",
        blurDataURL:
            "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467802148-QQQS0I11A7PW1K9DVDHW/Markosian_001-small-2.jpg?format=2500w",
    },
];

export const books: BookProps[] = [
    {
        id: "project-001",
        title: "Book title",
        description: "Book description",
        items,
        cover: items[0],
        keywords: ["life", "moments", "storytelling"],
        config: {
            background: "#fff",
            width: 400,
            height: 500,
            withSound: true,
        },
        url: "sahlabdelrahman.com",
        category: "Documentary",
    },
];
