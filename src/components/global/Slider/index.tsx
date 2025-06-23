"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import Arrows from "./Arrows";
import Dots from "./Dots";
import SliderContent from "./SliderContent";

import { ItemProps } from "@/types/client/global";
import { SubItemProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

import styles from "./styles.module.scss";

export const slideTime = 5000;

interface SliderProps {
    items: ItemProps[] | SubItemProjectItemProps[];
    autoPlay?: boolean;
    withBullets?: boolean;
    withArrows?: boolean;
    respectVideoDuration?: boolean;
}

const Slider = ({
    items,
    autoPlay = true,
    withBullets = true,
    withArrows = true,
    respectVideoDuration = true,
}: SliderProps) => {
    const t = useTranslations("common");
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsLength = items.length;
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const getDuration = useCallback(() => {
        const currentItem = items[activeIndex];
        if (!currentItem) return slideTime;

        if (currentItem.type === "video") {
            if (respectVideoDuration && currentItem.duration)
                return currentItem.duration;
        }

        return slideTime;
    }, [activeIndex, items, respectVideoDuration]);

    const startAutoPlay = useCallback(() => {
        if (intervalRef.current) clearTimeout(intervalRef.current);

        const timeoutDuration = getDuration();

        intervalRef.current = setTimeout(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === itemsLength - 1 ? 0 : prevIndex + 1
            );
        }, timeoutDuration);
    }, [getDuration, itemsLength]);

    const goToPrevSlide = useCallback(() => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? itemsLength - 1 : prevIndex - 1
        );
    }, [itemsLength]);

    const goToNextSlide = useCallback(() => {
        setActiveIndex((prevIndex) =>
            prevIndex === itemsLength - 1 ? 0 : prevIndex + 1
        );
    }, [itemsLength]);

    useEffect(() => {
        if (!autoPlay) return;
        startAutoPlay();
        return () => {
            if (intervalRef.current) clearTimeout(intervalRef.current);
        };
    }, [autoPlay, startAutoPlay, activeIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                goToNextSlide();
            }
            if (e.key === "ArrowLeft") {
                goToPrevSlide();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToNextSlide, goToPrevSlide]);

    useEffect(() => {
        if (autoPlay) startAutoPlay();
    }, [activeIndex, autoPlay, startAutoPlay]);

    return (
        <div
            className={styles.slider}
            role="region"
            aria-label={t("imageSlider")}
        >
            <SliderContent items={items} activeIndex={activeIndex} />
            {withBullets && (
                <Dots
                    activeIndex={activeIndex}
                    onClick={(index) => {
                        setActiveIndex(index);
                    }}
                    items={items}
                />
            )}
            {withArrows && (
                <Arrows prevSlide={goToPrevSlide} nextSlide={goToNextSlide} />
            )}
        </div>
    );
};

export default Slider;
