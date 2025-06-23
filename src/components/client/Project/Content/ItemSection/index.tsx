import { Suspense } from "react";

import NoData from "@/components/global/NoData";

import { rendererRegistry } from "./rendererRegistry";
import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

import styles from "./styles.module.scss";

interface ItemSectionProps {
    item: ProjectItemProps;
}

const ItemSection = ({ item }: ItemSectionProps) => {
    const { section, full, caption } = styles;
    const Renderer = rendererRegistry[item?.type];
    return (
        <section
            key={item.id}
            className={[section, item?.size === "full" ? full : ""].join(" ")}
            style={{
                paddingBlock: item.config?.spaceInTopAndBottom ?? "",
                background: item.config?.background ?? "",
            }}
        >
            {/* TODO: Replace loading text with loading indicator */}
            <Suspense fallback={"Loading..."}>
                {Renderer ? (
                    <Renderer item={item} />
                ) : (
                    <NoData text={`Unsupported type: ${item.type}`} />
                )}
            </Suspense>
            {item.caption?.content && (
                <p
                    className={caption}
                    style={{
                        textAlign: item.caption.direction ?? "start",
                        color: item.caption.color ?? "",
                    }}
                >
                    {item.caption.content}
                </p>
            )}
        </section>
    );
};

export default ItemSection;
