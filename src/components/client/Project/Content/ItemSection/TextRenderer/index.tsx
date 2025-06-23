"use client";

import DOMPurify from "dompurify";

import { memo } from "react";

import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

import styles from "./styles.module.scss";

const TextRenderer = memo(function TextRenderer({
    item,
}: {
    item: ProjectItemProps;
}) {
    if (!item?.text?.content) return null;

    return (
        <div
            className={styles.textRenderer}
            style={{
                textAlign: item.text.direction ?? "start",
            }}
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item.text.content),
            }}
        />
    );
});

export default TextRenderer;
