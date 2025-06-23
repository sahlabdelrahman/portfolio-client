import { useTranslations } from "next-intl";

import Button from "../../Button";

import { ItemProps } from "@/types/client/global";
import { SubItemProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

import styles from "./styles.module.scss";

interface DotsProps {
    activeIndex: number;
    items?: ItemProps[] | SubItemProjectItemProps[];
    onClick: (index: number) => void;
}

const Dots = ({ activeIndex, items = [], onClick }: DotsProps) => {
    const t = useTranslations("common");

    return (
        <div
            className={styles.dots}
            role="tablist"
            aria-label={t("slideNavigation")}
        >
            {items.map((_, index) => {
                const isActive = activeIndex === index;

                return (
                    <Button
                        key={items?.[index]?.id}
                        className={`${styles.dot} ${
                            isActive ? styles.active : ""
                        }`}
                        onClick={() => onClick(index)}
                        aria-current={isActive ? "true" : undefined}
                    >
                        <></>
                    </Button>
                );
            })}
        </div>
    );
};

export default Dots;
