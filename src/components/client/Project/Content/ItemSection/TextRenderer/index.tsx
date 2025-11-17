"use client";

import { memo } from "react";

import SafeHTML from "@/components/global/SafeHTML/SafeHTML";

import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

import styles from "./styles.module.scss";

const TextRenderer = memo(function TextRenderer({
    item,
}: {
    item: ProjectItemProps;
}) {
    if (!item?.text?.content) return null;

    return (
        <SafeHTML
            html={item.text.content}
            className={styles.textRenderer}
            style={{
                textAlign: item.text.direction ?? "start",
            }}
        />
    );
});

export default TextRenderer;
