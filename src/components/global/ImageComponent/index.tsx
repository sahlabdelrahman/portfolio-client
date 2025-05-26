import { memo } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

import styles from "./styles.module.scss";

interface CustomImageProps extends Omit<NextImageProps, "src"> {
    url?: string;
    className?: string;
    width?: number;
    height?: number;
    ariaLabel?: string;
}

const ImageComponent = ({
    url = "",
    className = "",
    width = 200, // Default width
    height = 200, // Default height
    alt,
    ariaLabel = "",
    ...rest
}: CustomImageProps) => {
    return (
        <NextImage
            src={url}
            width={width}
            height={height}
            alt={alt}
            loading="lazy"
            aria-label={ariaLabel}
            className={`${styles.image} ${className}`.trim()}
            {...(rest.blurDataURL && { placeholder: "blur" })}
            {...rest}
        />
    );
};

export default memo(ImageComponent);
