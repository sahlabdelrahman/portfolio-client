import { dummyContactData } from "./config";

import Content from "@/components/client/Contact/Content";

export default function Contact() {
    return (
        <main>
            <Content data={dummyContactData} />
        </main>
    );
}
