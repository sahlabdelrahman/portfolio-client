import ImageComponent from "@/components/global/ImageComponent";
import VideoComp from "@/components/global/VideoComp";

import { ItemProps } from "@/types/client/global";

import { contentTypes } from "./config";

import styles from "./styles.module.scss";
import Slider from "@/components/global/Slider";

interface ContentProps {
    data: ItemProps[];
}

const Content = ({ data }: ContentProps) => {
    if (data.length === 1) {
        const { type, ...props } = data[0];

        const renderComponent =
            type === contentTypes.video ? (
                <VideoComp {...props} className={styles.video} />
            ) : (
                <ImageComponent {...props} className={styles.image} />
            );

        return <div className={styles.content}>{renderComponent}</div>;
    }

    return (
        <div className={`${styles.content} ${styles.carousel}`}>
            <Slider items={data} withArrows={false} withBullets={false} />
        </div>
    );
};

export default Content;
