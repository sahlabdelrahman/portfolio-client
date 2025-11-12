import { ContactProps } from "@/types/client/contact";

export const dummyContactData: ContactProps = {
    id: "contact-1",
    title: "Get in touch",
    description:
        "Based in Egypt Available worldwide - can be reached through johndoe@gmail.com",
    services: [
        {
            id: "documentary",
            title: "Documentary Photography",
            content: `
        <p>
          Long-term projects, editorial assignments, human rights, social and environmental issues.
        </p>
      `,
        },
        {
            id: "portraiture",
            title: "Portraiture",
            content: `
        <p>
          Artistic and editorial portraits for publications, NGOs, and personal commissions.
        </p>
      `,
        },
    ],
};
