import ItemSection from "./ItemSection";
import ImageComponent from "@/components/global/ImageComponent";
import VideoComp from "@/components/global/VideoComp";

import { contentTypes } from "../../Home/Content/config";

import {
    ProjectItemProps,
    ProjectConfigProps,
} from "@/app/[locale]/(client)/projects/[slug]/types";

import styles from "./styles.module.scss";

interface ContentProps {
    items: ProjectItemProps[];
    config: ProjectConfigProps;
    cover?: ProjectItemProps;
}

const Content = ({ items, config, cover }: ContentProps) => {
    const { content, section, coverSection } = styles;

    return (
        <div
            className={content}
            style={{
                background: config.background ?? "",
                gap: config.contentSpacing ?? "",
            }}
        >
            {cover && config.showCoverWithTheContent && (
                <section
                    key={cover.id}
                    className={[section, coverSection].join(" ")}
                >
                    {cover.type === contentTypes.video ? (
                        <VideoComp {...cover} />
                    ) : (
                        <ImageComponent {...cover} />
                    )}
                </section>
            )}
            {items.map((item) => (
                <ItemSection key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Content;
