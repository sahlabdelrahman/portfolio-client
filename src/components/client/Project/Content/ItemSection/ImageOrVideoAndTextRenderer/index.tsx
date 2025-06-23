"use client";

import { memo, useMemo } from "react";

import ImageComponent from "@/components/global/ImageComponent";
import VideoComp from "@/components/global/VideoComp";
import TextRenderer from "../TextRenderer";

import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";
import { itemTypes } from "../../config";

import styles from "./styles.module.scss";

interface ImageOrVideoAndTextRendererProps {
    item: ProjectItemProps;
}

const ImageOrVideoAndTextRenderer = memo(function ImageOrVideoAndTextRenderer({
    item,
}: ImageOrVideoAndTextRendererProps) {
    const textItem = useMemo(
        () => item.items?.find((sub) => sub.type === itemTypes.text),
        [item.items]
    );

    if (!item?.items || item.items.length === 0) return null;

    const verticalAlign = textItem?.text?.verticallyDirection ?? "start";
    const wrapperStyle = {
        gap: item?.config?.spaceBetweenItems ?? "1rem",
    };

    const renderSubItem = (subItem: ProjectItemProps) => {
        switch (subItem.type) {
            case itemTypes.text:
                return <TextRenderer key={subItem.id} item={subItem} />;
            case itemTypes.image:
                return <ImageComponent key={subItem.id} {...subItem} />;
            case itemTypes.video:
                return <VideoComp key={subItem.id} {...subItem} />;
            default:
                return null;
        }
    };

    return (
        <div
            className={`${styles.wrapper} ${styles[`align-${verticalAlign}`]}`}
            style={wrapperStyle}
        >
            {item.items.map(renderSubItem)}
        </div>
    );
});

export default ImageOrVideoAndTextRenderer;
