"use client";

import { memo, ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import ImageComponent from "../../ImageComponent";
import VideoComp from "../../VideoComp";
import Button from "../../Button";

import { contentTypes } from "@/components/client/Home/Content/config";
import { ItemProps } from "@/types/client/global";

import styles from "./styles.module.scss";

const ItemWrapper = ({
    children,
    path,
    action,
}: {
    children: ReactNode;
    path?: string;
    action?: () => void;
}) => {
    if (path) {
        return (
            <Link
                href={path}
                className={`${styles.itemLayout} ${styles.clickable}`}
            >
                {children}
            </Link>
        );
    } else if (action) {
        return (
            <Button
                onClick={action}
                className={`${styles.itemLayout} ${styles.clickable}`}
            >
                {children}
            </Button>
        );
    } else {
        return <div className={styles.itemLayout}>{children}</div>;
    }
};

const ItemLayout = ({
    item,
    path,
    action,
}: {
    item: ItemProps;
    path?: string;
    action?: () => void;
}) => {
    const { type, title, description } = item;
    return (
        <ItemWrapper path={path} action={action}>
            {type === contentTypes.video ? (
                <VideoComp {...item} />
            ) : (
                <ImageComponent {...item} />
            )}
            {(title || description) && (
                <div className={styles.overlay}>
                    <div className={styles.content}>
                        {title && (
                            <p className={`${styles.text} ${styles.title}`}>
                                {title}
                            </p>
                        )}
                        {title && (
                            <p
                                className={`${styles.text} ${styles.description}`}
                            >
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </ItemWrapper>
    );
};

export default memo(ItemLayout);
