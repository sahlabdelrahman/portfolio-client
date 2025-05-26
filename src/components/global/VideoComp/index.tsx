"use client";

import { memo, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { ItemProps } from "@/types/client/global";

import styles from "./styles.module.scss";

interface CustomVideoProps extends Omit<ItemProps, "type"> {
    className?: string;
}

const VideoComp = ({
    id = "",
    url = "",
    className = "",
    width = 200,
    height = 200,
    ariaLabel,
    videoControls = {},
    ...rest
}: CustomVideoProps) => {
    const t = useTranslations("common");
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            {
                threshold: 0.25,
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        };
    }, []);

    return (
        <video
            ref={videoRef}
            id={id}
            aria-label={ariaLabel}
            width={width}
            height={height}
            className={`${styles.video} ${className}`.trim()}
            {...videoControls}
            poster={videoControls?.poster?.url}
            preload="metadata"
            {...rest}
        >
            {isVisible && <source src={url} type={videoControls.type} />}
            {t("browserNotSupportVideoTag")}
        </video>
    );
};

export default memo(VideoComp);
