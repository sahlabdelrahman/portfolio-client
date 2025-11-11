import { AboutProps } from "@/types/client/about";

export const dummyAboutData: AboutProps = {
    id: "about-1",
    layout: "imageLeft", // fullWidthImage, smallAndRoundedImage, imageLeft, imageRight
    image: {
        id: "img-1",
        alt: "Artist portrait",
        url: "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
        blurDataURL:
            "https://images.squarespace-cdn.com/content/v1/5f49bef663debb4c07f401e9/1645467667341-S3Z62MK7T56DJPK64KO3/Markosian_1915_L_005.jpg?format=2500w",
        width: 800,
        height: 1000,
        caption: "Artist in his studio, 2024",
    },
    text: `
    <p>Sahl Abdelrhman is a documentary photographer based in Egypt.</p>
    <p>His work focuses on social and human rights stories through long-term projects.</p>
  `,
    sections: [
        {
            id: "grants",
            title: "Grants & Awards",
            content: `
        <ul>
          <li>World Press Photo Foundation – 2024</li>
          <li>Magnum Foundation – 2023</li>
        </ul>
      `,
        },
        {
            id: "exhibitions",
            title: "Exhibitions",
            content: `
        <ul>
          <li>Cairo Photo Festival – 2022</li>
          <li>Dokufest, Kosovo – 2021</li>
        </ul>
      `,
        },
    ],
};
