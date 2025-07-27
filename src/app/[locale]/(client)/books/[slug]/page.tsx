// TODO: Remember to replace static data with data from the book response

import Content from "@/components/client/Book/Content";

import { books } from "./config";

export default function Book() {
    return (
        <main>
            <Content
                items={books[0]?.items}
                config={books[0]?.config}
                cover={books[0]?.cover}
            />
        </main>
    );
}
