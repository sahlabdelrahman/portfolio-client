import FlipBook from "../FlipBook";

import {
    BookConfigProps,
    BookItemProps,
} from "@/app/[locale]/(client)/books/[slug]/types";

import styles from "./styles.module.scss";

interface ContentProps {
    config: BookConfigProps;
    items: BookItemProps[];
    cover?: BookItemProps;
}

const Content = ({ config, items }: ContentProps) => {
    const { content } = styles;

    return (
        <div
            className={content}
            style={{
                background: config.background ?? "",
            }}
        >
            <FlipBook config={config} items={items} />
        </div>
    );
};

export default Content;
