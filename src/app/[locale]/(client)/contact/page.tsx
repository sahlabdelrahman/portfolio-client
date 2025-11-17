import AnimatedPageWrapper from "@/components/global/Slider/AnimatedPageWrapper";

import { dummyContactData } from "./config";

import Content from "@/components/client/Contact/Content";

export default function Contact() {
    return (
        <AnimatedPageWrapper>
            <main>
                <Content data={dummyContactData} />
            </main>
        </AnimatedPageWrapper>
    );
}
