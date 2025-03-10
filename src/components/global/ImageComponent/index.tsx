import NextImage, { ImageProps as NextImageProps } from "next/image";
import styles from "./image.module.scss";

interface CustomImageProps extends Omit<NextImageProps, "src"> {
    imageUrl?: string;
    className?: string;
    width?: number;
    height?: number;
}

const ImageComponent = ({
    imageUrl = "",
    className = "",
    width = 200, // Default width
    height = 200, // Default height
    alt,
    ...rest
}: CustomImageProps) => {
    return (
        <NextImage
            src={imageUrl}
            width={width}
            height={height}
            alt={alt}
            loading="lazy"
            className={`${styles.image} ${className}`}
            {...(rest.blurDataURL && { placeholder: "blur" })}
            {...rest}
        />
    );
};

export default ImageComponent;
