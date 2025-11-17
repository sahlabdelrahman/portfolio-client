// TODO: Remember to replace static data with data from the project response
// import { notFound } from "next/navigation";

import AnimatedPageWrapper from "@/components/global/Slider/AnimatedPageWrapper";

import Content from "@/components/client/Project/Content";

import { projects } from "./config";

// export default function Project({{ params }}) {
export default function Project() {
    // const { slug } = await params;
    // const project = await fetchProject(slug);

    // if (!project) {
    //     notFound();
    // }
    return (
        <AnimatedPageWrapper>
            <main>
                <Content
                    items={projects[0]?.items}
                    config={projects[0]?.config}
                    cover={projects[0]?.cover}
                />
            </main>
        </AnimatedPageWrapper>
    );
}
