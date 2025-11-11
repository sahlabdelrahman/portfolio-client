"use client";

import { memo, useMemo } from "react";
import DOMPurify from "dompurify";

import ImageComponent from "@/components/global/ImageComponent";
import NoData from "@/components/global/NoData";

import { AboutProps } from "@/types/client/about";
import { layoutTypes } from "./config";

import styles from "./styles.module.scss";

interface ContentProps {
    data: AboutProps;
}

const Content = memo(({ data }: ContentProps) => {
    const { layout, image, text, sections } = data;

    const renderImage = useMemo(() => {
        if (!image) return null;

        return (
            <div
                className={`${styles.image} ${
                    layout === layoutTypes.smallAndRoundedImage
                        ? styles.smallAndRoundedImage
                        : ""
                }`}
            >
                <ImageComponent {...image} />
                {image.caption && (
                    <p className={styles.caption}>{image.caption}</p>
                )}
            </div>
        );
    }, [image, layout]);

    const renderText = useMemo(() => {
        if (!text) return null;

        return (
            <div
                className={styles.text}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(text),
                }}
            />
        );
    }, [text]);

    const renderSections = useMemo(() => {
        if (!sections || sections.length === 0) return null;

        return (
            <div className={styles.sections}>
                {sections.map((section) => (
                    <section className={styles.section} key={section.id}>
                        <h2 className={styles.title}>{section.title}</h2>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(section.content),
                            }}
                        />
                    </section>
                ))}
            </div>
        );
    }, [sections]);

    const isEmpty = !image && !text && (!sections || sections.length === 0);
    return (
        <div
            className={`${styles.content} ${styles[`layout-${layout}`] || ""}`}
        >
            {isEmpty ? (
                <NoData />
            ) : (
                <>
                    {(layout === layoutTypes.fullWidthImage ||
                        layout === layoutTypes.smallAndRoundedImage) && (
                        <>
                            {renderImage}
                            {renderText}
                            {renderSections}
                        </>
                    )}

                    {layout === layoutTypes.imageLeft && (
                        <>
                            <div className={styles.row}>
                                <div className={styles.col}>{renderImage}</div>
                                <div className={styles.col}>{renderText}</div>
                            </div>
                            <div className={styles.row}>{renderSections}</div>
                        </>
                    )}

                    {layout === layoutTypes.imageRight && (
                        <>
                            <div className={styles.row}>
                                <div className={styles.col}>{renderText}</div>
                                <div className={styles.col}>{renderImage}</div>
                            </div>
                            <div className={styles.row}>{renderSections}</div>
                        </>
                    )}
                </>
            )}
        </div>
    );
});

Content.displayName = "Content";

export default Content;
