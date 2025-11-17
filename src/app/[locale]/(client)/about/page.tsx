import AnimatedPageWrapper from "@/components/global/Slider/AnimatedPageWrapper";

import { dummyAboutData } from "./config";
import Content from "@/components/client/About/Content";

export default function About() {
    return (
        <AnimatedPageWrapper>
            <main>
                <Content data={dummyAboutData} />
            </main>
        </AnimatedPageWrapper>
    );
}
