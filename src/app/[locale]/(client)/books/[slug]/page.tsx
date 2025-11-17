// TODO: Remember to replace static data with data from the book response
// import { notFound } from "next/navigation";

import AnimatedPageWrapper from "@/components/global/Slider/AnimatedPageWrapper";

import Content from "@/components/client/Book/Content";

import { books } from "./config";

// export default function Book({{ params }}) {
export default function Book() {
    // const { slug } = await params;
    // const book = await fetchBook(slug);

    // if (!book) {
    //     notFound();
    // }
    return (
        <AnimatedPageWrapper>
            <main>
                <Content
                    items={books[0]?.items}
                    config={books[0]?.config}
                    cover={books[0]?.cover}
                />
            </main>
        </AnimatedPageWrapper>
    );
}
