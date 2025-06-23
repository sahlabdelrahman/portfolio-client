// TODO: Remember to replace static data with data from the project response

import Content from "@/components/client/Project/Content";

import { projects } from "./config";

export default function Project() {
    return (
        <main>
            <Content
                items={projects[0]?.items}
                config={projects[0]?.config}
                cover={projects[0]?.cover}
            />
        </main>
    );
}
