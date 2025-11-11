import { dummyAboutData } from "./config";
import Content from "@/components/client/About/Content";

export default function About() {
    return (
        <main>
            <Content data={dummyAboutData} />
        </main>
    );
}
