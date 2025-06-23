"use client";

import { memo, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

import styles from "./styles.module.scss";

interface CustomAudioProps extends Omit<ProjectItemProps, "type"> {
    className?: string;
}

const AudioComp = memo(function AudioComp({
    id = "",
    url = "",
    className = "",
    ariaLabel,
    mediaControls = {},
    ...rest
}: CustomAudioProps) {
    const t = useTranslations("common");
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [hasUserInteracted, setHasUserInteracted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Step 1: Detect scroll into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.25 }
        );

        if (audioRef.current) observer.observe(audioRef.current);

        return () => {
            if (audioRef.current) observer.unobserve(audioRef.current);
        };
    }, []);

    // Step 2: Detect user interaction
    useEffect(() => {
        const handleClick = () => {
            setHasUserInteracted(true);
            window.removeEventListener("click", handleClick);
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    // Step 3: Try to play
    useEffect(() => {
        if (
            audioRef.current &&
            hasUserInteracted &&
            isVisible &&
            mediaControls.autoPlay
        ) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch((err) => {
                    console.warn("Autoplay failed:", err.message);
                });
            }
        }
    }, [hasUserInteracted, isVisible, mediaControls.autoPlay]);

    const hideUi = mediaControls.controls === false;

    return (
        <audio
            ref={audioRef}
            id={id}
            aria-label={ariaLabel}
            controls={true} // must be true for autoplay to be allowed
            muted={mediaControls?.muted ?? false}
            loop={mediaControls?.loop ?? false}
            className={`${styles.audio} ${
                hideUi ? styles.hidden : ""
            } ${className}`.trim()}
            {...rest}
        >
            {url && <source src={url} type="audio/mpeg" />}
            {t("browserNotSupportAudioTag")}
        </audio>
    );
});

export default AudioComp;
