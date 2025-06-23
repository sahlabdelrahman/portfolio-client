import { ItemProps } from "@/types/client/global";
import { SubItemProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

import VideoComp from "../../VideoComp";
import ImageComponent from "../../ImageComponent";

import { contentTypes } from "@/components/client/Home/Content/config";

import styles from "./styles.module.scss";
import { useMemo } from "react";

interface SliderContentProps {
    activeIndex: number;
    items?: ItemProps[] | SubItemProjectItemProps[];
}

const SliderContent = ({ activeIndex, items = [] }: SliderContentProps) => {
    const slides = useMemo(() => {
        return items.map((item, index) => {
            const isActive = activeIndex === index;
            const { type, ...props } = item;

            const renderComponent =
                type === contentTypes.video ? (
                    <VideoComp
                        {...props}
                        className={styles.video}
                        aria-hidden={!isActive}
                    />
                ) : (
                    <ImageComponent
                        {...props}
                        className={styles.image}
                        alt={props.alt || `Slide image ${index + 1}`}
                        aria-hidden={!isActive}
                    />
                );

            return (
                <div
                    key={items?.[index]?.id || index}
                    className={`${styles.slide} ${
                        !isActive ? styles.inActive : ""
                    }`}
                    role="tabpanel"
                    aria-hidden={!isActive}
                >
                    {renderComponent}
                </div>
            );
        });
    }, [items, activeIndex]);

    return <div className={styles.sliderContent}>{slides}</div>;
};

export default SliderContent;
