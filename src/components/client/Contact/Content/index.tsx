"use client";

import { memo } from "react";

import { ContactProps } from "@/types/client/contact";

import styles from "./styles.module.scss";

interface ContentProps {
    data: ContactProps;
}

const Content = memo(({ data }: ContentProps) => {
    const { id } = data;
    console.log("🚀 ~ Content ~ id:", id);

    return (
        <div className={styles.content}>
            <p>Contact</p>
        </div>
    );
});

Content.displayName = "Content";

export default Content;
