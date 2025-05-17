import { useTranslations } from "next-intl";

import Button from "../../Button";

// import PrevSlideIcon from "@/assets/icons/prevSlideIcon.svg";
// import NextSlideIcon from "@/assets/icons/nextSlideIcon.svg";

import styles from "./styles.module.scss";

interface ArrowsProps {
    prevSlide: () => void;
    nextSlide: () => void;
    canGoPrev?: boolean;
    canGoNext?: boolean;
}

const Arrows = ({
    prevSlide,
    nextSlide,
    canGoPrev = true,
    canGoNext = true,
}: ArrowsProps) => {
    const t = useTranslations("common");

    return (
        <div
            className={styles.arrows}
            tabIndex={0}
            role="group"
            aria-label={t("navigationArrows")}
        >
            <Button
                className={`${styles.arrow} ${styles.prevSlide}`}
                onClick={prevSlide}
                name={t("prevSlide")}
                disabled={!canGoPrev}
            >
                &#10094;
            </Button>
            <Button
                className={`${styles.arrow} ${styles.nextSlide}`}
                onClick={nextSlide}
                name={t("nextSlide")}
                disabled={!canGoNext}
            >
                &#10095;
            </Button>
        </div>
    );
};

export default Arrows;
