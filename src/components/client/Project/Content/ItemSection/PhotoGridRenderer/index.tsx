"use client";

import { memo } from "react";
import ImageComponent from "@/components/global/ImageComponent";
import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

import styles from "./styles.module.scss";

interface PhotoGridRendererProps {
    item: ProjectItemProps;
}

const PhotoGridRenderer = memo(function PhotoGridRenderer({
    item,
}: PhotoGridRendererProps) {
    if (!item?.items || item.items.length === 0) return null;

    return (
        <div
            className={styles.gridWrapper}
            style={{
                gridTemplateColumns: `repeat(${item?.items?.length}, 1fr)`,
                gap: item?.config?.spaceBetweenItems,
            }}
        >
            {item.items.map((subItem) => {
                return <ImageComponent key={subItem?.id} {...subItem} />;
            })}
        </div>
    );
});

export default PhotoGridRenderer;
